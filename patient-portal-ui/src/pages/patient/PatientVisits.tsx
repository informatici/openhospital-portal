import React, { useState, useEffect } from 'react';
import { Button, Container, Box, Typography } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';

import { getTimeLab, getDateLab, compare } from '../../utils/ManageDate';
import { DefaultAllData } from '../../datajs/DefaultAllData';

let btFilters: string[] = [];
const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true, headerClassName: 'super-app-theme--header', },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true, headerClassName: 'super-app-theme--header', },
  { field: 'date', headerName: 'Data', width: 92, headerClassName: 'super-app-theme--header', },
  { field: 'hour', headerName: 'Hour', width: 56, headerClassName: 'super-app-theme--header', },
  { field: 'value', headerName: 'Value', width: 100, headerClassName: 'super-app-theme--header', },
  { field: 'misure', headerName: 'Patology', width: 160, headerClassName: 'super-app-theme--header', },
  { field: 'type', headerName: 'Type', width: 180, headerClassName: 'super-app-theme--header', },
  { field: 'r_id', headerName: 'r_id', width: 180, headerClassName: 'super-app-theme--header', },
];

const PatientVisit = () => {
  const [data, setData] = useState([]);
  const [type, setType] = React.useState<string | null>(null);
  const [loadComponent, setLoadComponent] = useState(0);
  let id_patient = localStorage.getItem("IdPatient");
  let type_code = "O";
  useEffect(() => {
    DefaultAllData.getHospitalEventByPatientIdByTypeCode(id_patient, type_code).then((res) => {
      console.log("response getHospitalEventByPatientIdByTypeCode");
      // let desc=JSON.parse(res[0].payload);
      // console.log(JSON.parse(res[0].payload));
      setData(res);
      setLoadComponent(1);
    });
  }, []);
  let data_values: any = data;
  let rows_def: any[] = [];
  let rows: any[] = [];
  Object.keys(data_values).forEach(function (key, i) {
    let payload_obj = JSON.parse(data_values[key].payload);
    if (!btFilters.includes(payload_obj.OPD_DIS_ID_A_DESC)) {
      btFilters.push(payload_obj.OPD_DIS_ID_A_DESC);
    }

    rows_def.push({
      id_user: data_values[key].patient.userId,
      name_user: data_values[key].patient.firstName + " " + data_values[key].patient.secondName,
      id: i,
      id_measure: data_values[key].value1,
      date_complete: data_values[key].value1,
      date: getDateLab(data_values[key].date),
      hour: getTimeLab(data_values[key].date),
      value: payload_obj.OPD_DIS_ID_A,
      misure: payload_obj.OPD_DIS_ID_A_DESC,
      type: payload_obj.OPD_DIS_ID_A,
      r_opt_date: payload_obj.OPD_DATE,
      r_opd_dis_id_a_type_desc: payload_obj.OPD_DIS_ID_A_TYPE_DESC,
      r_opd_dis_id_a_desc: payload_obj.OPD_DIS_ID_A_DESC,
      r_opd_note: payload_obj.OPD_NOTE,
      r_id: payload_obj.OPD_ID
    })
    console.log(rows_def);
  });
  if (type != null) {
    rows = rows_def.filter(function (el) {
      return el.type == type
    });
  } else {
    rows = rows_def;
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
      <PatientSmartNav page={'PatientVisit'} />
      {loadComponent ? <>
        <div style={{ width: '100%', height: '600px' }}>
          <Box
            sx={{
              overflowX: "scroll",
              width: 0.9,
              // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
            }}
          >

            <ButtonGroup disableElevation className="button_group_f" sx={{ mt: 1, mb: 1, overflowX: "scroll", }} variant="outlined" aria-label="outlined button group">
              <Button variant="contained" key="all" color="primary" onClick={() => setType(null)}>All</Button>

              {btFilters.map((bt_el) => (
                <Button key={bt_el} color="primary" title={bt_el} onClick={() => setType(bt_el)}> <Typography noWrap>{bt_el}</Typography> </Button>
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
                navigate("/PatientVisitDetails", {
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
                  r_id: false,
                },
              },
            }}
            
            sortModel={[{
              field: 'r_id',
              sort: 'desc',
            }]}
            rows={rows}
            columns={columns}
          />
        </div>
      </> : null}
    </Container>
  );

};

export default PatientVisit;
