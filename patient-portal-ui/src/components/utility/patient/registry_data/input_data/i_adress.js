import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_adress extends Component {
    render() {
        return (
            <TextField
                label="Height"
                id="i_adress"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">m</InputAdornment>,
                }}
            />);
    }
}
export default i_adress;