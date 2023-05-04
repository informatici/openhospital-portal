import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const OtherConfigurationAdministration = ({ setAuth }) => {
  return (
    <Button startIcon={<ManageAccountsIcon />} component={Link} to="/AdministrationOtherConfiguration"
      sx={{ width: 1, mt: 1, mb: 2 }}
      variant="contained"
      style={{ justifyContent: "flex-start" }}
      color="primary">
      Other Configuration
    </Button>
  );
};

export default OtherConfigurationAdministration;