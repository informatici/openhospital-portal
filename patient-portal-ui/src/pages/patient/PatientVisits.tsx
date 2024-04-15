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
  { field: 'date_time', headerName: 'none', hide: true },
  { field: 'r_id', headerName: 'none', hide: true },
  { field: 'date', headerName: 'Data', width: 92, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'hour', headerName: 'Hour', width: 56, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'r_opd_dis_id_a_desc', headerName: 'Patology', width: 160, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
];


interface Items {
  id?: string;
  r_id?: string;
  id_user?: string;
  name_user?: string;
  date?: string;
  hour?: string;
  r_opd_dis_id_a_type_desc?: string;
  r_opd_dis_id_a_desc?: string;
  r_opd_note?: string;
}

const PatientVisit = () => {
  let rows: Items[] = [];
  const [rowdata, setRowdata] = useState(rows);
  const [rowdataDef, setRowdataDef] = useState(rows);
  const [type, setType] = React.useState<string | null>(null);
  const [loadComponent, setLoadComponent] = useState(0);
  let rows_def: any[] = [];
  let navigate = useNavigate();


  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    let type_code = "O";
    DefaultAllData.getHospitalEventByPatientIdByTypeCode(id_patient, type_code).then((res) => {
      res.forEach(function (k_a: any) {
        let k = JSON.parse(k_a.payload);
        if (!btFilters.includes(k.OPD_DIS_ID_A_DESC)) {
          btFilters.push(k.OPD_DIS_ID_A_DESC);
        }

        rows_def.push({
          id: k.OPD_ID,
          r_id: k.OPD_ID,
          id_user: k_a.patient.userId,
          name_user: k_a.patient.firstName + " " + k_a.patient.secondName,
          date: getDateLab(k.OPD_DATE),
          hour: getTimeLab(k.OPD_DATE),
          r_opd_dis_id_a_type_desc: k.OPD_DIS_ID_A_TYPE_DESC,
          r_opd_dis_id_a_desc: k.OPD_DIS_ID_A_DESC,
          r_opd_note: k.OPD_NOTE,
          date_time: k.OPD_DATE
          // console.log(Object.keys(k));
          //   [
          //     "OPD_ID",
          //     "OPD_WRD_ID_A",
          //     "OPD_DATE",
          //     "OPD_NEW_PAT",
          //     "OPD_PROG_YEAR",
          //     "OPD_SEX",
          //     "OPD_AGE",
          //     "OPD_DIS_ID_A",
          //     "OPD_DIS_ID_A_2",
          //     "OPD_DIS_ID_A_3",
          //     "OPD_REFERRAL_FROM",
          //     "OPD_REFERRAL_TO",
          //     "OPD_NOTE",
          //     "OPD_PAT_ID",
          //     "OPD_USR_ID_A",
          //     "OPD_NEXT_VISIT_ID",
          //     "OPD_LOCK",
          //     "OPD_CREATED_BY",
          //     "OPD_CREATED_DATE",
          //     "OPD_LAST_MODIFIED_BY",
          //     "OPD_LAST_MODIFIED_DATE",
          //     "OPD_ACTIVE",
          //     "OPD_PRESCRIPTION",
          //     "OPD_DIS_ID_A_TYPE_DESC",
          //     "OPD_DIS_ID_A_DESC",
          //     "OPD_DIS_ID_A_2_TYPE_DESC",
          //     "OPD_DIS_ID_A_2_DESC",
          //     "OPD_DIS_ID_A_3_TYPE_DESC",
          //     "OPD_DIS_ID_A_3_DESC"
          // ]
        });
      });


      setRowdata(rows_def);
    });

  }, []);
  useEffect(() => {
    if (type != null) {
      rows = rowdata.filter(function (el) {
        return el.r_opd_dis_id_a_desc == type
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

export default PatientVisit;
