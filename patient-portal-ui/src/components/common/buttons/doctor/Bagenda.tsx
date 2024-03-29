import * as React from 'react';
import { Link } from "react-router-dom";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Fab from '@mui/material/Fab';

const Bagenda = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      component={Link} to={{
        pathname: '/DoctorAgenda',
      }}
    >
      <CalendarMonthIcon color="inherit" />
    </Fab>
  );
};

export default Bagenda;