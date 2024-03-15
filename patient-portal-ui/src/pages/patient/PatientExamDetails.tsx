import * as React from 'react';
import { Typography, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";

import Grid from '@mui/material/Grid';



function PatientExamDetails(props: {

  setType: {
    id_user: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    name_user: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    hour: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    diagnosis: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    value: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    category: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    note: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_wrd_id_a_desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_date_adm: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_admt_id_a_adm_desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_in_dis_id_a_desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_out_dis_id_a_desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_date_dis_date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_date_dis_time: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    r_adm_note: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
  };
}) {
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
      <PatientSmartNav page={'PatientExamDetails'} />
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
            Reparto
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.r_adm_wrd_id_a_desc}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Tipo Ricovero
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.r_adm_admt_id_a_adm_desc}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Ricovero
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.date}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Orario
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.hour}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Diagnosi Ingresso
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.setType.r_adm_in_dis_id_a_desc}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography style={{ fontWeight: 600 }}>
            Diagnosi Uscita
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.setType.r_adm_out_dis_id_a_desc}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Dimissioni
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.r_adm_date_dis_date}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography style={{ fontWeight: 600 }}>
            Orario
          </Typography>
          <Typography display="block" variant="button" gutterBottom>
            {props.setType.r_adm_date_dis_time}
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
export default PatientExamDetails;
