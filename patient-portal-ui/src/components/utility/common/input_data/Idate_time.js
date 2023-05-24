
import React, { Component } from "react";
import Box from '@mui/material/Box';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs'

class Idate_time extends Component {
    constructor(props) {
        super(props)
        // Set initial state
        console.log(props);
        let now = Date.now();


        if (props.dateSelected) {
            this.state = { defDate: props.dateSelected }
        } else {
            this.state = { defDate: now }
        }

    }

    render() {
        return (
            <Box sx={{ width: 1, mt: 1.5 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer sx={{ mt: 1 }} components={['DatePicker']}>
                        <MobileDateTimePicker defaultValue={dayjs(this.state.defDate)} />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
        );
    }
}
export default Idate_time;