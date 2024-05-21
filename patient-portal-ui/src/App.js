import React from 'react';
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";
import "./styles/general.css";



import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SelectLanguage from "./pages/common/SelectLanguage";

import PatientHome from "./pages/patient/PatientHome";
import PatientChooseMeasurements from "./pages/patient/PatientChooseMeasurements";
import PatientInsertMeasurements from "./pages/patient/PatientInsertMeasurements";
import PatientMeasurements from "./pages/patient/PatientMeasurements";
import PatientAgenda from "./pages/patient/PatientAgenda";
import PatientAdsDeadlines from "./pages/patient/PatientAdsDeadlines";
import PatientExams from "./pages/patient/PatientExams";
import PatientExamDetails from "./pages/patient/PatientExamDetails";
import PatientHospitalizations from "./pages/patient/PatientHospitalizations";
import PatientHospitalizationDetails from "./pages/patient/PatientHospitalizationDetails";
import PatientPayments from "./pages/patient/PatientPayments";
import PatientPaymentDetails from "./pages/patient/PatientPaymentDetails";
import PatientTherapies from "./pages/patient/PatientTherapies";
import PatientTherapieDetails from "./pages/patient/PatientTherapieDetails";
import PatientVaccinations from "./pages/patient/PatientVaccinations";
import PatientVaccinationDetails from "./pages/patient/PatientVaccinationDetails";
import PatientVisits from "./pages/patient/PatientVisits";
import PatientVisitDetails from "./pages/patient/PatientVisitDetails";


import DoctorHome from "./pages/doctor/DoctorHome";
import DoctorAgenda from "./pages/doctor/DoctorAgenda";
import DoctorjReqAuth from "./pages/doctor/DoctorjReqAuth";

import AdministrationHome from "./pages/administration/AdministrationHome";
import AdministrationManageMisure from "./pages/administration/AdministrationManageMisure";
import AdministrationResetPassword from "./pages/administration/AdministrationResetPassword";
import ManageUsersAdministration from "./pages/administration/ManageUsersAdministration";
import AdministrationOtherConfiguration from "./pages/administration/AdministrationOtherConfiguration";

import { red } from '@mui/material/colors';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Context } from "./Context";
import { theme_1, theme_2, theme_3, theme_4, theme_5 } from "./styles/themes";

export const ThemeContext = React.createContext();
export const UserContext = React.createContext();
function App(props) {


  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState("aaaaa");
  const location = useLocation();
  const [theme, setTheme] = useState(theme_1);

  const value = { theme, setTheme };


  return (
    <Context.Provider value={{ theme, setTheme }} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/logout" element={<Login setAuth={setAuth} setProfile={setProfile} />} />
          <Route path="/login" element={<Login setAuth={setAuth} setProfile={setProfile} />} />
          <Route path="/signup" element={<Signup setAuth={setAuth} />} />
          <Route path="/resetPassword" element={<ResetPassword setAuth={setAuth} />} />

          <Route path="/PatientHome" element={<PatientHome setAuth={setAuth} />} />
          <Route path="/PatientChooseMeasurements" element={<PatientChooseMeasurements setAuth={setAuth} />} />
          <Route path="/PatientInsertMeasurements" element={<PatientInsertMeasurements setAuth={setAuth} setType={location.state} />} />
          <Route path="/PatientMeasurements" element={<PatientMeasurements setAuth={setAuth} />} />
          <Route path="/PatientAgenda" element={<PatientAgenda setAuth={setAuth} />} />
          <Route path="/PatientAdsDeadlines" element={<PatientAdsDeadlines setAuth={setAuth} />} />
          <Route path="/PatientExams" element={<PatientExams setAuth={setAuth} />} />
          <Route path="/PatientExamDetails" element={<PatientExamDetails setAuth={setAuth} setType={location.state} />} />
          <Route path="/PatientHospitalizations" element={<PatientHospitalizations setAuth={setAuth} />} />
          <Route path="/PatientHospitalizationDetails" element={<PatientHospitalizationDetails setAuth={setAuth} setType={location.state} />} />
          <Route path="/PatientPayments" element={<PatientPayments setAuth={setAuth} />} />
          <Route path="/PatientPaymentDetails" element={<PatientPaymentDetails setAuth={setAuth} setType={location.state} />} />
          <Route path="/PatientTherapies" element={<PatientTherapies setAuth={setAuth} />} />
          <Route path="/PatientTherapieDetails" element={<PatientTherapieDetails setAuth={setAuth} setType={location.state} />} />
          <Route path="/PatientVaccinations" element={<PatientVaccinations setAuth={setAuth} />} />
          <Route path="/PatientVaccinationDetails" element={<PatientVaccinationDetails setAuth={setAuth} setType={location.state} />} />
          <Route path="/PatientVisits" element={<PatientVisits setAuth={setAuth} />} />
          <Route path="/PatientVisitDetails" element={<PatientVisitDetails setAuth={setAuth} setType={location.state} />} />

          <Route path="/DoctorHome" element={<DoctorHome setAuth={setAuth} />} />
          <Route path="/DoctorAgenda" element={<DoctorAgenda setAuth={setAuth} />} />
          <Route path="/DoctorjReqAuth" element={<DoctorjReqAuth setAuth={setAuth} setType={location.state} />} />

          <Route path="/AdministrationHome" element={<AdministrationHome setAuth={setAuth} />} />
          <Route path="/AdministrationResetPassword" element={<AdministrationResetPassword setAuth={setAuth} />} />
          <Route path="/AdministrationManageMisure" element={<AdministrationManageMisure setAuth={setAuth} />} />
          <Route path="/ManageUsersAdministration" element={<ManageUsersAdministration setAuth={setAuth} />} />
          <Route path="/AdministrationOtherConfiguration" element={<AdministrationOtherConfiguration setAuth={setAuth} />} />

          <Route path="/SelectLanguage" element={<SelectLanguage setAuth={setAuth} />} />
          <Route
            path="/"
            // element={
            //   auth ? (
            //     profile == "Admin" ? (
            //       <AdminHome setAuth={setAuth} />
            //     ) : profile == "Administration" ? (
            //       <AdministrationHome setAuth={setAuth} />
            //     ) : profile == "Doctor" ? (
            //       <DoctorHome setAuth={setAuth} />
            //     ) : profile == "Patient" ? (
            //       <PatientHome theme={theme_2} setAuth={setAuth} />
            //     ) : profile == "Unauthorized" ? (
            //       <Navigate to="/login" state={{ from: location }} replace />
            //     ) :
            //       <Navigate to="/login" state={{ from: location }} replace />
            //   ) : (
            //     <Navigate to="/login" state={{ from: location }} replace />
            //   )
            // }
            element={
              auth ? (
                profile == "Admin" ? (
                  <AdminHome setAuth={setAuth} />
                ) : profile == "Administration" ? (
                  <AdministrationHome setAuth={setAuth} />
                ) : profile == "Doctor" ? (
                  <DoctorHome setAuth={setAuth} />
                ) : profile == "Patient" ? (
                  <PatientHome theme={theme_2} setAuth={setAuth} />
                ) :
                  <PatientHome setAuth={setAuth} />
              ) : (
                <Navigate to="/login" state={{ from: location }} replace />
              )
            }
          />
        </Routes>
      </ThemeProvider>
    </Context.Provider>
  );
}
export default App;