import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const BheartRate = () => {
  let misure = {
    id: null,
    type: "heart_rate",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
     
    }}
    state={misure}
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

export default BheartRate;
