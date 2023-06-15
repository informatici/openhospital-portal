import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Oname(data) {
   console.log("dataaa");
   console.log(data);
   return (
      <div>
         <Box>
            <Typography variant="body1" display="inline">Name:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">{data.data.firstName}</Typography>
         </Box>
         <Box>
            <Typography variant="body1" display="inline">Surname:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">{data.data.secondName}</Typography>
         </Box>
      </div >
   );
}