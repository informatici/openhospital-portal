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
import Flags from 'country-flag-icons/react/3x2'
import Oname from "../utility/user/output_data/Oname";
import Oage from "../utility/user/output_data/Oage";
import Osex from "../utility/user/output_data/Osex";
import Oadress from "../utility/user/output_data/Oadress";
import Ocity from "../utility/user/output_data/Ocity";
import Otelephone from "../utility/user/output_data/Otelephone";
import Otax_number from "../utility/user/output_data/Otax_number";
import Logout from "../common/buttons/Logout";
import ChangePalette from "../common/buttons/ChangePalette";

interface Items {
    firstName?: string;
    secondName?: string;
    birthDate?: string;
    sex?: string;
    address?: string;
    city?: string;
    telephone?: string;
}
interface IPatientProps {
    data_r?: Items;
}
class PatientNav extends Component<any, { main: boolean, setThemeUser: string, height_calculated_1: string }> {
    wrapperRef: any;
    constructor(props: Items) {
        super(props);
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
                                <Avatar sx={{ width: 50, height: 50 }} alt={this.props.firstName} src="/static/images/avatar/1.jpeg" />
                            </div>
                            <div style={{ "width": "65%", margin: "2%" }}>
                                <Typography color="#fff" variant="h6">
                                    {this.props.firstName} {this.props.secondName}
                                </Typography>
                                <Typography color="#fff" variant="button" >
                                    ID:   {this.props.userId}
                                </Typography>
                            </div>
                            <div style={{ "width": "5%", margin: "0px 2px 0px 0px", }} >
                                <Flags.GB title="United Kingdom" />
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
                            <Oname firstName={this.props.firstName} secondName={this.props.secondName} />
                            <Divider />
                            <Oage data={this.props.birthDate} />
                            <Osex data={this.props.sex} />
                            <Divider />
                            <Oadress data={this.props.address} />
                            <Ocity data={this.props.city} />
                            <Otelephone data={this.props.telephone} />
                            <Divider />
                            {/* <Otax_number /> */}
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
                    <Box>
                        <div onClick={this.closePanel} style={{ "backgroundColor": "rgba(52,52,52,0.0)", "padding": "0em", "height": this.state.height_calculated_1 }}></div>
                    </Box>
                </AccordionDetails>
            </Accordion >
        );
    }
}
export default PatientNav;