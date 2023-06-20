import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Misure from '../../datajs/Misure'

import { getTimeLab, getDateLab, compare, getDayName } from '../../utils/ManageDate';
import { DeafutlAllData } from '../../datajs/DeafutlAllData'

let btFilters: string[] = [];
const values = Misure;
interface Items {
  id?: string;
  id_measure?: string;
  date_complete?: string;
  date?: string;
  hour?: string;
  value?: string;
  misure?: string;
  type?: string;
  code?: string;
  defaultOptionValue?: string | null;
  defaultValue1?: number;
  defaultValue2?: number;
  maxValue: number | string;
  measurementType?: string;
  measurementValueType?: string;
  minValue: number | string;
  uom?: string;
}
const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true },
  { field: 'date', headerName: 'Data', width: 110 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
];

const PatientMeasurements = () => {
  let rows: Items[] = [];
  const [rowdata, setRowdata] = useState(rows);
  const [type, setType] = React.useState(null);
  const [loadComponent, setLoadComponent] = useState(0);

  useEffect(() => {
    let id_patient = 1;
    // let arr_v = ["AUSCULTATION", "BLOOD_PRESSURE", "BOWEL", "DIURESIS", "DIURESIS_VOL", "HEIGHT", "HGT", "HR", "RR", "SATURATION", "TEMPERATURE", "WEIGHT"];
    let arr_v = ["WEIGHT"];
    let arr_f: any[] = [];
    let type_mis = "WEIGHT"
    DeafutlAllData.getPatientrecords_All_measurement(id_patient, type_mis).then((res) => {
      // console.log("--------------------------response getPatientrecordsAllMeasurementById");
      // console.log(res);
      res.forEach(function (k: any) {
        // console.log(k.id);
        rows.push({
          id: k.id,
          id_measure: k.recordType.measurementType,
          date_complete: k.recordDate,
          date: getDateLab(k.recordDate),
          hour: getTimeLab(k.recordDate),
          value: k.value1,
          misure: k.recordType.misure,
          type: k.recordType.measurementType.toLowerCase(),
          code: k.recordType.code,
          defaultOptionValue: k.recordType.defaultOptionValue,
          defaultValue1: k.value1,// ---set the Default Value
          defaultValue2: k.recordType.defaultValue2,
          maxValue: k.recordType.maxValue,
          measurementType: k.recordType.measurementType,
          measurementValueType: k.recordType.measurementValueType,
          minValue: k.recordType.minValue,
          uom: k.recordType.uom,
        });
      });
      setRowdata(rows);
      setLoadComponent(1);
    });


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
      {loadComponent ? <>
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
                  type: false,
                  value: false
                },
              },
            }}

            rows={rowdata}
            columns={columns}
          />
        </div>
      </> : null}
    </Container>
  );

};

export default PatientMeasurements;
