import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import AdministrationHome from "./pages/AdministrationHome";
import DoctorHome from "./pages/DoctorHome";
import PatientHome from "./pages/PatientHome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PatientAgenda from "./pages/PatientAgenda";

function App() {

  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState("aaaaa");
  const location = useLocation();
  console.log("----");
  console.log(auth);
  console.log(profile);
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} setProfile={setProfile} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/PatientHome" element={<PatientHome setAuth={setAuth} />} />
        <Route path="/PatientAgenda" element={<PatientAgenda setAuth={setAuth} />} />
        <Route
          path="/"
          element={

            auth ? (
              profile == "Admin" ? (
                <AdminHome setAuth={setAuth} />
              ) : profile == "Administration" ? (
                <AdministrationHome setAuth={setAuth} />
              ) : profile == "Doctor" ? (
                <DoctorHome setAuth={setAuth} />
              ) : profile == "Patient" ? (
                <PatientHome setAuth={setAuth} />
              ) :
                <PatientHome setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;