import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';

import { getTimeLab, getDateLab } from '../../utils/ManageDate';
import { DefaultAllData } from '../../datajs/DefaultAllData'

let btFilters: string[] = [];
const columns = [
  { field: 'date_time', headerName: 'none', hide: true },
  { field: 'r_id', headerName: 'none', hide: true },
  { field: 'date', headerName: 'Data', width: 100, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'hour', headerName: 'Hour', width: 60, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'type', headerName: 'Therapie', width: 140, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
];
interface Items {
  id?: string;
  id_measure?: string;
  date_complete?: string;
  date?: string;
  hour?: string;
  value?: string;
  misure?: string;
  type?: string;
}
const PatientTherapies = () => {
  let rows: Items[] = [];
  const [rowdata, setRowdata] = useState(rows);
  const [rowdataDef, setRowdataDef] = useState(rows);
  const [type, setType] = React.useState<string | null>(null);
  const [loadComponent, setLoadComponent] = useState(0);
  let rows_def: any[] = [];
  let navigate = useNavigate();


  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    let type_code = "T";
    DefaultAllData.getHospitalEventByPatientIdByTypeCode(id_patient, type_code).then((res) => {
      res.forEach(function (k: any) {
        if (!btFilters.includes(k.payload)) {
          btFilters.push(k.payload);
        }
        rows_def.push({
          id: k.id,
          id_measure: k.id,
          date_complete: k.date,
          date: getDateLab(k.date),
          hour: getTimeLab(k.date),
          value: k.value1,
          misure: k.payload,
          type: k.payload,
          r_id: k.id,
          date_time: k.date
        });
        // console.log(Object.keys(k));
      });

      setRowdata(rows_def);
    });
  }, []);
  useEffect(() => {
    if (type != null) {
      rows = rowdata.filter(function (el) {
        return el.misure == type
      });

      setRowdataDef(rows);
    } else {
      rows = rowdata;

      setRowdataDef(rows);
    }
    setLoadComponent(1);
  }, [rowdata, type]);

 
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
      <PatientSmartNav page={'PatientTherapies'} />

      {loadComponent ? <>
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
                navigate("/PatientTherapieDetails", {
                  state: params.row,
                })
              }
            }}


            initialState={{
            }}
            columnVisibilityModel={{
              r_id: false,
            }}
            sortModel={[{
              field: 'date_time',
              sort: 'desc',
            }]}
            rows={rowdataDef}
            columns={columns}
          />
        </div>
      </> : null}
    </Container>
  );
};
export default PatientTherapies;
