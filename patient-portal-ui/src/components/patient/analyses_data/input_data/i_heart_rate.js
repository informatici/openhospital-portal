import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_heart_rate extends Component {
    render() {
        return (
            <TextField
                label="Heart Rate"
                id="bpm"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">bpm</InputAdornment>,
                }}
            />);
    }
}
export default i_heart_rate;