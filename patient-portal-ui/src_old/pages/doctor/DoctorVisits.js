import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoctorNav from "../../components/navBars/DoctorNav";
import SearchPatient from "../../components/utility/doctor/SearchPatient";

import { useState } from "react";
const DoctorHome = () => {
  function setAuth(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

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

      <DoctorNav />
      <SearchPatient />
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#b25977", color: '#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_annsca-content"
          id="panel_annsca-header"

        >
          <Typography>Agenda DOCTOR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Annunci/ScadenzeAnnunci/ScadenzeAnnunci/Scadenze
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Button sx={{ mt: 1 }} size="large" variant="contained" onClick={() => setAuth(false)}>
        Log out
      </Button>
    </Container>
  );
};

export default DoctorHome;
