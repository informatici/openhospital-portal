import * as React from 'react';
import { Link } from "react-router-dom";

import ViewDayIcon from '@mui/icons-material/ViewDay';
import Fab from '@mui/material/Fab';

const Bhome = ({ setAuth }) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      component={Link} to={{
        pathname: '/PatientHome',
      }}
    >
      <ViewDayIcon color="inherit" />
    </Fab>
  );
};

export default Bhome;