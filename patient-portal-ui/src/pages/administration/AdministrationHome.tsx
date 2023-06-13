import * as React from 'react';
import { Typography, Container, Box } from "@mui/material";
import AdministrationNav from "../../components/navBars/AdministrationNav";

import ResetPassword from "../../components/common/buttons/ResetPasswordAdministration";
import SelectLanguage from "../../components/common/buttons/SelectLanguage";
import ManageMisureAdministration from "../../components/common/buttons/ManageMisureAdministration";
import ManageUsersAdministration from "../../components/common/buttons/ManageUsersAdministration";
import OtherConfigurationAdministration from "../../components/common/buttons/OtherConfigurationAdministration";
const AdministrationHome = () => {
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

      <AdministrationNav />
      <Box sx={{
        mt: 14, width: 0.7,
        display: 'flex',
        flexDirection: 'column',
        alignContent: "center"
      }} >
        <Typography>
        </Typography>
        <ResetPassword />
        <SelectLanguage />
        <ManageMisureAdministration />
        <ManageUsersAdministration />
        <OtherConfigurationAdministration />
      </Box>
    </Container>
  );
};

export default AdministrationHome;
