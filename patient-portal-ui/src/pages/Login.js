import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import SocialAuth from "../components/SocialAuth";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import HelpDevLogin from "../components/modals/HelpDevLogin";
//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ setAuth, setProfile }) => {
  console.log("Login");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://api.plos.org/search?q=title:DNA')
      .then((response) => response.json())
      .then((data) => {
        console.log("test out");
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            {/* <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login to your account
            </Typography> */}
          </HeadingStyle>

          {/* <Box component={motion.div} {...fadeInUp}>
            <SocialAuth />
          </Box> */}

          {/* <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider> */}

          <LoginForm  setAuth={setAuth} setProfile={setProfile} />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
            You don't remember the password? {" "}
            {/* Don’t have an account?{" "} */}
            {/* <Link variant="subtitle2" component={RouterLink} to="/signup">
              Sign up
            </Link> */}
            <Link variant="subtitle2" component={RouterLink} to="/resetPassword">
              Reset
            </Link>
          </Typography>
          <HelpDevLogin />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
