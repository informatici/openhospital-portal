import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
class Iuser_name extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Box sx={{ height: 60, width: 1, mt: 1.5 }}>
                <TextField
                    fullWidth
                    label="User Name"
                    id="Iuser_name"
                    defaultValue="User Name"
                    name="Iuser_name"
                    helperText=""
                />
            </Box>
        );
    }
}
export default Iuser_name;