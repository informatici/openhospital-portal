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


const columns = [
  { field: 'id', headerName: 'ID', width: 0, hidden: false },
  { field: 'data', headerName: 'Data', width: 70 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 70 },
];

const rows = [
  { id: 1, data: "12/05/2022", hour: '9:00', value: '110,2', misure: 'Pressure' },
  { id: 2, data: "12/05/2022", hour: '9:00', value: '110,2', misure: 'Pressure' },
  { id: 3, data: "12/05/2022", hour: '9:00', value: '110,2', misure: 'Pressure' },
  { id: 4, data: "12/05/2022", hour: '9:00', value: '110,2', misure: 'Pressure' },
  { id: 5, data: "12/05/2022", hour: '9:00', value: '110,2', misure: 'Pressure' },
  { id: 6, data: "12/05/2022", hour: '9:00', value: '110,2', misure: 'Pressure' },
  { id: 7, data: "12/05/2022", hour: '9:00', value: '110,2', misure: 'Pressure' },
];
const PatientMeasurements = ({ setAuth }) => {

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
