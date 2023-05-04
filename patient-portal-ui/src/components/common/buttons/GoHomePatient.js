import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';

const GoHomePatient = ({ setAuth }) => {
  return (
    <Button 
    startIcon={<HomeIcon />} 
    to="/PatientHome" 
    component={Link}    
    sx={{ width: 1, mt: 1, mb: 2 }} 
    variant="contained" 
    style={{ justifyContent: "flex-start" }}
    color="primary">
      Go Home
    </Button>
  );
};

export default GoHomePatient;