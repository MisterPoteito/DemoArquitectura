import React, { useEffect, useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    const url = `http://localhost:4001/api/v1/usuario/login`;
    axios
      .post(url, { username, password })
      .then((response) => navigate("/servicios"))
      .catch((error) => {
        toast.error("Usuario o password incorrectos.");
        setUsername("");
        setPassword("");
      });
  };

  return (
    <Container>
      <Grid container alignContent="center" sx={{ height: "100vh" }}>
        <Grid item md={12}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={6} sx={{ textAlign: "center" }}>
              <Diversity2Icon sx={{ fontSize: 120, color: "#349beb" }} />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={6} sx={{ textAlign: "center" }}>
              <Typography component="div" variant="button">
                No más accidentes
              </Typography>
              <Typography component="div" variant="h2">
                Bienvenido
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={4} sx={{ textAlign: "center" }}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                fullWidth
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={4} sx={{ textAlign: "center", marginTop: 4 }}>
              <TextField
                id="password"
                label="Password"
                variant="standard"
                inputProps={{ type: "password" }}
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={4} sx={{ textAlign: "center", marginTop: 4 }}>
              <Button
                startIcon={<LoginIcon />}
                variant="outlined"
                fullWidth
                onClick={handleLogIn}
              >
                Ingresar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
