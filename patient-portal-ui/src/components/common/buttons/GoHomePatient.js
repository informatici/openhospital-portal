import * as React from 'react';
import { Link } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Fab from '@mui/material/Fab';

const GoHomePatient = ({ setAuth }) => {
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
    //     <IconButton
    //   variant="outlined"
    //   size="large"
    //   edge="start"
    //   color="inherit"
    //   aria-label="menu"
    //   to="/PatientHome"
    //   component={Link}
    // >
    //   <HomeOutlinedIcon color="inherit" />
    // </IconButton>
  );
};

export default GoHomePatient;