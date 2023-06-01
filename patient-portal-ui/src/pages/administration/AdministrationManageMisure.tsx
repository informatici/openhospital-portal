import * as React from 'react';
import { Typography, Container, Box } from "@mui/material";
import AdministrationSmartNav from "../../components/navBars/AdministrationSmartNav";
const AdministrationManageMisure = () => {
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
        Administration Manage Misure
      </Typography>

    </Container>
  );
};

export default AdministrationManageMisure;
