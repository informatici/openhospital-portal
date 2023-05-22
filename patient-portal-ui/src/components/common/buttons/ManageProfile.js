import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const ManageProfile = ({ setAuth }) => {
  return (
    <Button disabled startIcon={<ManageAccountsIcon />} component={Link} to="/PatientHome"
      sx={{  mt: 1 }}
      variant="contained"
      style={{ justifyContent: "flex-start" }}
      color="primary">
      Manage Profile
    </Button>
  );
};

export default ManageProfile;