import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Logout = ({ setAuth }) => {
  return (
    <Button startIcon={<ExitToAppIcon />} component={Link} to="/logout"
      sx={{ width: 1, mt: 1, mb: 2 }}
      variant="contained"
      style={{ justifyContent: "flex-start" }}
      color="primary">
      Log out
    </Button>
  );
};

export default Logout;