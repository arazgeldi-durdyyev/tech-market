import React from 'react';
import Container from '@mui/material/Container';
import { Box, Button, Stack, Typography } from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {//You can use useLocation() hook to check the route path
                      // in the <Footer /> component and based on the pathname 
                      //you can render the <Footer /> component.
  const {pathname} = useLocation();
  console.log(pathname)
  // you can check a more conditions here
  // if (pathname === "/sign-in" || pathname === "/sign-up") return null;
  const {t} = useTranslation();

  return (
    <Container disableGutters maxWidth='xl' 
        sx={{ backgroundColor:'#BCDAF5', marginTop:'199px'}} className='footer'
    >
      <Stack className='stack-breakpoint' direction={'row'} sx={{
            justifyContent:'space-around', alignItems:'center', paddingTop:'69px', flexWrap:'wrap'
            }}>
        <div>
          <img className='tech-logo' src="/Images/1 Header/logo.png" alt="TECH Market logo" />
          <Typography variant='subtitle1' sx={{width: 358, fontWeight:600, fontSize:16, marginTop:'13px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque temporibus assumenda itaque ex asperiores est necessitatibus aliquam corporis.
            Nulla autem itaque dignissimos, rerum, veritatis sequi repudiandae facere dolor,
            nihil praesentium error totam consequuntur.
          </Typography>
        </div>
        <Stack>
          <Typography sx={{fontSize:30}}>{t('communication')}</Typography>
          <div className='flexContent'>
            <div className='contact-icon'> 
              <CallOutlinedIcon sx={{fontSize:35}}/>
            </div>
            <Box sx={{fontSize: 16, fontWeight: 400, marginLeft:'10px'}}>
              <Typography sx={{textTransform:'capitalize'}}>{t('drop-a-line')}</Typography>
              <Typography sx={{textTransform:'capitalize', fontWeight:600}}>+99361-01-01</Typography>
            </Box>
          </div>
          <div className='flexContent'>
            <div className='contact-icon'>
              <MailOutlinedIcon sx={{fontSize:35}}/>
            </div>
            <Box sx={{fontSize: 16, fontWeight: 400, marginLeft:'10px'}}>
              <Typography sx={{textTransform:'capitalize'}}>{t('email')}</Typography>
              <Typography sx={{textTransform:'lowercase', fontWeight:600}}>techmarket@gmail.com</Typography>
            </Box>
          </div>
          <div className='flexContent'>
            <div className='contact-icon'>
              <LocationOnOutlinedIcon sx={{fontSize:35}}/>
            </div>
              <Box sx={{fontSize: 16, fontWeight: 400, marginLeft:'10px'}}>
                <Typography sx={{textTransform:'capitalize'}}>{t('store')}</Typography>
                <Typography sx={{textTransform:'capitalize', fontWeight: 600}}>parahat 7/4</Typography>
              </Box>
          </div>
        </Stack>
      </Stack>
      
      <Typography variant='h3' 
        sx={{
          textAlign:'center',
            fontSize:20, fontWeight:400,
            backgroundColor:'white',
            textTransform:'capitalize',
            marginTop:'25px',
            padding:'12px'
          }}>
            <Stack direction={'row'} sx={{flexWrap:'wrap', justifyContent: 'center', alignItems:'center'}}>
              <Button sx={{margin:'9px'}} variant='outlined'><YouTubeIcon/></Button>
              <Button sx={{margin:'9px'}} variant='outlined'><InstagramIcon/></Button>
              <Button sx={{margin:'9px'}} variant='outlined'><FacebookIcon/></Button>
              <Button sx={{margin:'9px'}} variant='outlined'><LinkedInIcon/></Button>
            </Stack>
            copyright <span style={{fontWeight:600}}>&copy;</span> {new Date().getFullYear()} tech market.
            <Typography component={'span'} sx={{fontWeight:600, fontSize:'20px', textTransform:'none'}}> {t('rights')}</Typography>
      </Typography>
    </Container>
  )
}

export default Footer