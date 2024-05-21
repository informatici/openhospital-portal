import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { DefaultAllData } from '../datajs/DefaultAllData'

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




  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      // .username("Provide a valid email address")
      .required("User is required"),
    password: Yup.string().required("Password is required"),
  });
  let amb = "";
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");

      const data = [
        {
          username: values.username,
          password: values.password,
        },
      ];


      DeafutlAllData.postLogin(values.username, values.password).then((res) => {

        localStorage.setItem("Token", res);

        if (res.error == "Unauthorized") {
          setProfile("Unauthorized");
          amb = "Unauthorized";
          setAuth(false);
        } else {
          if (res.roles[0] == "ROLE_PATIENT") {
            setProfile("Patient");
            amb = "Patient";
            setAuth(true);
          }
          if (res.roles[0] == "ROLE_DOCTOR") {
            setProfile("Doctor");
            amb = "Doctor";
            setAuth(true);
          }
        }
        localStorage.clear();
        localStorage.setItem("IdPatient", res.patientId);
        localStorage.setItem("typeVisualization", "patient");

      });

      setTimeout(() => {

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
              type="text"
              label="Username"
              {...getFieldProps("username")}
              error={Boolean(touched.username && errors.username)}
              helperText={touched.username && errors.username}
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

            <LoadingButton
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
