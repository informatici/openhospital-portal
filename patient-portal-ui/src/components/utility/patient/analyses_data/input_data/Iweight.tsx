import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { InputAdornment } from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import dayjs from 'dayjs'

import Idate_time from "../../../../../components/utility/common/input_data/Idate_time";
import { capitalizeOnlyFirstLetter } from '../../../../../utils/ManageDate';

interface IweightProps {
  code?: string;
  defaultOptionValue?: string | null;
  defaultValue1?: number;
  defaultValue2?: number;
  id?: number;
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
export default function Iweight(props: {
  dataDef: IweightProps;
  edit?: boolean
  delete?: boolean
}) {
  const [data, setData] = React.useState<string | number | Date>(Date.now());
  const [dataDate, setDataDate] = React.useState<string | number | Date>(Date.now());
  const [newDateTime, setNewDateTime] = React.useState<number | string | Date | null | { $d: string } | any>("");
  const [dataError, setDataError] = useState(false);
  const [dataErrorMessage, setDataErrorMessage] = useState("");
  const [dataDisabled, setDataDisabled] = useState(false);
  const [dataDelete, setDataDelete] = useState(false);
  const [deleteMeasure, setDeleteMeasure] = useState("");

  let rif = props.dataDef;
  let now = Date.now();
  let date_rif: Date | string | number = Date.now();
  // console.log("edit");
  // console.log(props.edit);
  // console.log("delete");
  // console.log(props.delete);
  const [open, setOpen] = React.useState(false);
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
  useEffect(() => {
    if (rif.date_complete) {
      // --- TODO 
      let arr_1 = rif.date_complete.split(" ");
      let arr_2 = arr_1[0].split("-");
      let date: string | number | Date = arr_2[0] + "-" + arr_2[1] + "-" + arr_2[2] + "T" + arr_1[1];
      date = new Date(date);
      date_rif = date;
      setDataDisabled(true);
      setDataDate(date);
    } else {
      setDataDate(now);
      setDataDisabled(false);
    }
  }, []);
  useEffect(() => {
    if (props.edit == true) {
      setDataDisabled(false);
    }
  }, [props.edit]);
  useEffect(() => {
    if (dataDelete == true) {
      setOpen(true);
      // window.location.reload();
    } else {
      setDataDelete(true);
    }
  }, [props.delete]);
  useEffect(() => {
    if (deleteMeasure == "y") {
      setOpen(false)
    }
    if (deleteMeasure == "n") {
      setOpen(false)
      window.location.reload();
    } else {
      // console.log("nothing");
    }
  }, [deleteMeasure]);
  const handleSubmit = (event: {
    [x: string]: any; preventDefault: () => void;
  }) => {
    event.preventDefault();
    let dateValue = date_rif;
    let inputValue = event.target.weight.value;
    if (inputValue == null) {
      setDataError(true);
      setDataErrorMessage("Il valore non può essere vuoto")
    } else if (inputValue <= rif.minValue) {
      setDataError(true);
      setDataErrorMessage("Il valore deve essere maggiore di " + rif.minValue)
    }
    else if (inputValue >= rif.maxValue) {
      setDataError(true);
      setDataErrorMessage("Il valore deve essere minore di " + rif.maxValue)
    } else {
      setDataError(false);
      setDataErrorMessage("");

      if (newDateTime) {
        dateValue = newDateTime?.$d.toISOString()
      }
      // --- TODO insert/update and changePage

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
        <Box sx={{ width: 1, mt: 1.5 }}>
          <TextField
            type="number"
            onChange={e => setData(e.target.value)}
            required
            disabled={dataDisabled}
            name="weight"
            label={capitalizeOnlyFirstLetter(rif.measurementType)}
            id="outlined-start-adornment"
            sx={{ width: 1 }}
            InputProps={{
              startAdornment: <InputAdornment position="start">{rif.uom}:</InputAdornment>,
            }}
            error={dataError}
            helperText={dataErrorMessage}
            defaultValue={rif.defaultValue1} />
        </Box>
        <Box sx={{ width: 1, mt: 1.5 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <MobileDateTimePicker
                onChange={(newValue) => {
                  setNewDateTime(newValue);
                }} sx={{ width: 1 }} defaultValue={dayjs(dataDate)} />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        {/* {rif.date && rif.hour ?
          <Idate_time dateSelected={rif.date + " " + rif.hour} />
          :
          <Idate_time />
        } */}
      </form>
    </>
  );
};
