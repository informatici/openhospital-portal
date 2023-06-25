
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

  interface Items {
    firstName?: string;
    secondName?: string;
    birthDate?: string;
    sex?: string;
    address?: string;
    city?: string;
    telephone?: string;
  }
  interface dataa {
    dataa?: Items;
  }
  const [dataa, setData] = useState([]);
  const [idPatient, setIdPatient] = useState(0);
  const [loadComponent, setLoadComponent] = useState(0);
  console.log(localStorage.getItem("IdPatient"));
  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    DeafutlAllData.getPatientsById(id_patient).then((res) => {
      setData(res);
      setLoadComponent(1);
    });
  }, []);
  let data: dataa = {};
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
        {loadComponent ? <><PatientNav {...dataa} /></> : null}

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
