

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
import IT from 'country-flag-icons/react/3x2/IT';
import Oname from "../utility/user/output_data/Oname";
import Oadress from "../utility/user/output_data/Oadress";
import Otelephone from "../utility/user/output_data/Otelephone";
import Logout from "../common/buttons/Logout";
import ChangePassword from "../common/buttons/ChangePassword";
import ManageProfile from "../common/buttons/ManageProfile";
import ChangePalette from "../common/buttons/ChangePalette";
interface DoctorNavProps {
    page?: string;
}
interface DoctorNavState {
    setThemeUser?: string;
    main?: boolean;
    height_calculated_1: string;
}
class DoctorNav extends Component<DoctorNavProps, DoctorNavState, { main: boolean, setThemeUser: string, height_calculated_1: string }> {
    wrapperRef: any;
    constructor(props: any | Readonly<{}>) {
        super(props);
        console.log(props);
        console.log("-");
        this.state = {
            main: true,
            setThemeUser: 'theme1',
            height_calculated_1: "1px",
        };
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closePanel = this.closePanel.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        let height_calculated_1_val = window.innerHeight -
            document.getElementById('height_calc_1')!.offsetHeight -
            document.getElementById('height_calc_2')!.offsetHeight - 40;
        this.setState({ height_calculated_1: height_calculated_1_val + "px" });
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    closePanel(event: { target: any; }) {
        this.handleClickOutside(event.target);
    }
    handleClickOutside(event: { target: any; }) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            let el: any = document.getElementById('panel-1a-header');
            let elAE = el.getAttribute('aria-expanded');
            if (elAE === "true") {
                el.click();
            }
        }
    }
    render() {
        return (
            <Accordion
                ref={this.wrapperRef}
                style={{ "backgroundColor": "rgba(52,52,52,0.0)", "padding": "0em" }}
                sx={{ verticalAlign: 'top', top: "0px", width: 1, position: 'absolute', zIndex: 'modal' }}
            >
                <AccordionSummary
                    aria-controls="panel-1a-content"
                    id="panel-1a-header"
                >
                    <Box id="height_calc_1"
                        borderRadius={2} sx={{
                            width: 1,
                            backgroundColor: 'primary.dark',
                        }}
                    >
                        <Stack direction="row" spacing={2} sx={{
                            width: 1,
                        }}>
                            <div style={{ "width": "20%", margin: "2%" }}>
                                <Avatar alt="Mario Rossi" src="/static/images/avatar/doctor.jpeg" />
                            </div>
                            <div style={{ "width": "65%", margin: "2%" }}>
                                <Typography color="#fff" variant="h6">
                                    Mario Rossi
                                </Typography>
                                <Typography color="#fff" variant="button" >
                                    ID: xxxxxxx
                                </Typography>
                            </div>
                            <div style={{ "width": "5%", margin: "0px 2px 0px 0px", }} >
                                <IT title="United States" />
                            </div>
                        </Stack>
                    </Box>
                </AccordionSummary>
                <AccordionDetails style={{ "padding": "0em" }}>
                    <Box id="height_calc_2"
                        bgcolor="background.default"
                        style={{ "padding": "2em", "borderBottom": "1px solid gray" }}
                        role="presentation"
                        sx={{ width: 1, p: 2 }}
                    >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }} >
                            <ChangePalette />
                        </Box>
                        <List sx={{ p: 1 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/doctor.jpeg" />
                            <Oname />
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
                    <Box>
                        <div onClick={this.closePanel} style={{ "backgroundColor": "rgba(52,52,52,0.0)", "padding": "0em", "height": this.state.height_calculated_1 }}></div>
                    </Box>
                </AccordionDetails>
            </Accordion >
        );
    }
}
export default DoctorNav;