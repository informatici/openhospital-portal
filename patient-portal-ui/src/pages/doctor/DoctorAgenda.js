import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoctorSmartNav from "../../components/navBars/DoctorSmartNav";
import DoctorLeftAgendaNav from "../../components/navBars/DoctorLeftAgendaNav";
import Grid from '@mui/material/Grid';
import SearchPatient from "../../components/utility/doctor/SearchPatient";
import { Scheduler } from "@aldabil/react-scheduler";
import { useState } from "react";

const DoctorAgenda = ({ setAuth }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >

      <Grid container spacing={2}>
        <Grid item md={3}>
          <DoctorLeftAgendaNav />
        </Grid>
        <Grid item md={9}>
          <DoctorSmartNav />
          <Scheduler
            // style={styles.cellCal}

            view="month"
            events={[
              {
                event_id: 1,
                title: "Event 1uuu",
                start: new Date("2023/5/2 09:30"),
                end: new Date("2023/5/2 10:30"),
              },
              {
                event_id: 2,
                title: "Event 2aaa",
                start: new Date("2021/5/4 10:00"),
                end: new Date("2021/5/4 11:00"),
                coolor: "red"
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorAgenda;
