import * as React from 'react';
import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const BnewAuth = () => {
  return (
    <Fab sx={{ mt: 1 }}
      color="primary"
      aria-label="add"
      size="small"
      component={Link} to={{
        pathname: '/DoctorjReqAuth',
      }}
    >
      <AddIcon color="inherit" />
    </Fab>
  );
};

export default BnewAuth;