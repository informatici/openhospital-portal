import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdminNav from "../../components/navBars/AdminNav";

import ResetPassword from "../../components/common/buttons/ResetPasswordAdministration";
import SelectLanguage from "../../components/common/buttons/SelectLanguage";
import ManageMisureAdministration from "../../components/common/buttons/ManageMisureAdministration";
import OtherConfigurationAdministration from "../../components/common/buttons/OtherConfigurationAdministration";
const AdminHome = ({ setAuth }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >

      <AdminNav />

      <Typography>
        AdminHome
      </Typography>
      <ResetPassword />
      <SelectLanguage />
      <ManageMisureAdministration />
      <OtherConfigurationAdministration />
    </Container>
  );
};

export default AdminHome;
