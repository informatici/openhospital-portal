import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
class Ichange_language extends Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <Box sx={{ height: 60, width: 1, mt: 1.5 }}>
                <TextField
                    fullWidth
                    label="Select Language"
                    id="Ichange_language"
                    select
                    name="Ichange_language"
                    defaultValue=""
                    helperText=""
                >
                </TextField>
            </Box>
        );
    }
}
export default Ichange_language;