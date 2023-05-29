import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const ManageMisureAdministration = () => {
  return (
    <Button startIcon={<LeaderboardIcon />} component={Link} to="/AdministrationManageMisure"
      sx={{ width: 1, mt: 1 }}
      style={{ justifyContent: "center" }}
      variant="outlined"
      size="large"
      color="primary">
      Manage Misure
    </Button>
  );
};

export default ManageMisureAdministration;