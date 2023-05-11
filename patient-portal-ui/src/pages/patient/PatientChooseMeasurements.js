import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientNav from "../../components/navBars/PatientNav";
import Divider from '@mui/material/Divider';
import Bheight from "../../components/common/buttons/patient/Bheight";
import Bweight from "../../components/common/buttons/patient/Bweight";
import Btemperature from "../../components/common/buttons/patient/Btemperature";

import Bpressure from "../../components/common/buttons/patient/Bpressure";
import Bheart_rate from "../../components/common/buttons/patient/Bheart_rate";
import Bsaturation from "../../components/common/buttons/patient/Bsaturation";
import Bhgt from "../../components/common/buttons/patient/Bhgt";
import Brespiration_rate from "../../components/common/buttons/patient/Brespiration_rate";
import Bdiuresis_vol_24h from "../../components/common/buttons/patient/Bdiuresis_vol_24h";
import Bdiuresis from "../../components/common/buttons/patient/Bdiuresis";
import Bascultation from "../../components/common/buttons/patient/Bascultation";
import Bbowel from "../../components/common/buttons/patient/Bbowel";
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const PatientChooseMeasurements = ({ setAuth }) => {

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
    <PatientSmartNav page={'PatientChooseMeasurements'} />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Item><Bweight /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item> <Bheight /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Btemperature /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bpressure /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bheart_rate /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bsaturation /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bhgt /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Brespiration_rate /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bdiuresis_vol_24h /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bdiuresis /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bascultation /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bbowel /></Item>
        </Grid>
      </Grid>
    </Container>
  );

};

export default PatientChooseMeasurements;
