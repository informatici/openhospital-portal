import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';

import { getTimeLab, getDateLab } from '../../utils/ManageDate';
import { DefaultAllData } from '../../datajs/DefaultAllData'

import Payments from '../../datajs/Payments'
// let btFilters: string[] = [];
let btFilters: any[] = [];



let rows: any[] = [];
let data_json = Payments;
const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'date', headerName: 'Data', width: 100, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'hour', headerName: 'Hour', width: 60, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'value', headerName: 'Value', width: 100, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'misure', headerName: 'Misure', width: 140, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'type', headerName: 'Type', width: 180, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
];


let data_values: any = data_json[0]["xy1457uuu"];
Object.keys(data_values).forEach(function (key) {
  data_values[key].forEach(function (k: { type: any; }) {
    if (!btFilters.includes(k.type)) {
      btFilters.push(k.type);
    }
  });
  rows.push([data_values[key].map((e: any, i: number) => ({ id: "", id_measure: e.id_measure, date_complete: e.date, date: getDateLab(e.date), hour: getTimeLab(e.date), value: e.value, misure: (key), type: e.type }))])
});
rows = rows.flat(2);
Object.keys(rows).forEach(function (key: any, value) {
  rows[key].id = key;
});
let rows_def = rows;
// let rows_def = rows.sort(compare(rows.date_complete));
const PatientPayments = () => {
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
      <PatientSmartNav page={'PatientPayments'} />
      <div style={{ width: '100%', height: '600px' }}>
        <Box
          sx={{
            overflowX: "scroll",
            width: 1,
            // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}
        >
          <ButtonGroup disableElevation className="button_group_f" sx={{ mt: 1, mb: 1, overflowX: " scroll", }} variant="outlined" aria-label="outlined button group">
            <Button variant={null === type ? 'contained' : 'outlined'} key="all" color="primary" onClick={() => setType(null)}>All</Button>
            {btFilters.map((bt_el) => (
              <Button variant={bt_el === type ? 'contained' : 'outlined'} key={bt_el} color="primary" onClick={() => { setType(bt_el); }}>{bt_el}</Button>
            ))}
          </ButtonGroup>
        </Box>
        <DataGrid
          sx={{
            border: 0,
            '&>.MuiDataGrid-main': {
              '&>.MuiDataGrid-columnHeaders': {
                borderBottom: 'none',
              },

              '& div div div div >.MuiDataGrid-cell': {
                borderBottom: 'none',
              },
            },
            "& .MuiDataGrid-virtualScrollerRenderZone": {
              "& .MuiDataGrid-row": {
                width: "96%",
                backgroundColor: "rgba(235, 235, 235, .9)",
                margin: "0.3em",
                borderRadius: 3

              }
            },
            '& .super-app-theme--header': {
              fontSize: '0.8em'
            },
          }}

          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              navigate("/PatientPaymentDetails", {
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
    </Container >
  );

};

export default PatientPayments;
