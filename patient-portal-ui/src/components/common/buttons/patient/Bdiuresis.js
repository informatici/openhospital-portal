import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bdiuresis = ({ setAuth }) => {
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',

    }}
      state="diuresis"
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Diuresis
    </Button>
  );
};

export default Bdiuresis;
