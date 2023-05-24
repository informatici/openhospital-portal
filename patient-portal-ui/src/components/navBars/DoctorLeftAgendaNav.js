

import React, { Component } from "react";
import Box from '@mui/material/Box';
import { Button, Typography, Container } from "@mui/material";
import { BrowserRouter, Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import IT from 'country-flag-icons/react/3x2/IT'

import Oname from "../utility/patient/registry_data/output_data/Oname";
import Oadress from "../utility/patient/registry_data/output_data/Oadress";
import Otelephone from "../utility/patient/registry_data/output_data/Otelephone";
import Logout from "../common/buttons/Logout";
import ChangePassword from "../common/buttons/ChangePassword";
import ManageProfile from "../common/buttons/ManageProfile";
import ChangePalette from "../common/buttons/ChangePalette";

class DoctorLeftAgendaNav extends Component {
    constructor(props) {
        super(props);
        this.state = { main: true };
        this.state = {
            setThemeUser: 'theme1'
        };
        console.log(this.state);
        this.wrapperRef = React.createRef();
    }
    render() {
        return (

            <Box
                //  ref={this.wrapperRef} 
                borderRadius={2} sx={{
                    p: 1,
                    width: 1,
                    backgroundColor: 'primary.dark',
                }}>
                <Button component={Link} to="/PatientMeasurements" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Measurements
                </Button>
                <Button component={Link} to="/PatientVisits" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Visits
                </Button>
                <Button component={Link} to="/PatientAdsDeadlines" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Ads/Deadliness
                </Button>
                <Button component={Link} to="/PatientExams" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Exams
                </Button>
                <Button component={Link} to="/PatientHospitalizations" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Hospitalizations
                </Button>
                <Button component={Link} to="/PatientPayments" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Payments
                </Button>
                <Button component={Link} to="/PatientTherapies" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Therapies
                </Button>
                <Button component={Link} to="/PatientVaccinations" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
                    Vaccinations
                </Button>
            </Box>

        );
    }
}
export default DoctorLeftAgendaNav;