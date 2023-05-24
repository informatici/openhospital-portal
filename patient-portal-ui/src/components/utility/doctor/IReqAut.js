import React, { Component } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import ReqOtp from "../../common/buttons/doctor/ReqOtp";
import ConfirmOTP from "../../common/buttons/doctor/ConfirmOTP";
class IReqAut extends Component {
    constructor(props) {
        super(props)
        console.log("in button");
        console.log(props);
        if (props.idUser) {
            this.state = { idUser: props.idUser }
        } else {
            this.state = { idUser: null }
        }
    }
    render() {
        return (
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100vh",
                }}
            >
                <TextField
                    label="Id Paziente"
                    id="IReqAut"
                    value={this.state.idUser}
                    // select
                    name="id_paziente"
                    // onChange={this.handleChange}
                    defaultValue=""
                    sx={{ width: 1 }}
                    helperText=""
                >
                </TextField>
                <ReqOtp />
                <TextField
                    label="OTP"
                    id="IReqAut"
                    // value={this.state.getvalue}
                    // select
                    name="otp"
                    // onChange={this.handleChange}
                    defaultValue=""
                    sx={{ width: 1 }}
                    helperText=""
                >
                    {/* {this.props.dataDef.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))} */}
                </TextField>
                <ConfirmOTP />
            </Container>
        );
    }
}
export default IReqAut;