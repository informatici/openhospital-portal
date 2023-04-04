import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_arterial_pressure extends Component {
    render() {
        return (
            <TextField
                label="Min"
                id="i_arterial_pressure_min"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">mmHg</InputAdornment>,
                }}
            /> /
            <TextField
                label="Max"
                id="i_arterial_pressure_max"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">mmHg</InputAdornment>,
                }}
            />);
    }
}
export default i_arterial_pressure;