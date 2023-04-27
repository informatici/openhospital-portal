import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ButtonBase } from '@mui/material';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
const minAp = [
    {
        value: '',
        label: '',
    },
    {
        value: '10',
        label: '10',
    },
    {
        value: '11',
        label: '11',
    },
    {
        value: '12',
        label: '12',
    },
    {
        value: '13',
        label: '13',
    },
];
const maxAp = [
    {
        value: '',
        label: '',
    },
    {
        value: '10',
        label: '10',
    },
    {
        value: '11',
        label: '11',
    },
    {
        value: '12',
        label: '12',
    },
    {
        value: '13',
        label: '13',
    },
    {
        value: '45',
        label: '45',
    },
];
class Iarterial_pressure extends Component {
    render() {
        return (
            <Box>
                <TextField
                    id="min"
                    select
                    label="Min - mmHg"
                    defaultValue="mmHg"
                    sx={{ width: 0.38 }}
                    helperText="Min - Arterial Pressure"
                >
                    {minAp.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <TextField
                    label="Min - Arterial Pressure"
                    id="Iarterial_pressure_min"
                    sx={{ width: 0.38 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">mmHg</InputAdornment>,
                    }}
                /> */}

                <Typography variant="body1" display="inline" sx={{ fontSize: 30, lineHeight: 1.8, fontWeight: 'bold', textAlign: 'bottom', padding: 0.3 }}>/</Typography>
                <TextField
                    id="max"
                    select
                    label="Max - mmHg"
                    defaultValue="mmHg"
                    sx={{ width: 0.38 }}
                    helperText="Max - Arterial Pressure"
                >
                    {maxAp.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <TextField
                    label="Max - Arterial Pressure"
                    id="Iarterial_pressure_max"
                    sx={{ width: 0.38 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">mmHg</InputAdornment>,
                    }}
                /> */}
                <IconButton color="primary" aria-label="insert" size="large">
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </Box>
        );
    }
}
export default Iarterial_pressure;