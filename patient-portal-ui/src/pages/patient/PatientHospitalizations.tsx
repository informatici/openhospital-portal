import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';

import { getTimeLab, getDateLab, compare } from '../../utils/ManageDate';
import Hospitalizations from '../../datajs/Hospitalizations'

let rows: any[] = [];
let data_json=Hospitalizations;
const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true },
  { field: 'date', headerName: 'Data', width: 110 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
];

let btFilters: any[] = [];
let data_values: any = data_json[0]["xy1457uuu"];
Object.keys(data_values).forEach(function (key) {
  data_values[key].forEach(function (k: { type: any; }) {
    if (!btFilters.includes(k.type)) {
      btFilters.push(k.type);
    }
  });
  rows.push([data_values[key].map((e: any, i: number) =>({ id: "", id_measure: e.id_measure, date_complete: e.date, date: getDateLab(e.date), hour: getTimeLab(e.date), value: e.value, misure: (key), type: e.type }))])
});
rows = rows.flat(2);
Object.keys(rows).forEach(function (key: any, value) {
  rows[key].id = key;
});
let rows_def = rows;
// let rows_def = rows.sort(compare(rows.date_complete));
const PatientHospitalizations = () => {
  const [type, setType] = React.useState(null);
  console.log(type);
  if (type != null) {
    rows = rows_def.filter(function (el) {
      return el.type == type
    });
  } else {
    rows = rows_def;
  }
  console.log(rows);
  if (rows) {
    // rows.sort(compare);
  }
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
      <PatientSmartNav page={'PatientHospitalizations'} />
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
            {btFilters.map((button) => (
              <Button key={button} color="primary" onClick={() => setType(button)}>{button}</Button>
            ))}
          </ButtonGroup>
        </Box>
        <DataGrid
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              navigate("/PatientHospitalizationDetails", {
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
                misure: false,
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

export default PatientHospitalizations;
