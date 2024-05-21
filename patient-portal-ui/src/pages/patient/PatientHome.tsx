
import React, { useState, useEffect } from 'react';
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PatientNav from "../../components/navBars/PatientNav";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import DoctorSmartNav from "../../components/navBars/DoctorSmartNav";
import DefaultPatient from '../../datajs/DefaultPatient'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { DefaultAllData } from '../../datajs/DefaultAllData'

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
  interface datauser {
    datauser?: Items;
  }
  const [dataUser, setDataUser] = useState([]);
  const [idPatient, setIdPatient] = useState(0);
  const [loadComponent, setLoadComponent] = useState(0);
  const [typeVisualization, setTypeVisualization] = useState("");

  console.log(localStorage.getItem("IdPatient"));
  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    let typeVisualization = localStorage.getItem("typeVisualization");

    DefaultAllData.getPatientsById(id_patient).then((res) => {
      setDataUser(res);
      setLoadComponent(1);
      if (typeVisualization == "doctor") {
        setTypeVisualization("doctor");
      } else { setTypeVisualization("patient"); }
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
        {loadComponent ? typeVisualization == "doctor" ? <> <DoctorSmartNav /> </> : <> <PatientNav {...dataUser} /></> : null}
        {/* {typeVisualization == "doctor" ? <> "dottore" </> : null} */}
        {typeVisualization == "patient" ? <>
          <Box sx={{ mt: 14, width: 1 }}>
            <PatientSmartNav page={'PatientHome'} />
          </Box>
        </> : <>
          <Box sx={{ mt: 0, width: 1 }}>
            <PatientSmartNav page={'PatientHome'} />
          </Box>
        </>}

        {
          DefaultPatient[0]["xy1457uuu"].btHomePatient.map((d, i) => (
            <Button key={d.id} component={Link} to={d.to} sx={{ margin: '8px', minHeight: '56px', borderRadius: '15px', width: 1, mt: 1, justifyContent: "flex-start" }} variant="contained" color="primary">
              {d.label} </Button>
          ))
        }
      </>}

    </Container >
  );
};
export default PatientHome;
