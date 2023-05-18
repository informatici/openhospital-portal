import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChooseInsertPatientDataModal from "../modals/ChooseInsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import GoBack from "../common/buttons/GoBack";
import GoHomePatient from "../common/buttons/GoHomePatient";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import BchooseInsert from "../common/buttons/patient/BchooseInsert";
import Grid from '@mui/material/Grid';

class PatientSmartNav extends Component {
    constructor(props) {
        super(props);
        // Set initial state
        console.log("inizial");
        console.log(props);
        this.state = { main: true };
    }

    render() {
        // const main = this.state.main;
        let button;
        console.log("state:" + this.state.main);

        // console.log("state:" + this.state.main);
        return (
            <Box sx={{ width: 1 }}>
                {/* <AppBar position="static" > */}
                <Toolbar >
                    <Grid  
                        container
                    >
                        <Grid item xs={2}>
                            {this.props.page != 'PatientHome' ? <GoBack /> : null}
                        </Grid>
                        <Grid item xs={2}>
                            {this.props.page != 'PatientHome' ? <GoHomePatient /> : null}
                        </Grid>
                        <Grid item xs={5}>

                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={2}>
                            {this.props.page == 'PatientHome' || this.props.page == 'PatientMeasurements' ? <BchooseInsert /> : null}
                        </Grid>
                    </Grid>
                </Toolbar>
                {/* </AppBar> */}
            </Box>
        );

    }
}
export default PatientSmartNav;