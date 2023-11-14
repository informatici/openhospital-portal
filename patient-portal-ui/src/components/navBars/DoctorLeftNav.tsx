

import React, { Component } from "react";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import IT from 'country-flag-icons/react/3x2/IT'

import Oname from "../utility/user/output_data/Oname";
import Oadress from "../utility/user/output_data/Oadress";
import Otelephone from "../utility/user/output_data/Otelephone";
import Logout from "../common/buttons/Logout";
import ChangePassword from "../common/buttons/ChangePassword";
import ManageProfile from "../common/buttons/ManageProfile";
import ChangePalette from "../common/buttons/ChangePalette";


interface DoctorLeftNavProps {
}

interface DoctorLeftNavState {
}

class DoctorLeftNav extends Component<DoctorLeftNavProps, DoctorLeftNavState> {
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
                <Stack direction="row" spacing={2} sx={{
                    width: 1,
                }}>
                    <div style={{ "width": "20%" }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/doctor.jpeg" />
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

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }} >
                    <ChangePalette />
                </Box>
                <List sx={{ width: 1, p: 1, alignItems: 'center' }}>
                    <Divider />
                    <Oadress />
                    <Otelephone />
                    <Divider />
                    <Box sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: "center"
                    }} >
                        <ChangePassword />
                        <ManageProfile />
                        <Divider sx={{ mt: 1, }} />
                        <Logout />
                    </Box>
                </List>
            </Box>

        );
    }
}
export default DoctorLeftNav;