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
import Oage from "../utility/user/output_data/Oage";
import Osex from "../utility/user/output_data/Osex";
import Oadress from "../utility/user/output_data/Oadress";
import Ocity from "../utility/user/output_data/Ocity";
import Otelephone from "../utility/user/output_data/Otelephone";
import Otax_number from "../utility/user/output_data/Otax_number";

import Logout from "../common/buttons/Logout";
import ChangePalette from "../common/buttons/ChangePalette";

interface PatientNavProps {
    page?: string;
}

interface PatientNavState {
    setThemeUser?: string;
    main?: boolean
}

class PatientNav extends Component<PatientNavProps, PatientNavState> {
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
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" />
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
                        role="presentation"
                    >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }} >
                            <ChangePalette />
                        </Box>
                        <List sx={{ p: 1 }}>
                            <Oname />
                            <Divider />
                            <Oage />
                            <Osex />
                            <Divider />
                            <Oadress />
                            <Ocity />
                            <Otelephone />
                            <Divider />
                            <Otax_number />
                            <Box sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: "center"
                            }} >

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
export default PatientNav;