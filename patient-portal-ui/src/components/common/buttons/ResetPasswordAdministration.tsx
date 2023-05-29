import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import PasswordIcon from '@mui/icons-material/Password';

const ResetPasswordAdministration = () => {
  return (
    <Button startIcon={<PasswordIcon />}
      component={Link} to="/AdministrationResetPassword"
      sx={{ width: 1, mt: 1 }}
      style={{ justifyContent: "center" }}
      variant="outlined"
      size="large"
      color="primary">
      Reset Password
    </Button>
  );
};

export default ResetPasswordAdministration;