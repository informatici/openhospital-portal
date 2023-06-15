import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Oage() {
   return (
      <div>
         <Box>
            <Typography variant="body1" display="inline">Age:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">22</Typography>
         </Box>
         <Box>
            <Typography variant="body1" display="inline">Birthday:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">17/04</Typography>
         </Box>
      </div>
   );
}