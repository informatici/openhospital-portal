import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GoBack from "../common/buttons/GoBack";
import GoHome from "../common/buttons/GoHome";
import Bagenda from "../common/buttons/patient/Bagenda";
import Bhome from "../common/buttons/patient/Bhome";

import BchooseInsert from "../common/buttons/patient/BchooseInsert";
import Grid from '@mui/material/Grid';
interface AdministrationSmartNavProps {
    page?: string;
}

interface AdministrationSmartNavState {
    main?: boolean;
}


class AdministrationSmartNav extends Component<AdministrationSmartNavProps, AdministrationSmartNavState> {
    constructor(props: any | Readonly<{}>) {

        super(props);
       
        this.state = { main: true };
    }

    render() {
        // const main = this.state.main;
        let button;
       
        return (
            <Box sx={{ width: 1 }}>
                {/* <AppBar position="static" > */}
                <Toolbar >
                    <Grid
                        container
                    >
                        <Grid item xs={2}>
                            {this.props.page != 'AdministrationHome' ? <GoBack /> : null}
                        </Grid>
                        <Grid item xs={2}>
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
export default AdministrationSmartNav;