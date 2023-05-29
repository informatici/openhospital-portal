import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
interface IweightProps {
    dataSelected?: string;
    dataDef?: any[];
}

interface IweightState {
    io_vis?: string;
    getvalue?: string;
    disAddIcon?: boolean;

}

class Iweight extends Component<IweightProps, IweightState> {
    constructor(props: any | Readonly<{}>) {
        super(props)
        // Set initial state
        if (props.dataSelected) {
            this.state = { io_vis: "output", getvalue: props.dataSelected, disAddIcon: false }
        } else {
            this.state = { io_vis: "input", getvalue: "", disAddIcon: true }
        }
        this.ioDataOut = this.ioDataOut.bind(this);
        this.ioDataIn = this.ioDataIn.bind(this);
        this.ioDataDel = this.ioDataDel.bind(this);
        this.handleChange = this.handleChange.bind(this);

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
    handleChange(e: { target: { name: any; value: any; }; }) {
        let { name, value } = e.target;
        this.setState({ getvalue: value });
        if (value == '') {
            this.setState({ disAddIcon: true });
        } else {
            this.setState({ disAddIcon: false });
        }
        this.setState({ io_vis: "output" });
    }
    render() {
        console.log(this.props);
        if (this.state.io_vis == "input") {
            return (
                <Box sx={{ width: 1, mt: 1.5 }}>
                    <TextField
                        label="Weight"
                        id="Iweight"
                        value={this.state.getvalue}
                        select
                        name="weight"
                        onChange={this.handleChange}
                        defaultValue=""
                        sx={{ width: 1 }}
                        helperText=""
                    >
                        {this.props.dataDef?.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            );
        }
        if (this.state.io_vis == "output") {
            return (
                <Box sx={{ width: 1, mt: 1.5 }}
                    component="span"
                    display="flex"
                    justifyContent="space-between"
                // alignItems="center"
                >
                    <Typography variant="body1" display="inline" sx={{ width: 0.3 }}>Weight: </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', width: 0.3, }} display="inline">{this.state.getvalue}</Typography>
                    <Typography variant="body1" align="right" display="inline" sx={{}}>
                        <IconButton onClick={this.ioDataOut} sx={{}} color="primary" aria-label="insert" size="large">
                            <EditIcon fontSize="inherit" />
                        </IconButton>
                    </Typography>
                    <Typography variant="body1" align="right" display="inline" sx={{}}>
                        <IconButton onClick={this.ioDataDel} sx={{}} color="primary" aria-label="insert" size="large">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </Typography>
                </Box>
            )
        }
    }
}
export default Iweight;