import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChooseInsertPatientDataModal from "../modals/ChooseInsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class DoctorLeftSide extends Component {
    render() {
        return (
            <Box sx={{ mt: 1, mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <VisualPatientDataModal />
                        <ChooseInsertPatientDataModal />
                        <IconButton
                            variant="outlined"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 1 }}
                            href="/PatientAgenda"
                        >
                            <CalendarMonthIcon color="inherit" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        );

    }
}
export default DoctorLeftSide;