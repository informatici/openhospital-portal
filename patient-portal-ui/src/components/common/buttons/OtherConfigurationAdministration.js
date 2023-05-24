import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const OtherConfigurationAdministration = ({ setAuth }) => {
  return (
    <Button startIcon={<ManageAccountsIcon />} component={Link} to="/AdministrationOtherConfiguration"
      sx={{ width: 1, mt: 1 }}
      style={{ justifyContent: "center" }}
      variant="outlined"
      size="large"
      color="primary">
      Other Configuration
    </Button>
  );
};

export default OtherConfigurationAdministration;