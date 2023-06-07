import * as React from 'react';
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PatientNav from "../../components/navBars/PatientNav";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import DefaultPatient from '../../datajs/DefaultPatient'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const PatientHome = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
        <PatientNav />
        <Box sx={{ mt: 14, width: 1 }}>
          <PatientSmartNav page={'PatientHome'} />
        </Box>
        {
          DefaultPatient[0]["xy1457uuu"].btHomePatient.map((d, i) => (
            < Button key={d.id} component={Link} to={d.to} sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
              {d.label} </Button>
          ))
        }
      </>}
    </Container>
  );
};
export default PatientHome;
