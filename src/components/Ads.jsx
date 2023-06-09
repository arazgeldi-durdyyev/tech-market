import React, { useState } from 'react';
import {Paper, createTheme, ThemeProvider} from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
      mode: "dark",
      primary: {
          light: "#757ce8",
          main: "#3f50b5",
          dark: "#002884",
          contrastText: "#fff",
      },
      secondary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#ba000d",
          contrastText: "#000"
      },
  }
});

const themeLight = createTheme({
  palette: { //palette object
      mode: "light",
      primary: {
          light: "#757ce8",
          main: "#3f50b5",
          dark: "#002884", //try giving #000 
          contrastText: "#fff",
      },
      secondary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#ba000d",
          contrastText: "#000"
      },
  },
});

const Ads = () => {

  const [isLight, setIsLight] = useState(true);

  return (
    <ThemeProvider theme={isLight ? themeLight : theme}>
      <Paper elevation={3}>
        <Stack sx={{
          justifyContent:'space-around', alignItems: 'center', padding:'13px 0', flexWrap:'wrap'
          }} flexDirection={'row'} spacing={0}>
          <Box component={'img'} sx={{height: 233, width: 550, maxHeight: {xs: 233, md: 167}, maxWidth:{xs: 350, md: 450},}}
            alt='Ado image'
            src='Images/4 reklama/Group 15.png'
          />
          <Box component={'img'} sx={{height: 233, width: 550, maxHeight: {xs: 233, md: 167}, maxWidth:{xs:350, md: 450},}}
            alt='Ado Image'
            src='Images/4 reklama/Group 17.png'
          />
        </Stack>
      </Paper>
    </ThemeProvider>
  )
}

export default Ads