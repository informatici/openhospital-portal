import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChooseInsertPatientDataModal from "../modals/ChooseInsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { positions } from '@mui/system';
import UserProfile from "../common/userProfile/UserProfile";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientUserProfile from "../common/userProfile/PatientUserProfile";
import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import Oname from "../utility/patient/registry_data/output_data/Oname";
import Oage from "../utility/patient/registry_data/output_data/Oage";
import Osex from "../utility/patient/registry_data/output_data/Osex";
import Oadress from "../utility/patient/registry_data/output_data/Oadress";
import Otelephone from "../utility/patient/registry_data/output_data/Otelephone";
import Logout from "../common/buttons/Logout";
import ChangePalette from "../common/buttons/ChangePalette";
import IT from 'country-flag-icons/react/3x2/IT'

class PatientNav extends Component {
    constructor(props) {
        super(props);
        // Set initial state
        console.log("inizial");
        console.log(props);
        console.log(this.state);
        this.state = { main: true };
        this.state = {
            setThemeUser: 'themeaaasasa'
        };
        this.aaaaaaccgendaClick = this.aaaaaaccgendaClick.bind(this);

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
    aaaaaaccgendaClick = () => {
        // this.props.chooseThemeUser("eeeed")
    }
    render() {
        return (
            <Accordion sx={{ verticalAlign: 'top', top: "0px", width: 1, position: 'absolute', alignItems: 'flex-start', zIndex: 'modal' }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box borderRadius={2} sx={{
                        p: 1,
                        width: 1,
                        backgroundColor: 'primary.dark',
                    }}>
                        <Stack direction="row" spacing={2} sx={{
                            width: 1,
                        }}>
                            <div style={{ "width": "20%" }}>
                                <Avatar onClick={this.aaaaaaccgendaClick()} alt="Remy Sharp" src="/static/images/avatar/1.jpeg" />
                            </div>
                            <div style={{ "width": "60%" }}>
                                <Typography variant="h6">
                                    Mario Rossi
                                </Typography>
                                <Typography variant="button" >
                                    ID: xxxxxxx
                                </Typography>
                            </div>
                            <div style={{ "width": "10%", margin: "2%" }} >
                                <IT title="United States" />
                            </div>
                        </Stack>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        // sx={{ maxHeight: "90%", width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                        role="presentation"
                    >
                        <Box sx={{ alignItems: 'flex-end' }}>
                            <ChangePalette sx={{ ml: 15 }} />
                        </Box>
                        <List sx={{ p: 1 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" />
                                <Oname />
                            </Stack>
                            <Divider />
                            <Oage />
                            <Osex />
                            <Divider />
                            <Oadress />
                            <Otelephone />
                        </List>

                        <List alignItems="center" sx={{ m: 1 }}>
                            <Divider />
                            <Logout />
                        </List>
                    </Box>
                </AccordionDetails>
            </Accordion >
        );
    }
}
export default PatientNav;