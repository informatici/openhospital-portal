import * as React from 'react';
import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const BchooseInsert = () => {
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
  );
};

export default BchooseInsert;