import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Btemperature = ({ setAuth }) => {
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',

    }}
      state="temperature"
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Temperature
    </Button>
  );
};

export default Btemperature;
