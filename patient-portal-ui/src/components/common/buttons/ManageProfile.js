import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const ManageProfile = ({ setAuth }) => {
  return (
    <Button startIcon={<ManageAccountsIcon />} component={Link} to="/PatientHome" sx={{ width: 1, mt: 1, mb: 2 }} variant="contained" color="primary">
      Menage Profile
    </Button>
  );
};

export default ManageProfile;