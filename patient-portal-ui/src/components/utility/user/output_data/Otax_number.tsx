import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Otax_number() {
    return (
        <div>
            <Box>
                <Typography variant="body1" display="inline">Tax Number:</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">...</Typography>
            </Box>
        </div>
    );
}