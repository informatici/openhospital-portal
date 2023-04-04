import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_saturation extends Component {
    render() {
        return (
            <TextField
                label="Saturation"
                id="i_saturation"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
            />);
    }
}
export default i_saturation;