import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministrationSmartNav from "../../components/navBars/AdministrationSmartNav";
import Ichange_language from "../../components/utility/common/input_data/Ichange_language";
import Save from "../../components/common/buttons/Save";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";
const SelectLanguage = ({ setAuth }) => {
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
        Select Language
      </Typography>
      <Ichange_language />
      <Box sx={{
        mt: 14, width: 0.7,
        display: 'flex',
        flexDirection: 'column',
        alignContent: "center"
      }} >
        <Save />
      </Box>
    </Container>
  );
};

export default SelectLanguage;
