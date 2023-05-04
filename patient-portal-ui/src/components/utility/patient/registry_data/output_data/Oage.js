import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


class Oage extends Component {
   render() {
      return (
         <div sx={{ width: 1 }}>
            <Box>
               <Typography variant="body1" display="inline">Age:</Typography>
               <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">22</Typography>
            </Box>
            <Box>
               <Typography variant="body1" display="inline">Birthday:</Typography>
               <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">17/04</Typography>
            </Box>
         </div>);
   }
}
export default Oage;