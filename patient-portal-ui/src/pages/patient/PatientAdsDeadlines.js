import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";
import Divider from '@mui/material/Divider';
import GoHomePatient from "../../components/common/buttons/GoHomePatient";
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
const PatientAdsDeadlines = ({ setAuth }) => {
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
      <PatientSmartNav page={'PatientAdsDeadlines'} />
    </Container>
  );
};

export default PatientAdsDeadlines;
