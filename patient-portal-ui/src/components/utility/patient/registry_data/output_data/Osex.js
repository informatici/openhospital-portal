import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


class Osex extends Component {
   render() {
      return (
         <div sx={{ width: 1 }}>
            <Box>
               <Typography variant="body1" display="inline">Sex:</Typography>
               <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">F</Typography>
            </Box>
         </div>);
   }
}
export default Osex;