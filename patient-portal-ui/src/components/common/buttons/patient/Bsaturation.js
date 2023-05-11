import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bsaturation = ({ setAuth }) => {
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
     
    }}
    state= "saturation"
    fullWidth
    sx={{
      height: "6em",
    }}
    color="primary"
    aria-label="insert"
    size="large">
      Saturation
    </Button>
  );
};

export default Bsaturation;
