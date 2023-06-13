import * as React from 'react';
import { Typography, Container } from "@mui/material";
import AdminNav from "../../components/navBars/AdminNav";

export default function AdminHome() {
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
      <AdminNav />
      <Typography sx={{ mt: 14, width: 1 }} variant="h1" >
        ???
      </Typography>
    </Container>
  );
};