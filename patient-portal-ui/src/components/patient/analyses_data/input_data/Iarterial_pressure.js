import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

class Iarterial_pressure extends Component {
    render() {
        return (
            <Box sx={{ width: 1 , mt:1.5}}>
                <TextField
                    label="Arterial Pressure"
                    id="Iarterial_pressure"
                    sx={{ width: 0.8 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">C°</InputAdornment>,
                    }}
                />
                <IconButton
                    variant="outlined"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{  ml:0.1,  width: 0.1 }}
                >
                    <AddIcon color="#fff" />
                </IconButton>
            </Box>
        );
    }
}
export default Iarterial_pressure;