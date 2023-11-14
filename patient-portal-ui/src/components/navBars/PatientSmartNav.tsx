import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import GoBack from "../common/buttons/GoBack";
import Bagenda from "../common/buttons/patient/Bagenda";
import Bhome from "../common/buttons/patient/Bhome";
import Bbmode from "../common/buttons/patient/Bbmode";

import Bdelete from "../common/buttons/patient/Bdelete";
import Bedit from "../common/buttons/patient/Bedit";

import BchooseInsert from "../common/buttons/patient/BchooseInsert";
import Grid from '@mui/material/Grid';

export default function PatientSmartNav(props: {
    page?: string;
    type?: string;
    editBtClk?: any;
    deleteBtClk?: any;
}) {


    return (
        <Box color="primary" sx={{ width: 1, mt: 1, minHeight: '70px' }}>
            <Grid container sx={{ width: 1 }} >
                <Grid container justifyContent="flex-start" item xs={1.5}>
                    {props.page != 'PatientHome' && props.page != 'PatientAgenda' ? <GoBack /> : null}
                </Grid>
                <Grid container justifyContent="flex-start" item xs={1.5}>
                    {props.page == 'PatientInsertMeasurements' ? <Bhome /> : null}
                    {props.page == 'PatientChooseMeasurements' ? <Bhome /> : null}
                    {props.page == 'PatientExamDetails' ? <Bhome /> : null}
                    {props.page == 'PatientPaymentDetails' ? <Bhome /> : null}
                    {props.page == 'PatientTherapieDetails' ? <Bhome /> : null}
                    {props.page == 'PatientVaccinationDetails' ? <Bhome /> : null}
                    {props.page == 'PatientHospitalizationDetails' ? <Bhome /> : null}
                    {props.page == 'PatientVisitDetails' ? <Bhome /> : null}
                </Grid>
                <Grid container justifyContent="flex-start" item xs={6}>

                </Grid>
                <Grid container justifyContent="flex-end" item xs={1.5}>
                    {props.page == 'PatientHome' || props.page == 'PatientAgenda' ? <BchooseInsert /> : null}
                    {props.page == 'PatientInsertMeasurements' && props.type == 'edit/delete' ? <Bdelete deleteBtClk={props.deleteBtClk} /> : null}
                </Grid>
                <Grid container justifyContent="flex-end" item xs={1.5}>
                    {props.page == 'PatientInsertMeasurements' && props.type == 'edit/delete' ? <Bedit editBtClk={props.editBtClk} /> : null}
                    {/* {props.page == 'PatientInsertMeasurements' && props.type == 'edit/delete' ? <Bedit /> : null} */}
                    {props.page == 'PatientMeasurements' ? <BchooseInsert /> : null}
                    {props.page == 'PatientHome' ? <Bagenda /> : null}
                    {props.page == 'PatientAgenda' ? <Bbmode /> : null}
                </Grid>
            </Grid>
        </Box>
    );
}