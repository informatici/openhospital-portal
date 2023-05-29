import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GoBack from "../common/buttons/GoBack";
import GoHomePatient from "../common/buttons/GoHomePatient";
import Bagenda from "../common/buttons/patient/Bagenda";
import Bhome from "../common/buttons/patient/Bhome";

import BchooseInsert from "../common/buttons/patient/BchooseInsert";
import Grid from '@mui/material/Grid';

interface PatientSmartNavProps {
    page?: string;
}

interface PatientSmartNavState {
    main?: boolean;
}


class PatientSmartNav extends Component<PatientSmartNavProps, PatientSmartNavState> {
    constructor(props: any | Readonly<{}>) {
        super(props);
        // Set initial state
        console.log("inizial");
        console.log(props);
        this.state = { main: true };
    }

    render() {
        // const main = this.state.main;
        let button;
        console.log("state:" + this.state.main);

        // console.log("state:" + this.state.main);
        return (
            <Box sx={{ width: 1 }}>
                {/* <AppBar position="static" > */}
                <Toolbar >
                    <Grid
                        container
                    >
                        <Grid item xs={2}>
                            {this.props.page != 'PatientHome' ? <GoBack /> : null}
                        </Grid>
                        <Grid item xs={2}>
                            {this.props.page != 'PatientHome' ? <GoHomePatient /> : null}
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={2}>
                            {this.props.page == 'PatientHome' || this.props.page == 'PatientMeasurements' ? <BchooseInsert /> : null}
                        </Grid>
                        <Grid item xs={2}>
                            {this.props.page == 'PatientHome' ? <Bagenda /> : null}
                            {this.props.page == 'PatientAgenda' ? <Bhome /> : null}
                        </Grid>

                    </Grid>
                </Toolbar>
                {/* </AppBar> */}
            </Box>
        );

    }
}
export default PatientSmartNav;