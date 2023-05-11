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
    constructor(props) {
        super(props)
        // Set initial state
        this.state = { io_vis: "input", getvalue: "", disAddIcon: true }
        this.ioDataOut = this.ioDataOut.bind(this);
        this.ioDataIn = this.ioDataIn.bind(this);
        this.ioDataDel = this.ioDataDel.bind(this);
        this.handleChangeMin = this.valueDetectMin.bind(this);
        this.handleChangeMax = this.valueDetectMax.bind(this);

    }
    ioDataOut() {
        this.setState({ io_vis: "input" });

    }
    ioDataIn() {
        this.setState({ io_vis: "output" });
    }
    ioDataDel() {
        this.setState({ getvalue: "" });
        this.setState({ io_vis: "input", disAddIcon: true });
    }
    valueDetectMin(e) {
        let { name, value } = e.target;
        this.setState({ getvalueMin: value });
        if (value == '') {
            this.setState({ disAddIcon: true });
        } else {
            this.setState({ disAddIcon: false });
        }
        this.setState({ io_vis: "output" });
    }
    render() {
        return (
            <Box sx={{ width: 1, mt: 1.5 }}>
                <TextField
                    id="min"
                    select
                    label="Min - Arterial Pressure"
                    defaultValue="mmHg"
                    sx={{ width: 1 }}
                >
                    {minAp.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="max"
                    select
                    label="Max - Arterial Pressure"
                    defaultValue="mmHg"
                    sx={{ width: 1, mt: 1. }}

                >
                    {maxAp.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <IconButton color="primary" aria-label="insert" size="large">
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </Box>
        );
    }
}
export default Iarterial_pressure;