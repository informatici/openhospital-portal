import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Oadress(address: any) {
    return (
        <div>
            <Box>
                <Typography variant="body1" display="inline">Adress:</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">{address.data}</Typography>
            </Box>
        </div>
    );
}
