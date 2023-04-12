import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertPatientDataModal from "../modals/InsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";
import { NavLink } from "react-router-dom";
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";






class PatientNavtodel extends Component {

    render() {

        return (

            <Box sx={{ mt: 1, mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <VisualPatientDataModal />
                        <InsertPatientDataModal />
                        <IconButton
                            variant="outlined"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 1 }}
                            href="/PatientHome"
                        >
                            <FormatListNumberedRtlIcon color="inherit" />
                        </IconButton>
                        {/* </NavLink> */}

                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        );

    }
}
export default PatientNavtodel;