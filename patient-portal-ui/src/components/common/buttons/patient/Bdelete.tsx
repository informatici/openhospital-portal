import * as React from 'react';
import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const Bdelete = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      component={Link} to={{
        pathname: '/PatientChooseMeasurements',
      }}
    >
      <DeleteIcon color="inherit" />
    </Fab>
  );
};

export default Bdelete;