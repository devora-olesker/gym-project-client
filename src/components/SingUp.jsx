

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        הרשמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='small'
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="שם פרטי"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="שם משפחה"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} >

                                <TextField
                                    helperText="תאריך לידה"
                                    size='small'
                                    required
                                    fullWidth
                                    id="dateOfBirth"
                                    // label="תאריך לידה"
                                    name="dateOfBirth"
                                    autoComplete="date-of-birth"
                                    type='date'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    id="email"
                                    label="מייל"
                                    name="email"
                                    autoComplete="email"
                                    type='email'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    name="phone"
                                    label="טלפון"
                                    type="tel"
                                    id="phone"
                                    autoComplete="phone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    name="ID"
                                    label="תעודת זהות"
                                    type="text"
                                    id="ID"
                                    autoComplete="id"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    name="password"
                                    label="סיסמה"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
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
                        <Grid container >
                            <Grid item>
                                <Link href="#" variant="body2">
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
