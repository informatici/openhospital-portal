import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";



import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
import AdministrationOtherConfiguration from "./pages/administration/AdministrationOtherConfiguration";

import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
  },
});
function App(props) {
  const theme_1 = createTheme({
    palette: {
      primary: {
        light: "#b39ddb",
        main: "#673ab7",
        dark: "#512da8",
        contrastText: "#fff",
      },
      secondary: {
        light: "#448aff",
        main: "#2979ff",
        dark: "#2962ff",
        contrastText: "#000",
      },
    },
  });
  const theme_2 = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#00bcd4',
      },
      secondary: {
        main: '#ffea00',
      },
      info: {
        main: '#80d8ff',
      },
    },
  });
  const theme_3 = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#e0364c',
      },
      secondary: {
        main: '#f50057',
      },
    },
    direction: 'rtl',
  });
  const theme_4 = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#5a3f36',
      },
      secondary: {
        main: '#f50057',
      },
    },
    direction: 'rtl',
  });
  const theme_5 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ec4109',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: 'rgba(78,75,75,0.66)',
      },
    },
    direction: 'rtl',
  });

  // export const themeOptions: ThemeOptions = {
  //   palette: {
  //     mode: 'light',
  //     primary: {
  //       main: '#3f51b5',
  //     },
  //     secondary: {
  //       main: '#f50057',
  //     },
  //   },
  // };
  const [auth, setAuth] = useState(false);
  const [profile, setProfile] = useState("aaaaa");
  const location = useLocation();
  const [themeUser, setThemeUser] = useState("uu");
  const sendDataToParent = (index) => { // the callback. Use a better name

    setThemeUser(index);
  };
  console.log("themeUser in App.js");
  console.log(themeUser);
  // const [message, setMessage] = React.useState("Hello World");  
  const chooseThemeUser = (themeUser) => {
    setThemeUser(themeUser);
  };

  let theme = theme_3;
  if (themeUser == "theme_2") {
    theme = theme_1;
  } else {
    theme = theme_2;
  }
  return (
    // <ThemeProvider theme={themeUser}>
    // <ThemeProvider theme={theme_5}>
       <ThemeProvider >
      <CssBaseline />
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider> */}
      <Routes>
        <Route path="/logout" element={<Login setAuth={setAuth} setProfile={setProfile} />} />
        <Route path="/login" element={<Login setAuth={setAuth} setProfile={setProfile} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />

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
  );
}

export default App;