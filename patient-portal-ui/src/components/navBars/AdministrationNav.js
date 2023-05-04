import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChooseInsertPatientDataModal from "../modals/ChooseInsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";
import AdministrationUserProfile from "../common/userProfile/AdministrationUserProfile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class AdministrationNav extends Component {
    render() {
        return (
            <Box sx={{ mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <AdministrationUserProfile />

                    </Toolbar>
                </AppBar>
            </Box>
        );

    }
}
export default AdministrationNav;