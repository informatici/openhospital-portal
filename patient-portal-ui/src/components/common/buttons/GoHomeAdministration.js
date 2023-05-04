import * as React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const GoHomeAdministration = ({ setAuth }) => {
  return (
    <IconButton component={Link} to="/AdministrationHome"  style={{ justifyContent: "flex-start" }} color="primary" aria-label="insert" size="large">
      <ArrowCircleLeftIcon fontSize="inherit" />
    </IconButton>
  );
};

export default GoHomeAdministration;