import React, { Component } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import ReqOtp from "../../common/buttons/doctor/ReqOtp";
import ConfirmOTP from "../../common/buttons/doctor/ConfirmOTP";
class CardPatient extends Component {
    constructor(props: {}) {
        super(props)
      
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
                    // value={this.state.idUser}
                    name="id_paziente"
                    defaultValue=""
                    sx={{ width: 1 }}
                    helperText=""
                >
                </TextField>
                <ReqOtp />
                <TextField
                    label="OTP"
                    id="IReqAut"
                    name="otp"
                    defaultValue=""
                    sx={{ width: 1 }}
                    helperText=""
                >
                </TextField>
                <ConfirmOTP />
            </Container>
        );
    }
}
export default CardPatient;