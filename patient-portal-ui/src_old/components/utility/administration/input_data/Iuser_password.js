import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
class Iuser_name extends Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <Box sx={{ height: 60, width: 1, mt: 1.5 }}>
                <TextField
                    fullWidth
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </Box>
        );
    }
}
export default Iuser_name;