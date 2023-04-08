import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BrowserRouter, Link } from "react-router-dom";
import NavBar from "./../components/NavBar";
import DefTesttable from "./../components/tables/defTesttable";
import PatientNav from "./../components/navBars/patientNav";

//////////////////////////////////////

const patientList = ({ setAuth }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
        <AccordionSummary sx={{ bgcolor: "#b25977", color:'#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_annsca-content"
          id="panel_annsca-header"

        >
          <Typography>Annunci/Scadenze List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Annunci/ScadenzeAnnunci/ScadenzeAnnunci/Scadenze
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#626eb2", color:'#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_visite-content"
          id="panel_visite-header"
        >
          <Typography>Visite</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            VisiteVisiteVisite
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#74b2a4", color:'#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_esami-content"
          id="panel_esami-header"
        >
          <Typography>Esami</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            EsamiEsamiEsami
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#b2b262", color:'#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_pagamenti-content"
          id="panel_pagamenti-header"
        >
          <Typography>Pagamenti</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            PagamentiPagamentiPagamenti
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#a359b0", color:'#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_ricoveri-content"
          id="panel_ricoveri-header"
        >
          <Typography>Ricoveri</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            RicoveriRicoveriRicoveri
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#b26e59", color:'#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_vaccinazioni-content"
          id="panel_vaccinazioni-header"
        >
          <Typography>Vaccinazioni</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            VaccinazioniVaccinazioniVaccinazioni
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: 1 }}>
        <AccordionSummary sx={{ bgcolor: "#5997b2", color:'#fff' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel_terapie-content"
          id="panel_terapie-header"
        >
          <Typography>Terapie</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TerapieTerapieTerapie
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
       <AccordionSummary  color='#b26059'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
      <Button sx={{ mt: 1 }} size="large" variant="contained" onClick={() => setAuth(false)}>
        Log out
      </Button>
    </Container>
  );
};

// const comp = () => (
//   <motion.span
//     variants={stagger}
//     initial="initial"
//     animate="animate"
//     style={{
//       textAlign: "center",
//       marginTop: 4,
//       padding: 4,
//       fontSize: "8rem",
//       fontWeight: 500,
//       position: "relative",
//       letterSpacing: "-0.8rem",
//       display: "inline-block",
//       whiteSpace: "nowrap",
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "4rem",
//         letterSpacing: "-0.4rem",
//         paddin: 0,
//       },
//     }}
//   >
//     {[..."Welcome Back"].map((l, i) => (
//       <motion.span variants={animation} key={i}>
//         {l}
//       </motion.span>
//     ))}
//   </motion.span>
// );
export default patientList;
