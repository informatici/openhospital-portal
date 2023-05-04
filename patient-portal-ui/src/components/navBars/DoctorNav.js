import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChooseInsertPatientDataModal from "../modals/ChooseInsertPatientDataModal";
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import UserProfile from "../common/userProfile/UserProfile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
class DoctorNav extends Component {
    constructor(props) {
        super(props);
        // Set initial state
        console.log("inizial");
        console.log(props);
        this.state = { main: true };
    }
    listClick() {
        console.log("listClick");
        this.setState({ main: true });
        console.log("state:" + this.state.main);
    }
    agendaClick() {
        console.log("agendaClick");
        this.setState({ main: false });
        console.log("state:" + this.state.main);
    }
    render() {
        // const main = this.state.main;
        let button;
        console.log("state:" + this.state.main);
        if (this.state.main) {
            button = <Link style={{ color: '#fff' }} to="/DoctorAgenda" onClick={() => { this.agendaClick() }}>
                <IconButton
                    variant="outlined"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 1 }}
                >
                    <CalendarMonthIcon color="inherit" />
                </IconButton>
            </Link >;
        }
        else {
            button = <Link style={{ color: '#fff' }} to="/DoctorHome" onClick={() => { this.listClick() }} >
                <IconButton
                    variant="outlined"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 1 }}
                >
                    <FormatListNumberedRtlIcon color="inherit" />
                </IconButton>
            </Link>

        }

        return (
            <Box sx={{ mt: 1, mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar  >
                        <UserProfile sx={{ width: 0.6 }} />
                        {button}
                    </Toolbar>
                </AppBar>
            </Box>

        );


    }
}
export default DoctorNav;