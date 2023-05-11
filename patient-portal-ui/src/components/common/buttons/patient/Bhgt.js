import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bhgt = ({ setAuth }) => {
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
    
    }}
    state= "hgt"
    fullWidth
    sx={{
      height: "6em",
    }}
    color="primary"
    aria-label="insert"
    size="large">
      Hgt
    </Button>
  );
};

export default Bhgt;
