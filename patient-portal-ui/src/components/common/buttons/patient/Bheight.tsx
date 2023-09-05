import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Bheight = () => {
  let misure = {
    id: null,
    type: "height",
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
      Height
    </Button> 
  );
};

export default Bheight;
