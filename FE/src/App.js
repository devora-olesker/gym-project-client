import logo from './logo.svg';
import './App.css';
import SignIn from './components/SingIn';
import SignUp from './components/SingUp';
import Home from './components/Home';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
function App() {

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const theme = createTheme({
    direction: 'rtl',
  });
  return (
    <>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>

        {/* <Home></Home> */}
        {/* <SignUp></SignUp> */}
        <SignIn></SignIn>

      </ThemeProvider>
      </CacheProvider>
      
    </>
  );
}

export default App;
