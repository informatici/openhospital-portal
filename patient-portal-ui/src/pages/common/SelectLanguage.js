import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministrationNav from "../../components/navBars/AdministrationNav";
import Ichange_language from "../../components/utility/common/input_data/Ichange_language";
import Save from "../../components/common/buttons/Save";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";
const SelectLanguage = ({ setAuth }) => {
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
        Seleziona Lingua
      </Typography>
      <Ichange_language />
      <Save />
    </Container>
  );
};

export default SelectLanguage;
