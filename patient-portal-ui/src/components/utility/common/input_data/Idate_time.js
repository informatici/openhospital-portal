
import React, { Component } from "react";
import Box from '@mui/material/Box';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs'

class Idate_time extends Component {
    constructor(props) {
        super(props)
        // Set initial state
    }

    render() {
        let now = Date.now();
        return (
            <Box sx={{  width: 1, mt: 1.5 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer sx={{ mt: 1 }} components={['DatePicker']}>
                        <DatePicker label="Date" defaultValue={dayjs(now)} />
                    </DemoContainer>
                    <DemoItem >
                        <TimePicker sx={{ mt: 1 }} label="Time" defaultValue={dayjs(now)} />
                    </DemoItem>
                </LocalizationProvider>
            </Box>
        );
    }
}
export default Idate_time;