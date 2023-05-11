import * as React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';

const BchooseInsert = ({ setAuth }) => {
  return (
    <IconButton
      variant="outlined"
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      component={Link} to={{
        pathname: '/PatientChooseMeasurements',
      }}
    >
      <AddIcon color="inherit" />
    </IconButton>
  );
};

export default BchooseInsert;