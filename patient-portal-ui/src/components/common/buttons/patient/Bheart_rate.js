import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bheart_rate = ({ setAuth }) => {
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
     
    }}
    state= "heart_rate"
    fullWidth
    sx={{
      height: "6em",
    }}
    color="primary"
    aria-label="insert"
    size="large">
      Heart rate
    </Button>
  );
};

export default Bheart_rate;
