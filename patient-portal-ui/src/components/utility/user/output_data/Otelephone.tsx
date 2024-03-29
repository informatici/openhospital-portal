import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Otelephone(telephone: any) {
    return (
        <div>
            <Box>
                <Typography variant="body1" display="inline">Cell:</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">{telephone.data}</Typography>
            </Box>
        </div>
    );
}