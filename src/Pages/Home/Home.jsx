import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Stack } from '@mui/material';
import firstSection from '../../assets/firstSection.png';
import bg2 from '../../assets/bg2.png';
import AboutUs from '../../components/Home/AboutUs/AboutUs';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../utils/theme';
import Business from '../../components/Home/Business/Business';
import Platform from '../../components/Home/Platform/Platform';
import Overview from '../../components/Home/Overview/Overview';
import Process from '../../components/Home/Process/ProcessContainer/Process';
import Users from '../../components/Home/Users/Users';

export default function Home() {


  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        sx={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}
      >
        <Stack sx={{
          backgroundImage: `url(${firstSection})`, backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center"
        }}>
          <Navbar />
          <AboutUs />
        </Stack>
        <Stack sx={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "center"
        }}>
          <Business />
          <Platform />
          <Overview />
        </Stack>
        <Process />
        <Users />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}