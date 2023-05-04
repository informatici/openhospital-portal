import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdministrationNav from "../../components/navBars/AdministrationNav";
import Iuser_name from "../../components/utility/administration/input_data/Iuser_name";
import Iuser_password from "../../components/utility/administration/input_data/Iuser_password";
import Save from "../../components/common/buttons/Save";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";

const AdministrationResetPassword = ({ setAuth }) => {
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
        AdministrationResetPassword
      </Typography>
      <Iuser_name />
      <Iuser_password />
      <Save />
    </Container>
  );
};

export default AdministrationResetPassword;
