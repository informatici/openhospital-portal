import React, { Component } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ReqOtp from "../../common/buttons/doctor/ReqOtp";
import ConfirmOTP from "../../common/buttons/doctor/ConfirmOTP";
class IReqAut extends Component {
    constructor(props: {}) {
        super(props)

    }
    render() {
        return (
            <Grid sx={{ mt: 1, width: 1 }} container spacing={0}

                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12}  >
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
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6} >
                    <ReqOtp />
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={12} >
                    <TextField
                        label="OTP"
                        id="IReqAut"
                        name="otp"
                        defaultValue=""
                        sx={{ width: 1, mt: 1 }}
                        helperText=""
                    >
                    </TextField>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6} >
                    <ConfirmOTP />
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        );
    }
}
export default IReqAut;