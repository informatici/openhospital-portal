import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientNav from "./../components/navBars/patientNav";
const PatientAgenda = ({ setAuth }) => {
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
      <Box sx={{ mt: 2 }}>
        <Logo />
      </Box>
      <PatientNav />

      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#b25977", color: '#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_annsca-content"
          id="panel_annsca-header"

        >
          <Typography>Agenda AGENDA</Typography>
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

export default PatientAgenda;
