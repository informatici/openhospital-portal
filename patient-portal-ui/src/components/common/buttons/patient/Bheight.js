import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bheight = ({ setAuth }) => {
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',

    }}
      state="height"
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Height Test
    </Button> 
  );
};

export default Bheight;
