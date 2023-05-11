import * as React from 'react';
import { useNavigate } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const GoBack = ({ setAuth }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      variant="outlined"
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={() => navigate(-1)}
    >
      <ArrowBackIosNewOutlinedIcon color="inherit" />
    </IconButton>

  );
};

export default GoBack;