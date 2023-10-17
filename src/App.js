import React, {useState, useEffect} from 'react';
import RaceResult from './components/RaceResult';
import SelectRace from './components/SelectRace';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [raceid, setRaceId] = useState();

  useEffect(() => {
    if(raceid === "undefined"){
        setRaceId("none")
    }
    })


  function setCurrentRaceid(raceId,racename){
    console.log("Setting Race", raceId)
    setRaceId(raceId);
  }
 


  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Hillingdon Triathletes Race Results
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
          Hillingdon Triathletes Race Results
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="bg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBott    om
            >
              Hillingdon Triathletes Race Results for {raceid}
            </Typography>
            <SelectRace changeRace={setCurrentRaceid}></SelectRace>
            <RaceResult key={raceid} raceid={raceid} ></RaceResult>
            
          </Container>
        </Box>
       
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Race Results
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        Hillingdon Triathletes Race Results
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;