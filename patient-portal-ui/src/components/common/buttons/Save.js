import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import SaveIcon from '@mui/icons-material/Save';

const Save = ({ setAuth }) => {
  return (
    <Button startIcon={<SaveIcon />} sx={{ width: 1, mt: 1 }} style={{ justifyContent: "flex-start" }} variant="contained" size="large" color="primary">
      Save
    </Button>
  );
};

export default Save;