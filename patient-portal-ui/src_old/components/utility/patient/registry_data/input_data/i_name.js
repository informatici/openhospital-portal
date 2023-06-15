import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

class i_name extends Component {
    render() {
        return (
            <TextField
                label="Name"
                id="i_name"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">m</InputAdornment>,
                }}
            />);
    }
}
export default i_name;