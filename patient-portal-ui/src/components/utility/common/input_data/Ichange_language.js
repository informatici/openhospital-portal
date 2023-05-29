import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
class Ichange_language extends Component {
    constructor(props) {
        super(props)
        // Set initial state


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