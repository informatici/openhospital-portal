import * as React from 'react';
import { Typography, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";

import Grid from '@mui/material/Grid';



function PatientVisitDetails(props: {
  setType: {
    id_user: number;
    name_user: string;
    date: string;
    hour: string;
    note: string;
    r_opd_dis_id_a_desc: string;
    r_opd_dis_id_a_type_desc: string;
    r_opd_note: string;
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
      <PatientSmartNav page={'PatientVisitDetails'} />
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
            Date
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
            Category
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.setType.r_opd_dis_id_a_desc}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Diagnosis
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.setType.r_opd_dis_id_a_type_desc}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Note
          </Typography>
          <Box border={1} sx={{ width: '100%', maxWidth: 500 }}>
            <Typography sx={{ m: 1 }} variant="caption" gutterBottom>
              {props.setType.r_opd_note}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientVisitDetails;
