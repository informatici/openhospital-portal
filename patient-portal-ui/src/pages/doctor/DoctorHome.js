import * as React from 'react';
import { Button, Typography, Container } from "@mui/material";
import Logo from "../../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoctorNav from "../../components/navBars/DoctorNav";
import SearchPatient from "../../components/utility/doctor/SearchPatient";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Scheduler from "react-mui-scheduler"
import { useState } from "react";
const DoctorHome = ({ setAuth }) => {
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

      <DoctorNav />
      <SearchPatient />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275, m: 1 }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" /><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Id: 23422
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
                  Id: 23422
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
                  Id: 23422
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
                  Id: 23422
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
                  Id: 23422
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
                  Id: 23422
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
              <Button size="small">See in Scheduler</Button>
            </CardActions>
            <CardActions>
              <Button size="small">See Patient</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>





      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Container>
  );
};

export default DoctorHome;
