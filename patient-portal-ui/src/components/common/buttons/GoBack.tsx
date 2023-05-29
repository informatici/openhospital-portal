import * as React from 'react';
import { useNavigate } from "react-router-dom";

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Fab from '@mui/material/Fab';

const GoBack = () => {
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
  );
};

export default GoBack;