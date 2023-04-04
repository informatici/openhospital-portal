import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_respiration_rate extends Component {
    render() {
        return (
            <TextField
                label="Diuresis Vol 24H"
                id="i_respiration_rate"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">ml</InputAdornment>,
                }}
            />);
    }
}
export default i_respiration_rate;