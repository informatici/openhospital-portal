import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_weight extends Component {
    render() {
        return (
            <TextField
                label="Weight"
                id="i_weight"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                }}
            />);
    }
}
export default i_weight;