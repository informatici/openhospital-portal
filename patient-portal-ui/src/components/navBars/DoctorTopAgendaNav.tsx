

import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface DoctorTopAgendaNavProps {

}

interface DoctorTopAgendaNavState {

}


class DoctorTopAgendaNav extends Component<DoctorTopAgendaNavProps, DoctorTopAgendaNavState> {
    constructor(props: any | Readonly<{}>) {


        super(props);
      
    }
    render() {
        return (

            <Grid container spacing={2}>
                <Grid item md={11}>
                    <Typography sx={{ pl: 1, pt: 2, }} display="inline" variant="body2" component="div">
                        Patient ID:
                    </Typography>
                    <Typography display="inline" style={{ fontWeight: 600 }} variant="body1" component="div">
                        333333
                    </Typography>
                    <Typography display="inline" sx={{ ml: 2 }} variant="body2" component="div">
                        Name:
                    </Typography>
                    <Typography display="inline" style={{ fontWeight: 600 }} variant="body1" component="div">
                        Mario Rossi
                    </Typography>
                </Grid>

                <Grid item md={1}>
                    <Button component={Link} to="/PatientMeasurements" sx={{ mt: 1 }} variant="outlined" color="primary">
                        Profile
                    </Button>
                </Grid>
            </Grid >

        );
    }
}
export default DoctorTopAgendaNav;