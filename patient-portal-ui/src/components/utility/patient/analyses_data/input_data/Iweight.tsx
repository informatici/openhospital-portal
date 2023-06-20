import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { InputAdornment } from "@mui/material";
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
}) {
  const [data, setData] = React.useState<string | number | Date>(Date.now());
  const [dataDate, setDataDate] = React.useState<string | number | Date>(Date.now());
  const [newDateTime, setNewDateTime] = React.useState<number | string | Date | null | { $d: string } | any>("");
  const [dataError, setDataError] = useState(false);
  const [dataErrorMessage, setDataErrorMessage] = useState("");

  let rif = props.dataDef;
  let now = Date.now();
  let date_rif: Date | string | number = Date.now();

  useEffect(() => {
    if (rif.date_complete) {
      // --- TODO 
      let arr_1 = rif.date_complete.split(" ");
      let arr_2 = arr_1[0].split("-");
      let date: string | number | Date = arr_2[0] + "-" + arr_2[1] + "-" + arr_2[2] + "T" + arr_1[1];
      date = new Date(date);
      date_rif = date;
      setDataDate(date);
    } else {
      // console.log(now);
      setDataDate(now);
    }
  });
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
        console.log(newDateTime);
        dateValue = newDateTime?.$d.toISOString()
      }
      console.log(dateValue);
      console.log(inputValue);
      // --- TODO insert/update and changePage

    }
    // alert("Form Submitted");
  }

  return (
    <>
      <form onSubmit={handleSubmit} id='my-form'>
        <Box sx={{ width: 1, mt: 1.5 }}>
          <TextField
            type="number"
            onChange={e => setData(e.target.value)}
            required
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
