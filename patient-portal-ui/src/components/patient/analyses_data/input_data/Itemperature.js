import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
class Itemperature extends Component {
    constructor(props) {
        super(props)
        // Set initial state
        this.state = { io_vis: "input", getvalue: "", disAddIcon: true }
        this.ioDataOut = this.ioDataOut.bind(this);
        this.ioDataIn = this.ioDataIn.bind(this);
        this.ioDataDel = this.ioDataDel.bind(this);
        this.handleChange = this.valueDetect.bind(this);

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
    valueDetect(e) {
        let { name, value } = e.target;
        this.setState({ getvalue: value });
        if (value == '') {
            this.setState({ disAddIcon: true });
        } else {
            this.setState({ disAddIcon: false });
        }
    }
    render() {
        if (this.state.io_vis == "input") {
            return (
                <Box sx={{ height: 60, width: 1, mt: 1.5 }}>
                    <TextField
                        label="Temperature - °C"
                        id="Itemperature"
                        value={this.state.getvalue}
                        select
                        name="Temperature"
                        onChange={this.handleChange}
                        defaultValue=""
                        sx={{ width: 0.8 }}
                        helperText=""
                    >
                        {this.props.dataDef.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <IconButton disabled={this.state.disAddIcon} onClick={this.ioDataIn} sx={{}} color="primary" aria-label="insert" size="large">
                        <AddIcon fontSize="inherit" />
                    </IconButton>
                </Box>
            );
        }
        if (this.state.io_vis == "output") {
            return (
                <Box sx={{ height: 60, width: 1, mt: 1.5 }}
                    component="span"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1" display="inline" sx={{ width: 0.3 }}>Temperature: </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', width: 0.3, }} display="inline">{this.state.getvalue} °C</Typography>
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
export default Itemperature;