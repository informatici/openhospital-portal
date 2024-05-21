

import React, { Component } from "react";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

interface DoctorLeftAgendaNavProps {

}

interface DoctorLeftAgendaNavState {

}


class DoctorLeftAgendaNav extends Component<DoctorLeftAgendaNavProps, DoctorLeftAgendaNavState> {
    constructor(props: any | Readonly<{}>) {
        super(props);
      
    }
    render() {
        return (
            <Box
                sx={{
                    p: 1,
                    width: 1,
                }}>
                <Button component={Link} to="/PatientMeasurements" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Measurements
                </Button>
                <Button component={Link} to="/PatientVisits" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Visits
                </Button>
                <Button component={Link} to="/PatientAdsDeadlines" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Ads/Deadliness
                </Button>
                <Button component={Link} to="/PatientExams" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Exams
                </Button>
                <Button component={Link} to="/PatientHospitalizations" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Hospitalizations
                </Button>
                <Button component={Link} to="/PatientPayments" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Payments
                </Button>
                <Button component={Link} to="/PatientTherapies" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Therapies
                </Button>
                <Button component={Link} to="/PatientVaccinations" sx={{ width: 1, mt: 1 }} variant="outlined" color="primary">
                    Vaccinations
                </Button>
            </Box>
        );
    }
}
export default DoctorLeftAgendaNav;