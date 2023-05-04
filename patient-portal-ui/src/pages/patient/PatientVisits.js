import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import PatientNav from "../../components/navBars/PatientNav";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import GoHomePatient from "../../components/common/buttons/GoHomePatient";

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
const PatientVisits = ({ setAuth }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        border: "1px solid rgba(0,0,0,.1)",
      }}
    >
      {/* <Box sx={{ mt: 2 }}>
        <Logo />
      </Box> */}
      <PatientNav />
      <Root>
      <Typography variant="h6" component="h2" display="inline" sx={{ width: 1 }}>Visits: </Typography>
     
        <Divider textAlign="left" sx={{
          fontWeight: 'bold',
          color: "red",
        }}>24/04/2023 Ore 12:30</Divider>
        <div>
          Esame 1 (sala 12) testo  testo  testo  testo
        </div>
        <Divider textAlign="left" sx={{
          fontWeight: 'bold',
          color: "green",
        }}>25/04/2023 Ore 12:22</Divider>
        <div >
          Esame 232 (sala 12)
          testo  testo  testo  testo
          testo  testo  testo  testo
          testo  testo  testo  testo
        </div>
        <Divider textAlign="left" sx={{
          fontWeight: 'bold',
          color: "red",
        }}>26/04/2023 Ore 19:30</Divider>
        <div>
          Ritiro Analisi 1 (Ospedale 12 )
          testo  testo  testo  testo
        </div>
        <Divider textAlign="left" sx={{
          fontWeight: 'bold',
          color: "red",
        }}>01/05/2023 Ore 12:30</Divider>
        <div>
          Esame 12 (sala 12), Testo testo  testo  testo  testo
          testo  testo  testo  testo
          testo  testo  testo  testo
          testo  testo  testo  testo
        </div>
        <Divider textAlign="left" sx={{
          fontWeight: 'bold',
          color: "blue",
        }}>05/05/2023 Ore 12:30</Divider>
        <div>
          Ritiro Analisi 1 (sala 12) testo  testo  testo  testo
          testo  testo  testo  testo
          testo  testo  testo  testo
        </div>
        <Divider textAlign="left" sx={{
          fontWeight: 'bold',
          color: "green",
        }}>12/05/2023 Ore 14:30</Divider>
        <div>
          Esame 444 (sala 12 Piano Terra )
          testo  testo  testo  testo
        </div>
        <Divider textAlign="left" sx={{
          fontWeight: 'bold',
          color: "red",
        }}>24/05/2023 Ore 17:30</Divider>
        <div>
          Pagamento 1 (sala 12)
          testo  testo  testo  testo
          testo  testo  testo  testo
          testo  testo  testo  testo
          testo  testo  testo  testo
        </div>
      </Root>
      <GoHomePatient />
    </Container>
  );
};

export default PatientVisits;
