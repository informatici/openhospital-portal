import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoctorSmartNav from "../../components/navBars/DoctorSmartNav";
import SearchPatient from "../../components/utility/doctor/SearchPatient";
import IReqAut from "../../components/utility/doctor/IReqAut";
import { Scheduler } from "@aldabil/react-scheduler";
import { useState } from "react";
import "../../style.css";
const styles = {
  cellCal: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "red",
    padding: "0 2em"
  }
};

function DoctorjReqAuth(data: { idUser: any; }) {
  const [idUser, setData] = useState([]);

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
      <DoctorSmartNav />
      <IReqAut

        // parentToChild={data}
      />
    </Container>
  );
};

export default DoctorjReqAuth;
