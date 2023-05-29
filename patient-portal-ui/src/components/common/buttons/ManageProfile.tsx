import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function ManageProfile() {
  return (
    <Button disabled startIcon={<ManageAccountsIcon />} component={Link} to="/PatientHome"
      sx={{ mt: 1 }}
      variant="outlined"
      color="primary">
      Manage Profile
    </Button>
  );
};
