import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministrationSmartNav from "../../components/navBars/AdministrationSmartNav";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";
const AdministrationOtherConfiguration = ({ setAuth }) => {
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
        Administration Other Configuration
      </Typography>

    </Container>
  );
};

export default AdministrationOtherConfiguration;
