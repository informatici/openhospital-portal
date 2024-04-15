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
  { field: 'type', headerName: 'Exam', width: 140, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
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
const PatientExams = () => {
  let rows: Items[] = [];
  const [rowdata, setRowdata] = useState(rows);
  const [rowdataDef, setRowdataDef] = useState(rows);
  const [type, setType] = React.useState<string | null>(null);
  const [loadComponent, setLoadComponent] = useState(0);
  let rows_def: any[] = [];
  let navigate = useNavigate();


  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    let type_code = "E";
    DefaultAllData.getHospitalEventByPatientIdByTypeCode(id_patient, type_code).then((res) => {
      res.forEach(function (k_a: any) {
        let k = JSON.parse(k_a.payload);
        if (!btFilters.includes(k.LAB_EXA_ID_A_DESC)) {
          btFilters.push(k.LAB_EXA_ID_A_DESC);
        }
        rows_def.push({
          id_user: k_a.patient.userId,
          name_user: k_a.patient.firstName + " " + k_a.patient.secondName,
          id: k.LAB_ID,
          id_measure: k.LAB_ID,
          date_complete: k.LAB_DATE,
          date: getDateLab(k.LAB_DATE),
          hour: getTimeLab(k.LAB_DATE),
          value: k.LAB_EXA_ID_A_DESC,
          misure: k.LAB_EXA_ID_A_DESC,
          type: k.LAB_EXA_ID_A_DESC,
          r_adm_wrd_id_a_desc: k.ADM_WRD_ID_A_DESC,
          r_adm_date_adm: k.ADM_DATE_ADM,
          r_adm_admt_id_a_adm_desc: k.ADM_ADMT_ID_A_ADM_DESC,
          r_adm_in_dis_id_a_desc: k.ADM_IN_DIS_ID_A_DESC,
          r_adm_out_dis_id_a_desc: k.ADM_OUT_DIS_ID_A_DESC,
          r_adm_date_dis_date: getDateLab(k.ADM_DATE_DIS),
          r_adm_date_dis_time: getTimeLab(k.ADM_DATE_DIS),
          r_adm_note: k.ADM_NOTE,
          r_id: k.LAB_ID,
          date_time: k.LAB_DATE
        });
      //   console.log(Object.keys(k));
      //   [
      //     "LAB_ID",
      //     "LAB_EXA_ID_A",
      //     "LAB_DATE",
      //     "LAB_RES",
      //     "LAB_NOTE",
      //     "LAB_PAT_ID",
      //     "LAB_PAT_NAME",
      //     "LAB_CROSS1",
      //     "LAB_CROSS2",
      //     "LAB_CROSS3",
      //     "LAB_CROSS4",
      //     "LAB_CROSS5",
      //     "LAB_CROSS6",
      //     "LAB_CROSS7",
      //     "LAB_CROSS8",
      //     "LAB_CROSS9",
      //     "LAB_CROSS10",
      //     "LAB_CROSS11",
      //     "LAB_CROSS12",
      //     "LAB_CROSS13",
      //     "LAB_LOCK",
      //     "LAB_AGE",
      //     "LAB_SEX",
      //     "LAB_MATERIAL",
      //     "LAB_PAT_INOUT",
      //     "LAB_CREATED_BY",
      //     "LAB_CREATED_DATE",
      //     "LAB_LAST_MODIFIED_BY",
      //     "LAB_LAST_MODIFIED_DATE",
      //     "LAB_ACTIVE",
      //     "LAB_STATUS",
      //     "LAB_EXA_ID_A_DESC"
      // ]
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
      <PatientSmartNav page={'PatientExams'} />
      {loadComponent ? <>
        <div style={{ width: '100%', height: '600px' }}>
          <Box
            sx={{
              overflowX: "scroll",
              width: 1,
              // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
            }}
          >
            <ButtonGroup disableElevation className="button_group_f" sx={{ mt: 1, mb: 1, overflowX: "scroll", }} variant="outlined" aria-label="outlined button group">
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
                navigate("/PatientExamDetails", {
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
export default PatientExams;
