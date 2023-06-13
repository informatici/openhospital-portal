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

import PropTypes from "prop-types";

interface AdministrationNavProps {
    page?: string;
}

interface AdministrationNavState {
    setThemeUser?: string;
    main?: boolean
}

class AdministrationNav extends Component<AdministrationNavProps, AdministrationNavState> {
    wrapperRef: any;
    constructor(props: any | Readonly<{}>) {
        super(props);
        this.state = { main: true };
        this.state = {
            setThemeUser: 'theme1'
        };
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    // --- Custom Manage click Over Acccordion (TODO) ---
    handleClickOutside(event: { target: any; }) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {          
            let el: any = document.getElementById('panel1a-header');
            let elAE = el.getAttribute('aria-expanded');
            if (elAE === "true") {
                el.click();
            }
        }
    }
    render() {
        return (
            <Accordion ref={this.wrapperRef} sx={{ verticalAlign: 'top', top: "0px", width: 1, position: 'absolute', zIndex: 'modal' }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box                       
                        borderRadius={2} sx={{
                            p: 1,
                            width: 1,
                            backgroundColor: 'primary.dark',
                        }}>
                        <Stack direction="row" spacing={2} sx={{
                            width: 1,
                        }}>
                            <div style={{ "width": "20%" }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/administrator.jpeg" />
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
                <AccordionDetails sx={{ justifyContent: 'center' }} >
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }} >
                            <ChangePalette />
                        </Box>
                        <List sx={{ width: 1, p: 1, alignItems: 'center' }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/administrator.jpeg" />
                                <Oname />

                            </Stack>
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
                </AccordionDetails>
            </Accordion >
        );
    }
}
export default AdministrationNav;

