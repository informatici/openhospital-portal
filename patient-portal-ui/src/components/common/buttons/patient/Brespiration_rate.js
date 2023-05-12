import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Brespiration_rate = ({ setAuth }) => {
  let misure = {
    id: null,
    type: "respiration_rate",
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
      Respiration rate
    </Button>
  );
};

export default Brespiration_rate;
