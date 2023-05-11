import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";

const Bweight = ({ setAuth }) => {
  const [data, setData] = useState({ id: "1t4", title: " How to pass state in react-router-dom", tag: ["reactjs", "react-router-dom"] });
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',

    }}
      state="weight"
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Weight
    </Button>
  );
};


export default Bweight;