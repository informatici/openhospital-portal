import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from 'react-router-dom';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

import { getTimeLab, getDateLab } from '../../utils/ManageDate';
import { DefaultAllData } from '../../datajs/DefaultAllData'

let btFilters: string[] = [];
const columns = [
  { field: 'date_time', headerName: 'none', hide: true },
  { field: 'r_id', headerName: 'none', hide: true },
  { field: 'date', headerName: 'Data', width: 100, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'hour', headerName: 'Hour', width: 60, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true },
  { field: 'misure', headerName: 'Misure', width: 140, headerClassName: 'super-app-theme--header', sortable: false, disableColumnMenu: true }
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


const PatientMeasurements = () => {
  let rows: Items[] = [];

  const location = useLocation();
  const [loadSnackBar, setLoadSnackBar] = useState(false);
  const [messageSnackBar, setMessageSnackBar] = useState("Default message");
  const [rowdata, setRowdata] = useState(rows);
  const [rowdataDef, setRowdataDef] = useState(rows);
  const [type, setType] = React.useState<string | null>(null);
  const [loadComponent, setLoadComponent] = useState(0);
  let rows_def: any[] = [];
  let navigate = useNavigate();
  const handleCloseSnackbar = () => {
    setLoadSnackBar(false);
  };
  useEffect(() => {
    // console.log(location);
    if (location.state != null) {

      const data = location.state.res;
      let message = "";
      if (data.type == "Delete") {
        message += data.type + " of " + data.recordType.measurementType + " was successful.";
      } else {
        message += data.type + " value " + data.value1;
        if (data.value2 != -1) {
          message += " and value " + data.value2;
        }
        message += " of " + data.recordType.measurementType + " archived.";
      }
      setLoadSnackBar(true);
      setMessageSnackBar(message);

    }
  }, []);


  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    DefaultAllData.getPatientrecords_patient(id_patient).then((res) => {
      res.forEach(function (k: any) {
        if (!btFilters.includes(k.recordType.measurementType)) {
          btFilters.push(k.recordType.measurementType);
        }
        rows_def.push({
          id: k.id,
          id_measure: k.id,
          date_complete: k.recordDate,
          date: getDateLab(k.recordDate),
          hour: getTimeLab(k.recordDate),
          value: k.value1,
          misure: k.recordType.measurementType,
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
          r_id: k.id,
          date_time: k.recordDate
        });
        //   console.log(Object.keys(k));
        //   [
        //     "id",
        //     "recordDate",
        //     "patient",
        //     "recordType",
        //     "value1",
        //     "value2",
        //     "optionValue",
        //     "note",
        //     "created"
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
      <Snackbar

        anchorOrigin={{ "vertical": "bottom", "horizontal": "center" }}
        open={loadSnackBar}
        autoHideDuration={88000}
        TransitionComponent={Slide}
        onClose={handleCloseSnackbar}
        message={messageSnackBar}

      // action={action}
      />


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
                navigate("/PatientInsertMeasurements", {
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

export default PatientMeasurements;
