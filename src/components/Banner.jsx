import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import cl from './Banner.module.css'
import { useTranslation } from 'react-i18next'

const Banner = () => {/**fixed prop. The max-width matches the min-width of the current breakpoint.
                      fluid container width is bounded by the maxWidth prop value. 
                    */
  const {t} = useTranslation();
  return (
    <Container maxWidth sx={{backgroundColor: '#BCDAF5', height:{xs:'153px', md:'333px', lg:'433px'}}} className={cl.marginProps}>
      <Stack direction={'row'}
          sx={{justifyContent:'center', alignItems:'center'}}>
        <Box
          component={'img'} sx={{width:{ xs: "64px", md: "194px", lg: '264px'}, height:{ xs: "88px", md: "288px", lg: '388px'}}}
          src='Images/5 Deals/Robots 1.png'
        />
        <Typography variant='h2' sx={{fontSize: { xs: "29px", md: "32px", lg: '42px'}, fontWeight: 600, width:{ xs: "465px", md: "565px", lg: '665px'}, height:'110px'}}>
            {t('banner1')} <span className={cl.bannerColor}>10%</span>
            {t('banner2')} <span className={cl.bannerColor}>{t('banner-span')}</span>
        </Typography>
      </Stack>
    </Container>
  )
}

export default Banner