import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import Save from "../../components/common/buttons/Save";


import Iweight from "../../components/utility/patient/analyses_data/input_data/Iweight";
import Iheight from "../../components/utility/patient/analyses_data/input_data/Iheight";
import Iarterial_pressure from "../../components/utility/patient/analyses_data/input_data/Iarterial_pressure";
import Itemperature from "../../components/utility/patient/analyses_data/input_data/Itemperature";
import Ibowel from "../../components/utility/patient/analyses_data/input_data/Ibowel";
import Iheart_rate from "../../components/utility/patient/analyses_data/input_data/Iheart_rate";
import Isaturation from "../../components/utility/patient/analyses_data/input_data/Isaturation";
import Ihgt from "../../components/utility/patient/analyses_data/input_data/Ihgt";
import Iascultation from "../../components/utility/patient/analyses_data/input_data/Iascultation";
import Irespiration_rate from "../../components/utility/patient/analyses_data/input_data/Irespiration_rate";
import Idiuresis_vol_24h from "../../components/utility/patient/analyses_data/input_data/Idiuresis_vol_24h";
import Idiuresis from "../../components/utility/patient/analyses_data/input_data/Idiuresis";
import Idate_time from "../../components/utility/common/input_data/Idate_time";

import Grid from '@mui/material/Grid';



function PatientHospitalizationDetails(props) {

  console.log("--- props --- PatientHospitalizationDetails");
  console.log(props);
  return (
    <Container
      maxWidth="lg"
      sx={{

        display: "flex",
        alignItems: "center",
        flexDirection: "column",

      }}
    >
      <PatientSmartNav page={'PatientHospitalizationDetails'} />
      <Grid sx={{ m: 1, width: 1, maxWidth: 500 }} container spacing={2}>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Date ospedalizza
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.date}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Time
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.hour}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Diagnosis
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.setType.diagnosis}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Category
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.setType.category}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Note
          </Typography>
          <Box border={1} sx={{ width: '100%', maxWidth: 500 }}>

            <Typography sx={{ m: 1 }} variant="caption" gutterBottom>
              {props.setType.note}
            </Typography>
          </Box>
        </Grid>
      </Grid>






    </Container>

  );

};

export default PatientHospitalizationDetails;
