import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoctorNav from "../../components/navBars/DoctorNav";
import SearchPatient from "../../components/utility/doctor/SearchPatient";
import { Scheduler } from "@aldabil/react-scheduler";
import { useState } from "react";
const DoctorHome = ({ setAuth }) => {
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

      <DoctorNav />
      <Scheduler
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
    </Container>
  );
};

export default DoctorHome;
