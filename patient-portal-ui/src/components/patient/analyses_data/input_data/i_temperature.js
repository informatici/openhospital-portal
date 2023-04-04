import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_temperature extends Component {
    render() {
        return (
            <TextField
                label="Temperature"
                id="i_temperature"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">C°</InputAdornment>,
                }}
            />);
    }
}
export default i_temperature;