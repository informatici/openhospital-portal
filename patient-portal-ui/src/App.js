import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";



import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SelectLanguage from "./pages/common/SelectLanguage";

import PatientHome from "./pages/patient/PatientHome";
import PatientAgenda from "./pages/patient/PatientAgenda";
import PatientAdsDeadlines from "./pages/patient/PatientAdsDeadlines";
import PatientExams from "./pages/patient/PatientExams";
import PatientHospitalizations from "./pages/patient/PatientHospitalizations";
import PatientPayments from "./pages/patient/PatientPayments";
import PatientTherapies from "./pages/patient/PatientTherapies";
import PatientVaccinations from "./pages/patient/PatientVaccinations";
import PatientVisits from "./pages/patient/PatientVisits";

import DoctorHome from "./pages/doctor/DoctorHome";
import DoctorAgenda from "./pages/doctor/DoctorAgenda";

import AdministrationHome from "./pages/administration/AdministrationHome";
import AdministrationManageMisure from "./pages/administration/AdministrationManageMisure";
import AdministrationResetPassword from "./pages/administration/AdministrationResetPassword";
import AdministrationOtherConfiguration from "./pages/administration/AdministrationOtherConfiguration";




function App() {

  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState("aaaaa");
  const location = useLocation();
  // console.log("----");
  // console.log(auth);
  // console.log(profile);
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/logout" element={<Login setAuth={setAuth} setProfile={setProfile} />} />
        <Route path="/login" element={<Login setAuth={setAuth} setProfile={setProfile} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/PatientHome" element={<PatientHome setAuth={setAuth} />} />
        <Route path="/PatientAgenda" element={<PatientAgenda setAuth={setAuth} />} />
        <Route path="/PatientAdsDeadlines" element={<PatientAdsDeadlines setAuth={setAuth} />} />
        <Route path="/PatientExams" element={<PatientExams setAuth={setAuth} />} />
        <Route path="/PatientHospitalizations" element={<PatientHospitalizations setAuth={setAuth} />} />
        <Route path="/PatientPayments" element={<PatientPayments setAuth={setAuth} />} />
        <Route path="/PatientTherapies" element={<PatientTherapies setAuth={setAuth} />} />
        <Route path="/PatientVaccinations" element={<PatientVaccinations setAuth={setAuth} />} />
        <Route path="/PatientVisits" element={<PatientVisits setAuth={setAuth} />} />

        <Route path="/DoctorHome" element={<DoctorHome setAuth={setAuth} />} />
        <Route path="/DoctorAgenda" element={<DoctorAgenda setAuth={setAuth} />} />

        <Route path="/AdministrationHome" element={<AdministrationHome setAuth={setAuth} />} />
        <Route path="/AdministrationResetPassword" element={<AdministrationResetPassword setAuth={setAuth} />} />
        <Route path="/AdministrationManageMisure" element={<AdministrationManageMisure setAuth={setAuth} />} />
        <Route path="/AdministrationOtherConfiguration" element={<AdministrationOtherConfiguration setAuth={setAuth} />} />

        <Route path="/SelectLanguage" element={<SelectLanguage setAuth={setAuth} />} />
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