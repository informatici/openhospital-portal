import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { DeafutlAllData } from '../datajs/DeafutlAllData'

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = ({ setAuth, setProfile, setIdPatient }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [dataUP, setDataUP] = useState([]);
  const [loadComponent, setLoadComponent] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState()

  // useEffect(() => {

  //   console.log("dataUP");
  //   console.log(dataUP);
  //   DeafutlAllData.getToken().then((res) => {
  //     console.log("response getToken");
  //     console.log(res);
  //     localStorage.setItem("Token", res)

  //     // DeafutlAllData.getPatientrecords_patient().then((res) => {
  //     //   console.log("response getPatients");
  //     //   console.log(res);
  //     //   setData(res);
  //     //   setLoadComponent(1);
  //     // });
  //     DeafutlAllData.getPatientsById(11).then((res) => {
  //       console.log("-----response getPatientsById");
  //       console.log(res);
  //       setData(res);
  //       setLoadComponent(1);
  //     });

  //   });
  //   // --- end gestione profilo TODO ---
  //   setTimeout(() => {
  //     console.log("submited!!");
  //     console.log(from);
  //     setAuth(true);
  //     setProfile(amb);
  //     navigate(from, { replace: true });
  //   }, 5000);

  // }, []);



  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  let amb = "";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");
      // --- start gestione profilo TODO ---
      console.log(values.email);
      if (values.email == "a@a.com") {
        amb = "Admin";

      } else if (values.email == "as@a.com") {
        amb = "Administration";

      } else if (values.email == "d@a.com") {
        amb = "Doctor";

      } else if (values.email == "p@a.com") {
        amb = "Patient";

      } else {
        console.log("Login Utente");
        const data = [
          {
            username: values.email,
            password: values.password,
          },
        ];
        DeafutlAllData.postLogin(values.email, values.password).then((res) => {
          console.log("response getToken ------------");
          console.log(res);
          localStorage.setItem("Token", res);
          console.log(res.roles);
          if (res.roles[0] == "ROLE_PATIENT") {
            setProfile(amb);
          }
          // --- TO DO recupero user id e chiamata per recupero patient id
          // let id_user = "";
          // if (values.email == "hospital.admin@ermail.com") {
          //   id_user = 2;
          //   DeafutlAllData.postLogin(values.email, values.password).then((res) => {
          //     localStorage.setItem("IdPatient", );
          //   });
           
          // }
          // if (values.email == "doctor@email.com") { localStorage.setItem("IdPatient", 3); }
          if (values.email == "justin.frederick@email.com") { localStorage.setItem("IdPatient", 1); }
          if (values.email == "anthon.geremy@email.com") { localStorage.setItem("IdPatient", 2); }
          if (values.email == "veronique.fountain@email.com") { localStorage.setItem("IdPatient", 3); }
          if (values.email == "cypher.marica@email.com") { localStorage.setItem("IdPatient", 4); }
          if (values.email == "serena.levinson@email.com") { localStorage.setItem("IdPatient", 5); }
          if (values.email == "bardsley.zenaida@email.com") { localStorage.setItem("IdPatient", 6); }
          if (values.email == "graney.almedan@email.com") { localStorage.setItem("IdPatient", 7); }
          if (values.email == "ackman.sammy@email.com") { localStorage.setItem("IdPatient", 8); }
          if (values.email == "pohlman.margot@email.com") { localStorage.setItem("IdPatient", 9); }
          if (values.email == "jeana.bennett@email.com") { localStorage.setItem("IdPatient", 10); }
          if (values.email == "abramo.oliver@email.com") { localStorage.setItem("IdPatient", 11); }
        });
      }
      setTimeout(() => {
        console.log("submited!!");
        console.log(from);
        setAuth(true);
        setProfile(amb);
        navigate(from, { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          // spacing={1}
          sx={{ mt: 3 }}
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            sx={{ mt: 1 }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            {/* <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    {...getFieldProps("remember")}
                    checked={values.remember}
                  />
                }
                label="Remember me"
              />

              <Link
                component={RouterLink}
                variant="subtitle2"
                to="#"
                underline="hover"
              >
                Forgot password?
              </Link>
            </Stack> */}

            <LoadingButton
              // sx={{ mt:2 }}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {isSubmitting ? "loading..." : "Login"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
