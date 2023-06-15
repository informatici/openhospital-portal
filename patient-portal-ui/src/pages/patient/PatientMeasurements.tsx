import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Misure from '../../datajs/Misure'

import { DeafutlAllData } from '../../datajs/DeafutlAllData'

let btFilters: string[] = [];
const values = Misure;

const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true },
  { field: 'date', headerName: 'Data', width: 110 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
];

const getTimeLab = (date_to_c: string | number | Date) => {
  let res: string | number | Date = new Date(date_to_c);
  res = res.getHours() + ':' + res.getMinutes();
  return res;
};
const getDateLab = (date_to_c: string | number | Date) => {
  const t = new Date(date_to_c);
  let y: string | number | Date = t.getFullYear();
  let m: string | number | Date = t.getMonth() + 1; // Months start at 0!
  let d: string | number | Date = t.getDate();
  if (d < 10) d = '0' + d;
  if (m < 10) m = '0' + m;
  let res = d + '/' + m + '/' + y;
  return res;
};
function compare(a: { date_complete: number; }, b: { date_complete: number; }) {
  if (a.date_complete < b.date_complete) {
    return -1;
  }
  if (a.date_complete > b.date_complete) {
    return 1;
  }
  return 0;
}
const PatientMeasurements = () => {
  const [data, setData] = useState([]);

  const [type, setType] = React.useState(null);
  const [loadComponent, setLoadComponent] = useState(0);
  useEffect(() => {
    DeafutlAllData.getToken().then((res) => {
      console.log("response getToken");
      console.log(res);
      localStorage.setItem("Token", res)
      let id_patient = 10;
      DeafutlAllData.getPatientrecordsAllMeasurementById(id_patient).then((res) => {
        console.log("response getPatientrecordsAllMeasurementById");
        console.log(res);
        setData(res);
        setLoadComponent(1);
      });
    });
  }, []);


  let data_values: any = data;
  console.log(data_values);
  // Object.keys(data_values).forEach(function (key) {
  //   console.log(key);
  //   // let keyBt: any = data_values.recordType; 
  //   // data_values.recordType.forEach(function (k: { measurementType: any; }) {
  //   //   if (!btFilters.includes(k.measurementType)) {
  //   //     btFilters.push(k.measurementType);
  //   //   }
  //   // });
  //   // rows.push([data_values[key].map((e: any, i: number) => ({ id: "", id_measure: e.uom, date_complete: e.uom, date: e.uom, hour: e.uom, value: e.uom, misure: (key), type: e.uom }))])
  // });
  let rows: any[] = [];
  Object.keys(data_values).forEach(function (key, i) {
    console.log(data_values.recordType.measurementType);
    if (!btFilters.includes(data_values.recordType.measurementType)) {
      btFilters.push(data_values.recordType.measurementType);
    }
    console.log(data_values.value1);
    rows.push({
      id: i,
      id_measure: data_values.value1,
      date_complete: data_values.value1,
      date: getDateLab(data_values.recordDate),
      hour: getTimeLab(data_values.recordDate),
      value: data_values.value1,
      misure: data_values.value1,
      type: data_values.value1
    })
  });
  let navigate = useNavigate();
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PatientSmartNav page={'PatientMeasurements'} />
      <div style={{ width: '100%', height: '600px' }}>
        <Box
          sx={{
            overflowX: "scroll",
            width: 1,
            // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}
        >
          <ButtonGroup sx={{ mt: 1, mb: 1, overflowX: "scroll", }} variant="outlined" aria-label="outlined button group">
            <Button key="all" color="primary" onClick={() => setType(null)}>All</Button>
            {btFilters.map((bt_el) => (
              //  <Button key={bt_el} color="primary" onClick={() => setType(bt_el)}>{bt_el}</Button>
              <Button key={bt_el} color="primary" >{bt_el}</Button>
            ))}
          </ButtonGroup>
        </Box>
        <DataGrid
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              navigate("/PatientInsertMeasurements", {
                state: params.row,
              })
            }
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
                date_complete: false,
                id_measure: false,
                value: false,
                type: false,
              },
            },
          }}

          rows={rows}
          columns={columns}
        />
      </div>
    </Container>
  );

};

export default PatientMeasurements;
