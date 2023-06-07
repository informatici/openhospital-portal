import React, { useState, useEffect } from 'react';
import { Button, Typography, Container } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import DoctorNav from "../../components/navBars/DoctorNav";
import DoctorLeftNav from "../../components/navBars/DoctorLeftNav";
import SearchPatient from "../../components/utility/doctor/SearchPatient";
import BnewAuth from "../../components/common/buttons/doctor/BnewAuth";
import Bagenda from "../../components/common/buttons/doctor/Bagenda";

import ListDoctorPatients from '../../datajs/ListDoctorPatients'
import { DeafutlAllData } from '../../datajs/DeafutlAllData'



function DoctorHome() {
  // let data_json: any = ListDoctorPatients;
  // let data_json_test: any = ListDoctorPatientsTest;
  // console.log(data_json_test);
  const [data, setData] = useState([]);

  useEffect(() => {
    DeafutlAllData.getToken().then((res) => {
      console.log("response getToken");
      console.log(res);
      localStorage.setItem("Token", res)

      DeafutlAllData.getPatients().then((res) => {
        console.log("response getPatients");
        console.log(res);
      });
    });
  }, []);

  let data_json: any = ListDoctorPatients[0]['doctor111aaa'];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  console.log(matches);
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
      {matches ?
        <Grid container sx={{ mt: 1 }} spacing={2}>
          <Grid item xs={12} md={3}>
            <DoctorLeftNav />
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ mt: 0, width: 1 }}>
              <Grid container sx={{ width: 1 }} spacing={2}>
                <Grid container justifyContent="flex-start" item xs={10} md={10} >
                  <SearchPatient />
                </Grid>
                <Grid container justifyContent="flex-end" item xs={2} md={1}>
                  <BnewAuth />
                </Grid>
                <Grid item md={1}><Bagenda />
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                {data_json.patient.map((button: any) => (
                  <Card key={button.id} sx={{ minWidth: 275, m: 1 }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Id: {button.id_patient}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {button.surname_patient} {button.name_patient}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" component={Link} to={{
                        pathname: '/DoctorjReqAuth',

                      }}
                        state={"768445"}
                        fullWidth
                        color="primary"
                        aria-label="insert"
                        size="small">
                        Get OTP
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        :
        <>

          <DoctorNav />
          <Grid item xs={12} md={9}>
            <Box sx={{ mt: 14, width: 1 }}>
              <Grid container sx={{ width: 1 }} spacing={2}>
                <Grid container justifyContent="flex-start" item xs={10}>
                  <SearchPatient />
                </Grid>
                <Grid container justifyContent="flex-end" item xs={2}>
                  <BnewAuth />
                </Grid>
              </Grid>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                {data_json.patient.map((button: any) => (
                  <Card key={button.id} sx={{ minWidth: 275, m: 1 }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Id: {button.id_patient}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {button.surname_patient} {button.name_patient}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" component={Link} to={{
                        pathname: '/DoctorjReqAuth',
                      }}
                        state={"768445"}
                        fullWidth
                        color="primary"
                        aria-label="insert"
                        size="small">
                        Get OTP
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </Grid></>
      }

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Container >
  );
};

export default DoctorHome;
