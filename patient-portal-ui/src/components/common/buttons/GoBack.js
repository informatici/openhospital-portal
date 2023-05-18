import * as React from 'react';
import { useNavigate } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Fab from '@mui/material/Fab';

const GoBack = ({ setAuth }) => {
  const navigate = useNavigate();
  return (
    <Fab 
    color="primary"
    aria-label="add"
    size="small"
      onClick={() => navigate(-1)}
    >
      <ArrowBackIosNewOutlinedIcon color="inherit" />
    </Fab>
    //    <IconButton
    //    variant="outlined"
    //    size="large"
    //    edge="start"
    //    color="inherit"
    //    aria-label="menu"
    //    onClick={() => navigate(-1)}
    //  >
    //    <ArrowBackIosNewOutlinedIcon color="inherit" />
    //  </IconButton>

  );
};

export default GoBack;