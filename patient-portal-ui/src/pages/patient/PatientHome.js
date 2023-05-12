import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BrowserRouter, Link } from "react-router-dom";
import NavBar from "./../../components/NavBar";
import DefTesttable from "./../../components/tables/defTesttable";
import PatientNav from "./../../components/navBars/PatientNav";
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";
// import AdsClickIcon from '@mui/icons-material/AdsClick';

//////////////////////////////////////

const PatientHome = ({ setAuth }) => {
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

      }}
    >
      <PatientNav />
      <PatientSmartNav sx={{ mt: 10 }} page={'PatientHome'} />
      <Button component={Link} to="/PatientMeasurements" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Measurements
      </Button>
      <Button component={Link} to="/PatientVisits" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Visits
      </Button>
      <Button component={Link} to="/PatientAdsDeadlines" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Ads/Deadliness
      </Button>
      <Button component={Link} to="/PatientExams" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Exams
      </Button>
      <Button component={Link} to="/PatientHospitalizations" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Hospitalizations
      </Button>
      <Button component={Link} to="/PatientPayments" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Payments
      </Button>
      <Button component={Link} to="/PatientTherapies" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Therapies
      </Button>
      <Button component={Link} to="/PatientVaccinations" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Vaccinations
      </Button>

    </Container>
  );
};
export default PatientHome;
