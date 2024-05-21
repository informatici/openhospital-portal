import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, MenuItem } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { InputAdornment } from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DefaultAllData } from "../../../../../datajs/DefaultAllData";
import { capitalizeOnlyFirstLetter, isIsoDate, toIsoDate } from '../../../../../utils/ManageDate';
import dayjs from 'dayjs'


interface IbowelProps {
  code?: string;
  defaultOptionValue?: string | null;
  defaultValue1?: number;
  defaultValue2?: number;
  id?: number;
  id_measure?: number;
  maxValue: number | string;
  measurementType: string;
  measurementValueType?: string;
  minValue: number | string;
  uom?: string;
  date?: string;
  hour?: string;
  date_complete: string;
}
interface $d {
  $d?: string;
}
export default function Ibowel(props: {
  dataDef: IbowelProps;
  edit?: boolean
  delete?: boolean
  option?: any
}) {
  // const [data, setData] = React.useState<string | number | Date>(Date.now());
  const navigate = useNavigate();
  const [dateTime, setDateTime] = React.useState<any>(Date.now());

  const [dataError, setDataError] = useState(false);
  const [dataErrorMessage, setDataErrorMessage] = useState("");
  const [dataDisabled, setDataDisabled] = useState(false);
  const [dataDelete, setDataDelete] = useState(false);
  const [deleteMeasure, setDeleteMeasure] = useState("");

  let rif = props.dataDef;
  let date_rif: Date | string | number = Date.now();
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState([{}]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  props.option[0] = { label: "", value: "" }
  const optionSel = props.option;
  useEffect(() => {
    // --- manage default
    rif.id_measure ? setDataDisabled(true) : setDataDisabled(false);
    if (rif.date_complete) {
      let dateR = new Date(rif.date_complete).toISOString()
      setDateTime(dateR);
    } else {
      setDateTime(new Date());
    }
  }, []);
  useEffect(() => {
    // --- manage edit
    if (props.edit == true) {
      setDataDisabled(false);
    }
  }, [props.edit]);
  // --- manage delete
  useEffect(() => {
    if (dataDelete == true) {
      setOpen(true);
    } else {
      setDataDelete(true);
    }
  }, [props.delete]);
  // --- manage delete choice
  useEffect(() => {
    if (deleteMeasure == "y") {
      setOpen(false);
      // let patientId = localStorage.getItem("IdPatient");
      let id_measure: any = rif.id_measure;

      DefaultAllData.deleteMeasurement(id_measure).then((res) => {

        navigate('/PatientMeasurements',
          {
            state: {
              res: res
            }
          });
      });
    }
    if (deleteMeasure == "n") {
      setDeleteMeasure("");
      setOpen(false);
    }
  }, [deleteMeasure]);

  const handleSubmit = (event: {
    [x: string]: any; preventDefault: () => void;
  }) => {
    event.preventDefault();
    let dateValue = date_rif;
    let inputValue = event.target.bowel.value;
    if (inputValue == null) {
      setDataError(true);
      setDataErrorMessage("Il valore non può essere vuoto")
    } else {
      setDataError(false);
      setDataErrorMessage("");
      if (dataDisabled == false) {
        // --- manage update/insert
        let ins_upd = rif.id_measure ? rif.id_measure : ""; // --- if exist update else new measure
        let patientId = localStorage.getItem("IdPatient");
        let value1 = event.target.bowel.value;
        let recordDate = toIsoDate(dateTime);
        let recordTypeCode = rif.code;
        let value2 = -1;
        if (ins_upd == '') {
          console.log("insert");
          DefaultAllData.postInsertMeasurement(patientId, value1, value2, recordDate, recordTypeCode).then((res) => {
            console.log(res);
            navigate('/PatientMeasurements',
              {
                state: {
                  res: res
                }
              });
          });
        } else {
          console.log("update");
          DefaultAllData.getMeasurementbyId(ins_upd).then((res_all) => {
            console.log(res_all);
            DefaultAllData.postUpdateMeasurement(patientId, value1, recordDate, recordTypeCode, res_all).then((res) => {
              console.log("in bowel");
              console.log(res);
              navigate('/PatientMeasurements',
                {
                  state: {
                    res: res
                  }
                });
            });
          });
        }
        // --- TODO insert/update and changePage
      }
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Do you want to remove this measure?
            </Typography>

            <Button key="1" color="primary" onClick={() => setDeleteMeasure("y")} >Yes</Button>
            <Button key="2" color="primary" onClick={() => setDeleteMeasure("n")}>No</Button>
          </div>
        </Box>
      </Modal>
      <form onSubmit={handleSubmit} id='my-form'>
        <Box display="flex"
          justifyContent="center"
          alignItems="center"> <Box component="img" src="/static/measure_patient/Diuresi.png" alt="logo" /></Box>

        <Box sx={{ width: 1, mt: 1.5 }}>
          <TextField
            select
            required
            disabled={dataDisabled}
            name="bowel"
            label={capitalizeOnlyFirstLetter(rif.measurementType)}
            id="outlined-start-adornment"
            sx={{ width: 1 }}
            defaultValue={rif.defaultValue1 ? rif.defaultValue1 : ""}
          >
            {optionSel.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box sx={{ width: 1, mt: 1.5 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <MobileDateTimePicker
                disabled={dataDisabled}
                onChange={(newValue) => {
                  setDateTime(newValue?.toISOString());
                }} sx={{ width: 1 }} defaultValue={dayjs(rif.date_complete)} />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </form>
    </>
  );
};
