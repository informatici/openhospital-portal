import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function Logout() {
  return (
    <Button startIcon={<ExitToAppIcon />} component={Link} to="/logout"
      sx={{ mt: 1 }}
      variant="outlined" color="primary">
      Log out
    </Button>
  );
};