import * as React from 'react';
import { Link } from "react-router-dom";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Fab from '@mui/material/Fab';

const GoHomePatient = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      to="/PatientHome"
      component={Link}
    >
      <HomeOutlinedIcon color="inherit" />
    </Fab>
  );
};

export default GoHomePatient;