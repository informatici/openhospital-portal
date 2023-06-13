import * as React from 'react';
import { Typography, Container, Box } from "@mui/material";
import AdministrationSmartNav from "../../components/navBars/AdministrationSmartNav";
const ManageUsersAdministration = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >

      <AdministrationSmartNav />
      <Typography variant="h5" >
        Administration Users Manage
      </Typography>

    </Container>
  );
};

export default ManageUsersAdministration;
