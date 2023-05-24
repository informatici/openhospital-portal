import * as React from 'react';
import { Button, Typography, Container } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoctorNav from "../../components/navBars/DoctorNav";
import DoctorLeftNav from "../../components/navBars/DoctorLeftNav";

import SearchPatient from "../../components/utility/doctor/SearchPatient";
import BnewAuth from "../../components/common/buttons/doctor/BnewAuth";
import Bagenda from "../../components/common/buttons/doctor/Bagenda";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Scheduler from "react-mui-scheduler"
import { useState } from "react";
function DoctorHome({ setAuth }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  console.log("---------------------------matchdes");
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

      <Grid container spacing={2}>
        <Grid item xs={11} md={3}>
          {matches ? <DoctorLeftNav /> : <DoctorNav />}
        </Grid>
        <Grid item xs={11} md={9}>
          {matches ? <Box sx={{ mt: 0, width: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={10} md={10} >
                <SearchPatient />
              </Grid>
              <Grid item xs={2} md={1}>
                <BnewAuth />
              </Grid>
              {matches ? <Grid item md={1}><Bagenda />
              </Grid> : null}

            </Grid>
          </Box> : <Box sx={{ mt: 14, width: 1 }}>

            <Grid container spacing={2}>
              <Grid item xs={10} >
                <SearchPatient />
              </Grid>
              <Grid item xs={2}>
                <BnewAuth />
              </Grid>
            </Grid>
          </Box>
          }
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, m: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" /><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Id: 768445
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="div">
                    Mario Rossi h
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Terapia
                  </Typography>
                  <Typography variant="body2">
                    Attenzione 1
                    <br />
                    Attenzione 2
                    <br />
                    {'"Attenzione 3"'}
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
                <CardActions>
                  <Button size="small">See in Scheduler</Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See Patient</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, m: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" /><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Id: 34236
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="div">
                    Mario Rossi
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Terapia
                  </Typography>
                  <Typography variant="body2">
                    Attenzione 1
                    <br />
                    Attenzione 2
                    <br />
                    {'"Attenzione 3"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" component={Link} to={{
                    pathname: '/DoctorjReqAuth',

                  }}
                    state={"34236"}
                    fullWidth
                    color="primary"
                    aria-label="insert"
                    size="small">
                    Get OTP
                  </Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See in Scheduler</Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See Patient</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, m: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" /><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Id: 7686876
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="div">
                    Mario Rossi
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Terapia
                  </Typography>
                  <Typography variant="body2">
                    Attenzione 1
                    <br />
                    Attenzione 2
                    <br />
                    {'"Attenzione 3"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" component={Link} to={{
                    pathname: '/DoctorjReqAuth',

                  }}
                    state={"7686876"}
                    fullWidth
                    color="primary"
                    aria-label="insert"
                    size="small">
                    Get OTP
                  </Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See in Scheduler</Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See Patient</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, m: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" /><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Id: 24242
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="div">
                    Mario Rossi
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Terapia
                  </Typography>
                  <Typography variant="body2">
                    Attenzione 1
                    <br />
                    Attenzione 2
                    <br />
                    {'"Attenzione 3"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" component={Link} to={{
                    pathname: '/DoctorjReqAuth',

                  }}
                    state={"24242"}
                    fullWidth
                    color="primary"
                    aria-label="insert"
                    size="small">
                    Get OTP
                  </Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See in Scheduler</Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See Patient</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, m: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" /><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Id: 666666
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="div">
                    Mario Rossi
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Terapia
                  </Typography>
                  <Typography variant="body2">
                    Attenzione 1
                    <br />
                    Attenzione 2
                    <br />
                    {'"Attenzione 3"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" component={Link} to={{
                    pathname: '/DoctorjReqAuth',

                  }}
                    state={"666666"}
                    fullWidth
                    color="primary"
                    aria-label="insert"
                    size="small">
                    Get OTP
                  </Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See in Scheduler</Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See Patient</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275, m: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" /><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Id: 23111
                    </Typography>
                  </Stack>
                  <Typography variant="h5" component="div">
                    Mario Rossi
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Terapia
                  </Typography>
                  <Typography variant="body2">
                    Attenzione 1
                    <br />
                    Attenzione 2
                    <br />
                    {'"Attenzione 3"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" component={Link} to={{
                    pathname: '/DoctorjReqAuth',

                  }}
                    state={"23111"}
                    fullWidth
                    color="primary"
                    aria-label="insert"
                    size="small">
                    Get OTP
                  </Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See in Scheduler</Button>
                </CardActions>
                <CardActions>
                  <Button size="small">See Patient</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>




        </Grid>
      </Grid>

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Container >
  );
};

export default DoctorHome;
