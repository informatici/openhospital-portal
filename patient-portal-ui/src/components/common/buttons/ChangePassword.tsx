import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import KeyIcon from '@mui/icons-material/Key';

export default function ChangePassword() {
  return (
    <Button disabled startIcon={<KeyIcon />} component={Link} to="/PatientHome"
      sx={{ mt: 1 }}
      variant="outlined" color="primary">
      Change Password
    </Button>
  );
};