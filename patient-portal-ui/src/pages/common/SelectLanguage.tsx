import * as React from 'react';
import { Typography, Container, Box } from "@mui/material";

import AdministrationSmartNav from "../../components/navBars/AdministrationSmartNav";
import Ichange_language from "../../components/utility/common/input_data/Ichange_language";
import Save from "../../components/common/buttons/Save";

const SelectLanguage = () => {
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
