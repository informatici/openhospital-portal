
import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PatientNav from "../../components/navBars/PatientNav";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import DefaultPatient from '../../datajs/DefaultPatient'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { DeafutlAllData } from '../../datajs/DeafutlAllData'

const PatientHome = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [data, setData] = useState([]);
  const [loadComponent, setLoadComponent] = useState(0);

  useEffect(() => {
    DeafutlAllData.getToken().then((res) => {
      console.log("response getToken");
      console.log(res);
      localStorage.setItem("Token", res)

      // DeafutlAllData.getPatientrecords_patient().then((res) => {
      //   console.log("response getPatients");
      //   console.log(res);
      //   setData(res);
      //   setLoadComponent(1);
      // });
      DeafutlAllData.getPatientsById(11).then((res) => {
        console.log("-----response getPatientsById");
        console.log(res);
        setData(res);
        setLoadComponent(1);
      });

    });
  }, []);
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
      {matches ? <><p>Only Smart Phone</p></> : <>
        {loadComponent ? <><PatientNav data={data} /></> : null}

        < Box sx={{ mt: 14, width: 1 }}>
          <PatientSmartNav page={'PatientHome'} />
        </Box>
        {
          DefaultPatient[0]["xy1457uuu"].btHomePatient.map((d, i) => (
            < Button key={d.id} component={Link} to={d.to} sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
              {d.label} </Button>
          ))
        }
      </>}

    </Container >
  );
};
export default PatientHome;
