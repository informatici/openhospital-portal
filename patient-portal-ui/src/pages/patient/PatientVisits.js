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
  { field: 'pathology', headerName: 'Pathology', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
  { field: 'category', headerName: 'Category', width: 180 },
  { field: 'diagnosis', headerName: 'Diagnosis', width: 180 },
  { field: 'note', headerName: 'Note', width: 180 },
];

const rows = [
  { id: 1, id_measure: 122, date: "12/05/2022", hour: '9:00', value: '94', pathology: 'Malaria', type: 'weight', category: 'categoria della .Malaria..', diagnosis: 'diagnosis diagnosis Malariadiagnosis', note: 'note Malarianote note' },
  { id: 2, id_measure: 125, date: "12/05/2022", hour: '9:00', value: '96', pathology: 'Bronchite', type: 'weight', category: 'categoria della .Bronchite..', diagnosis: 'diagnosis diagnosis diagnosis', note: 'note note note' },
  { id: 3, id_measure: 126, date: "12/05/2022", hour: '9:00', value: '94', pathology: 'Bronchite', type: 'height', category: 'categoria della .Bronchite..', diagnosis: 'diagnosis diagnosis diagnosis', note: 'note note note' },
  { id: 4, id_measure: 127, date: "12/05/2022", hour: '9:30', value: '94', pathology: 'Malaria', type: 'height', category: 'categoria dellaMalaria ...', diagnosis: 'diagnosis diagnosis Malaria diagnosis', note: 'note Malaria note note' },
  { id: 5, id_measure: 129, date: "12/05/2022", hour: '9:00', value: '95', pathology: 'Frattura', type: 'height', category: 'categoria della ..Frattura.', diagnosis: 'diagnosis Frattura diagnosis diagnosis', note: 'note note note' },
  { id: 6, id_measure: 132, date: "12/05/2022", hour: '9:00', value: '94', pathology: 'Frattura', type: 'height', category: 'categoria della ..Frattura .', diagnosis: 'diagnosis diagnosis Frattura diagnosis', note: 'note note note' },
  { id: 7, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
  { id: 8, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
  { id: 9, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
  { id: 10, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 11, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 12, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 13, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 14, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 15, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 16, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 17, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
 { id: 18, id_measure: 135, date: "12/05/2022", hour: '9:00', value: '97', pathology: 'Height', type: 'height', category: 'categoria della ..Height.', diagnosis: 'diagnosis Height diagnosis diagnosis', note: 'note Heightnote note' },
];
const PatientVisitDetails = ({ setAuth }) => {
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
      <PatientSmartNav page={'PatientVisitDetails'} />
      <div style={{ width: '100%' ,height: '600px' }}>
        <DataGrid
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              console.log(params);
              console.log(params.row.pathology);
              console.log("aaa");
              navigate("/PatientVisitDetails", {
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
                category: false,
                diagnosis: false,
                note: false,
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

export default PatientVisitDetails;
