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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
interface Imin_max {
    min: string;
    max: string;

}

interface Iarterial_pressureProps {
    dataSelected?: string;
    dataDef?: Imin_max[];

}

interface Iarterial_pressureState {
    io_vis_min?: string;
    io_vis_max?: string;
    getvalueMin?: string;
    getvalueMax?: string;
    getvalue?: string;
    disAddIcon?: boolean;

}
class Iarterial_pressure extends Component<Iarterial_pressureProps, Iarterial_pressureState> {
    constructor(props: any | Readonly<{}>) {
        super(props)
        // Set initial state
        if (props.dataSelected.min) {
            this.state = { io_vis_min: "output_min", io_vis_max: "output_max", getvalueMin: props.dataSelected.min, getvalueMax: props.dataSelected.max, disAddIcon: false }
        } else {
            this.state = { io_vis_min: "input_min", io_vis_max: "input_max", getvalueMin: "", getvalueMax: "", disAddIcon: true }
        }
        this.ioDataOutMin = this.ioDataOutMin.bind(this);
        this.ioDataOutMax = this.ioDataOutMax.bind(this);
        this.ioDataInMin = this.ioDataInMin.bind(this);
        this.ioDataInMax = this.ioDataInMax.bind(this);
        this.ioDataDelMin = this.ioDataDelMin.bind(this);
        this.ioDataDelMax = this.ioDataDelMax.bind(this);
        // this.handleChangeMin = this.valueDetectMin.bind(this);
        // this.handleChangeMax = this.valueDetectMax.bind(this);

    }
    ioDataOutMin() {
        this.setState({ io_vis_min: "input_min" });
    }
    ioDataOutMax() {
        this.setState({ io_vis_max: "input_max" });
    }
    ioDataInMin() {
        this.setState({ io_vis_min: "output_min" });
    }
    ioDataInMax() {
        this.setState({ io_vis_max: "output_max" });
    }
    ioDataDelMin() {
        this.setState({ getvalueMin: "" });
        this.setState({ io_vis_min: "input_min", disAddIcon: true });
    }
    ioDataDelMax() {
        this.setState({ getvalue: "" });
        this.setState({ io_vis_max: "input_max", disAddIcon: true });
    }
    valueDetectMin(e: { target: { name: any; value: any; }; }) {

        let { name, value } = e.target;
        this.setState({ getvalueMin: value });
        if (value == '') {
            this.setState({ disAddIcon: true });
        } else {
            this.setState({ disAddIcon: false });
        }
        this.setState({ io_vis_min: "output_min" });
    }
    valueDetectMax(e: { target: { name: any; value: any; }; }) {
        let { name, value } = e.target;
        this.setState({ getvalueMax: value });
        if (value == '') {
            this.setState({ disAddIcon: true });
        } else {
            this.setState({ disAddIcon: false });
        }
        this.setState({ io_vis_max: "output_max" });
    }

    render() {


        return (
            <Box sx={{ width: 1, mt: 1.5 }}>
                {this.state.io_vis_min == "input_min" ? (
                    <Box>
                        <TextField
                            label="Min - Arterial Pressure"
                            id="min"
                            value={this.state.getvalueMin}
                            select
                            name="Min - Arterial Pressure"
                            // onChange={this.handleChangeMin}
                            defaultValue=""
                            sx={{ width: 1 }}
                            helperText=""
                        >
                            {this.props.dataDef?.min.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                ) : (
                    <Box
                        component="span"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="body1" display="inline" sx={{ width: 0.4 }}>Min Pressure: </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', width: 0.3, }} display="inline">{this.state.getvalueMin} mmHg</Typography>
                        <Typography variant="body1" align="right" display="inline" sx={{}}>
                            <IconButton onClick={this.ioDataOutMin} sx={{}} color="primary" aria-label="insert" size="large">
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton onClick={this.ioDataDelMin} sx={{}} color="primary" aria-label="insert" size="large">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Typography>
                    </Box>
                )}

                {this.state.io_vis_max == "input_max" ? (
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            label="Max - Arterial Pressure"
                            id="max"
                            value={this.state.getvalue}
                            select
                            name="Max - Arterial Pressure"
                            // onChange={this.handleChangeMax}
                            defaultValue=""
                            sx={{ width: 1, mt: 1 }}
                            helperText=""
                        >
                            {this.props.dataDef?.max?.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                ) : (
                    <Box sx={{ mt: 1 }}
                        component="span"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="body1" display="inline" sx={{ width: 0.4 }}>Max Pressure: </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', width: 0.3, }} display="inline">{this.state.getvalueMax} mmHg</Typography>
                        <Typography variant="body1" align="right" display="inline" sx={{}}>
                            <IconButton onClick={this.ioDataOutMax} sx={{}} color="primary" aria-label="insert" size="large">
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton onClick={this.ioDataDelMax} sx={{}} color="primary" aria-label="insert" size="large">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Typography>
                    </Box>
                )}

            </Box>

        );





    }
}
export default Iarterial_pressure;