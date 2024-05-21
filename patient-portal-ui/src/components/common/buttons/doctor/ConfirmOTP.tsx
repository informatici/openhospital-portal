import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const ConfirmOTP = () => {
  return (
    <Button startIcon={<ExitToAppIcon />} component={Link} to="/logout"
      sx={{ mt: 1, width: 1 }}
      variant="contained"
      color="primary">
      Confirm OTP
    </Button>
  );
};

export default ConfirmOTP;