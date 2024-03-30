import * as React from 'react';
import { Typography, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";

import Grid from '@mui/material/Grid';



function PatientHospitalizationDetails(props: {
  setType: {
    id_user: number;
    name_user: string;
    r_adm_wrd_id_a_desc: string;
    r_adm_admt_id_a_adm_desc: string;
    date_in: string;
    hour_in: string;
    r_adm_in_dis_id_a_desc: string;
    r_adm_out_dis_id_a_desc: string;
    date_out: string;
    hour_out: string;
    r_adm_note: string;
  };
}) {
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
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Id User: {props.setType.id_user}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="body1" gutterBottom>
            {props.setType.name_user}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Hospital Ward
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.r_adm_wrd_id_a_desc}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Hospitalization Type
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.r_adm_admt_id_a_adm_desc}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Recovery Date
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.date_in}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Recovery Time
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.hour_in}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Diagnosis In
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.setType.r_adm_in_dis_id_a_desc}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Diagnosis Out
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.setType.r_adm_out_dis_id_a_desc}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Discharge Date
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.date_out}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Discharge Time
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.hour_out}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Note
          </Typography>
          <Box border={1} sx={{ width: '100%', maxWidth: 500 }}>
            <Typography sx={{ m: 1 }} variant="caption" gutterBottom>
              {props.setType.r_adm_note}
            </Typography>
          </Box>
        </Grid>
      </Grid>






    </Container>

  );

};

export default PatientHospitalizationDetails;
