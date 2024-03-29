import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const BdiuresisVol24h = () => {
  let misure = {
    id: null,
    type: "diuresis_vol_24h",
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
      Diuresis vol 24h
    </Button>
  );
};

export default BdiuresisVol24h;
