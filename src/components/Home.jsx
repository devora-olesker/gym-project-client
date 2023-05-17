import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useState } from 'react';
import { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import BarChart from './BarChart';
import { margin } from '@mui/system';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function Home() {
    const currentUser=useSelector(state=>state.user.user)
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({})


    useEffect(() => {
        //לעשות קריאת שרת פה ולמלאות את chartdata בנתונים אמיתיים
        setChartData({
            labels: ['2/9', '10/9', '12/9', '15/9'],
            datasets: [
                {
                    lable: 'כמות זמן',
                    data: [20, 60, 40, 120]
                }
            ]
        })
        setChartOptions({
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "כמות הזמן בדקות"
                }
            }
        })
    }, []);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       { `שלום ${currentUser.firstName}`}
                    </Typography>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>עדכון פרטי חשבון</MenuItem>
                            <MenuItem onClick={handleClose}>יציאה</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
            <Grid2 container spacing={2}>
                <Grid2 xs={6}>
                    <Box sx={{margin: '25px'}}>                   
                         <BarChart chartData={chartData} chartOptions={chartOptions}></BarChart>
                    </Box>
                </Grid2>


            </Grid2>

        </Box >



    );
}
