import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Oage(age: any) {
   let ageR: string | number = "...";
   let ageB: string | number = "...";
   if (age.data != undefined) {
      ageR = getAge(age.data);
      ageB = age.data.slice(-5);
   }
   return (
      <div>
         <Box>
            <Typography variant="body1" display="inline">Age:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">{ageR}</Typography>
         </Box>
         <Box>
            <Typography variant="body1" display="inline">Birthday:</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1 }} display="inline">{ageB}</Typography>
         </Box>
      </div>
   );
}
function getAge(dateString: string) {
   var today = new Date();
   var birthDate = new Date(dateString);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
   }
   return age;
}