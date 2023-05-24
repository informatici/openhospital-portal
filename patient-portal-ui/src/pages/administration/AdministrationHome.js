import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministrationNav from "../../components/navBars/AdministrationNav";

import ResetPassword from "../../components/common/buttons/ResetPasswordAdministration";
import SelectLanguage from "../../components/common/buttons/SelectLanguage";
import ManageMisureAdministration from "../../components/common/buttons/ManageMisureAdministration";
import OtherConfigurationAdministration from "../../components/common/buttons/OtherConfigurationAdministration";
const AdministrationHome = ({ setAuth }) => {
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
        <OtherConfigurationAdministration />
      </Box>
    </Container>
  );
};

export default AdministrationHome;
