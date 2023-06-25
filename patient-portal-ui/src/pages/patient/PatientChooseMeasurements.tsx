import React from 'react';
import { Container } from "@mui/material";
import Bheight from "../../components/common/buttons/patient/Bheight";
import Bweight from "../../components/common/buttons/patient/Bweight";
import Btemperature from "../../components/common/buttons/patient/Btemperature";

import Bpressure from "../../components/common/buttons/patient/Bpressure";
import BheartRate from "../../components/common/buttons/patient/BheartRate";
import Bsaturation from "../../components/common/buttons/patient/Bsaturation";
import Bhgt from "../../components/common/buttons/patient/Bhgt";
import BrespirationRate from "../../components/common/buttons/patient/BrespirationRate";
import BdiuresisVol24h from "../../components/common/buttons/patient/BdiuresisVol24h";
import Bdiuresis from "../../components/common/buttons/patient/Bdiuresis";
import Bascultation from "../../components/common/buttons/patient/Bascultation";
import Bbowel from "../../components/common/buttons/patient/Bbowel";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const PatientChooseMeasurements = () => {


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
          <Item><BheartRate /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bsaturation /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Bhgt /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><BrespirationRate /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><BdiuresisVol24h /></Item>
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
