import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class Otelephone extends Component {
    render() {
        return (
            <div>
                <Box>
                    <Typography variant="body1" display="inline">Cell:</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">333.3333.333</Typography>
                </Box>
            </div>);
    }
}
export default Otelephone;