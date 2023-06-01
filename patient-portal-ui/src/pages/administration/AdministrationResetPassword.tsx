import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministrationSmartNav from "../../components/navBars/AdministrationSmartNav";
import Iuser_name from "../../components/utility/administration/input_data/Iuser_name";
import Iuser_password from "../../components/utility/administration/input_data/Iuser_password";
import Save from "../../components/common/buttons/Save";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";

const AdministrationResetPassword = () => {
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
        Administration Reset Password
      </Typography>
      <Iuser_name />
      <Iuser_password />
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

export default AdministrationResetPassword;
