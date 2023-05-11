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


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { NavLink } from "react-router-dom";

class PatientNav extends Component {
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
            button = <Link style={{ color: '#fff' }} to="/PatientAgenda" onClick={() => { this.agendaClick() }}>
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
            button = <Link style={{ color: '#fff' }} to="/PatientHome" onClick={() => { this.listClick() }} >
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
        // console.log("state:" + this.state.main);
        return (
            <Box display="flex"  sx={{ mt: 1, verticalAlign: 'top',width: 1, position: 'absolute',alignItems: 'flex-start',zIndex: 'modal'  }}>
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
              
            </Box>
        );

    }
}
export default PatientNav;