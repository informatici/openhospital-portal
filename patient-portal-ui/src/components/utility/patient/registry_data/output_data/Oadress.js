import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class Oadress extends Component {
    render() {
        return (
            <div>
                <Box>
                    <Typography variant="body1" display="inline">Adress:</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">city, to...</Typography>
                </Box>
            </div>);
    }
}
export default Oadress;