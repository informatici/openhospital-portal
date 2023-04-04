import React, { Component } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/material";
import PropTypes from 'prop-types';
// import I_height from "../patient/biometric_data/input_data/i_height";
// import I_arterial_pressure from "../patient/biometric_data/input_data/i_arterial_pressure";
// import I_temperature from "../patient/biometric_data/input_data/i_temperature";
import Oname from "../patient/registry_data/output_data/o_name";
import Oadress from "../patient/registry_data/output_data/o_adress";
import Otelephone from "../patient/registry_data/output_data/o_telephone";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



class patientNav extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ mt: 1 }}
                            >
                                <Typography>I tuoi Dati</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{ mt: 3, ml: 3 }} >
                                <Oname />
                                <Oadress />
                                <Otelephone />
                                {/* <Typography>
                                    Nome
                                    Cognome
                                </Typography> */}
                            </AccordionDetails>
                        </Accordion>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 1 }}
                        >
                            <AddIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 1 }}
                        >
                            <CalendarMonthIcon />
                        </IconButton>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}
export default patientNav;