import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../Redux/UserSlice";

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

export default function SignUp() {
  const [userData, setUserData] = useState({
    id: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "2000-12-04T00:00:00.000Z",
  });
  const [tzError, setTzError] = useState({ err: false, msg: "" });
  const user=useSelector((state=>state.user.user))

  const dispatch= useDispatch();
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user Data...", userData);
    axios
      .post(`http://localhost:1234/api/usersController/addNewUser`, userData )
      .then((res) => {
        setTzError({ err: false, msg: "" });
        dispatch(logIn(res.data));
        navigate('../HomePage',{ replace: true })

      })
      .catch((error) => {
        console.log("error😁", error);
        if (error.response.status === 400) {
          const message = error.response.data;
          setTzError({ err: true, msg: message });
        }
      });
  };

  React.useEffect( () => {
    console.log("userrr😝",user)
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            הרשמה
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="שם פרטי"
                  autoFocus
                  value={userData.firstName}
                  onChange={(e) =>
                    setUserData({ ...userData, firstName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="lastName"
                  label="שם משפחה"
                  name="lastName"
                  autoComplete="family-name"
                  value={userData.lastName}
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  helperText="תאריך לידה"
                  size="small"
                  required
                  fullWidth
                  id="dateOfBirth"
                  // label="תאריך לידה"
                  name="dateOfBirth"
                  autoComplete="date-of-birth"
                  type="date"
                  value={userData.dateOfBirth}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      dateOfBirth: "2000-12-04T00:00:00.000Z",
                    })
                  }
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="email"
                  label="מייל"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="phone"
                  label="טלפון"
                  type="tel"
                  id="phone"
                  autoComplete="phone"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="id"
                  label="תעודת זהות"
                  type="text"
                  id="id"
                  autoComplete="id"
                  value={userData.id}
                  onChange={(e) =>
                    setUserData({ ...userData, id: e.target.value })
                  }
                  error={tzError.err}
                  helperText={tzError.msg}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="סיסמה"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הרשמה
            </Button>
            <Grid container>
              <Grid item>
                <Link to={window.location.origin} variant="body2">
                  משתמש רשום? התחברות
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
