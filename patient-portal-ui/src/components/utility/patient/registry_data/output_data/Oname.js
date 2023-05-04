import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


class Oname extends Component {
   render() {
      return (
         <div sx={{ width: 1 }}>
            <Box>
               <Typography variant="body1" display="inline">Name:</Typography>
               <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">AAAA</Typography>
            </Box>
            <Box>
               <Typography variant="body1" display="inline">Surname:</Typography>
               <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">BBBB</Typography>
            </Box>
         </div>);
   }
}
export default Oname;