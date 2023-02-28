import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import singInPic from "../pics/singInPic.jpg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [tz, setTz] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [tzError, setTzError] = useState({ err: false, msg: "" });
  const [passwordError, setPasswordError] = useState({ err: false, msg: "" });

  // const getData = async (url) => {
  //   const { data } = await axios.get(url);
  //   console.log(data);
  // };

  // useEffect(async () => {
  //   const url = "http://localhost:1234/api/machinesController/getAllMachines";
  //   getData(url);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //send to function fromm backend that meneges login
    axios.get(`http://localhost:1234/api/usersController/logIn/${tz}/${password}`)
      .then((res) => {
        setUser(res.data);
        setTzError({ err: false, msg: "" })
        setPasswordError({ err: false, msg: "" })
        console.log(user);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          const message=error.response.data;
          if (message == "User does not exist") {
             setPasswordError({ err: false, msg: "" })
            setTzError({ err: true, msg: message });
          } else {
            setTzError({ err: false, msg: "" })
            setPasswordError({ err: true, msg:message });
            
          }
        }
      });

    // const res = await axios.get(
    //   `http://localhost:1234/api/usersController/logIn/${tz}/${password}`
    // );
    // console.log("myres:", res);
    // if (res.status == 200) {
    //   setUser(res.data);
    //   console.log(user);
    // } else {
    //   if (res.message == "User does not exist") {
    //     setTzError({ err: true, msg: res.message });
    //   } else {
    //     setPasswordError({ err: true, msg: res.message });
    //   }
    // }
  };

  // useEffect(() => {
  //   console.log("password 😍", password);
  //   console.log("tz 🙌", tz);
  // }, [password, tz]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          component={Paper}
          elevation={6}
          square
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${singInPic})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              התחברות
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="tz"
                label="תעודת זהות"
                name="tz"
                autoComplete="tz"
                autoFocus
                onChange={(e) => setTz(e.target.value)}
                value={tz}
                error={tzError.err}
                helperText={tzError.msg}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="סיסמה"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={passwordError.err}
                helperText={passwordError.msg}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                התחברות
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    התחברות כמנהל
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"אין לך חשבון? הרשמה"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
