import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientNav from "../../components/navBars/PatientNav";
import Divider from '@mui/material/Divider';
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";


const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true },
  { field: 'date', headerName: 'Data', width: 110 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
];

const rows = [
  { id: 1, id_measure: 122, date: "12/05/2022", hour: '9:00', value: '94', misure: 'Weight', type: 'weight' },
  { id: 2, id_measure: 125, date: "12/05/2022", hour: '9:00', value: '96', misure: 'Weight', type: 'weight' },
  { id: 3, id_measure: 126, date: "12/05/2022", hour: '9:00', value: '94', misure: 'Height', type: 'height' },
  { id: 4, id_measure: 127, date: "12/05/2022", hour: '9:30', value: '94', misure: 'Height', type: 'height' },
  { id: 5, id_measure: 129, date: "12/05/2022", hour: '9:00', value: '95', misure: 'Height', type: 'height' },
  { id: 6, id_measure: 132, date: "12/05/2022", hour: '9:00', value: '94', misure: 'Height', type: 'height' },
  { id: 7, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', misure: 'Height', type: 'height' },
];
const PatientMeasurements = ({ setAuth }) => {
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
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              console.log(params);
              console.log(params.row.misure);
              console.log("aaa");
              navigate("/PatientInsertMeasurements", {
                state: params.row,
              })
            }
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
                id_measure: false,
                value: false,
                type: false,
              },
            },
          }}
          size="medium"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Container>
  );

};

export default PatientMeasurements;
