import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Osex() {
   return (
      <div >
         <Box>
            <Typography variant="body1" display="inline">Sex:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">F</Typography>
         </Box>
      </div>
   );
}
