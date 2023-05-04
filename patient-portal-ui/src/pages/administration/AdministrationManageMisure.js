import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministrationNav from "../../components/navBars/AdministrationNav";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";
const AdministrationManageMisure = ({ setAuth }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        flex: 1,
        height: "100vh",
      }}
    >

      <AdministrationNav />
      <GoHomeAdministration />
      <Typography>
        AdministrationManageMisure
      </Typography>

    </Container>
  );
};

export default AdministrationManageMisure;
