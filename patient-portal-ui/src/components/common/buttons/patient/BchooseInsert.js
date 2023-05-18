import * as React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const BchooseInsert = ({ setAuth }) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      component={Link} to={{
        pathname: '/PatientChooseMeasurements',
      }}
    >
      <AddIcon color="inherit" />
    </Fab>
    // <IconButton
    //   variant="outlined"
    //   size="large"
    //   edge="start"
    //   color="inherit"
    //   aria-label="menu"
    //   component={Link} to={{
    //     pathname: '/PatientChooseMeasurements',
    //   }}
    // >
    //   <AddIcon color="inherit" />
    // </IconButton>
  );
};

export default BchooseInsert;