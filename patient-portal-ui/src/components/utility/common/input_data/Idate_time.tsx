
import React from "react";
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs'

interface IdefDate {
    dateSelected?: string;
}
class Idate_time extends React.Component<IdefDate, { defDate: string | number | Date }> {
    constructor(props: any) {
        super(props)
        let now = Date.now();
        if (props.dateSelected) {
            // --- TODO 
            let arr_1 = props.dateSelected.split(" ");
            let arr_2 = arr_1[0].split("/");
            let date = arr_2[2] + "-" + arr_2[1] + "-" + arr_2[0] + "T" + arr_1[1];
            this.state = { defDate: date }
        } else {
            this.state = { defDate: now }
        }
    }

    render() {
        return (
            <Box sx={{ width: 1, mt: 1.5 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <MobileDateTimePicker sx={{ width: 1 }} defaultValue={dayjs(this.state.defDate)} />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
        );
    }
}
export default Idate_time;