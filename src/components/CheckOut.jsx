import { Box, Button, Checkbox, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Header } from './Header'
import Footer from './Footer'
// import useWindowSize from 'react-use-window-size'
import Confetti from 'react-confetti'
import checkCSS from '../styles/check-out.module.css'
import { useTranslation } from 'react-i18next'
import MyModal from './UI/MyModal/MyModal'

const CheckOut = () => {
    const [selected, setSelected] = React.useState('');
    function handleChange(event) {
        setSelected(event.target.value)
    }

    // //react-confetti
    // const {width, height} = useWindowSize();
    const [run, setRun] = React.useState(false);
    //my modal visibility
    const [canSee, setCanSee] =useState(false)

    const {t} = useTranslation();
    //moving the page to the top
    window.scrollTo({ left: 0, top:0, behavior: "smooth" });
  return (
    <>
        <Header/>
        <div className={checkCSS['check-out-division']}>
            <h1>{t('checkout')}</h1>
                <Box sx={{mt:'20px', mb:'30px', width:'100%',height:'56px', backgroundColor:"#BCDAF5", 
                    display:'flex', justifyContent:'left', alignItems:'center', borderRadius:'5px'}}
                >
                    <Typography sx={{
                        fontSize:'24px', fontWeight:'400', color:'#232323', paddingLeft:'99px'
                        }}>
                        {t('contact-info')}
                    </Typography>
                </Box>
                <Stack direction={'row'} sx={{justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='f-name'>{t('first-name')}</label>
                        <input id='f-name' type='text'/>
                    </Stack>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='l-name'>{t('last-name')}</label>
                        <input id='l-name' type='text'/>
                    </Stack>
                </Stack>
                <Stack direction={'row'} sx={{justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='phone'>{t('phone')}</label>
                        <input id='phone' type='tel'/>
                    </Stack>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='email'>{t('email')}</label>
                        <input id='email' type='email' autoComplete={true} required/>
                     </Stack>
                 </Stack>

                <Box sx={{mt:'80px', mb:'30px', width:'100%',height:'56px', backgroundColor:"#BCDAF5", 
                    display:'flex', justifyContent:'left', alignItems:'center', borderRadius:'5px'}}
                    >
                    <Typography sx={{
                        fontSize:'24px', fontWeight:'400', color:'#232323', paddingLeft:'99px'
                        }}>
                        {t('delivery')}
                    </Typography>
                </Box>
                <Stack direction={'row'} sx={{justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='d-date'>{t('delivery-date')}</label>
                        <input id='d-date' type='date'/>
                    </Stack>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='time'>{t('convenient-time')}</label>
                        <input id='time' type='time'/>
                    </Stack>
                </Stack>
                <Stack direction={'row'} sx={{justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='city'>{t('city')}</label>
                        <input id='city' type='text'/>
                    </Stack>
                    <Stack direction={'column'} sx={{color:'#606060'}}>
                        <label for='address'>{t('address')}</label>
                        <input id='address' type='text'/>
                    </Stack>
                 </Stack>

                <Box sx={{mt:'80px', mb:'30px', width:'100%',height:'56px', backgroundColor:"#BCDAF5", 
                    display:'flex', justifyContent:'left', alignItems:'center', borderRadius:'5px'}}
                >
                    <Typography sx={{
                        fontSize:'24px', fontWeight:'400', color:'#232323', paddingLeft:'99px'
                        }}>
                        {t('payment')}
                    </Typography>
                </Box>
                <Stack direction={'row'} sx={{flexWrap:'wrap', justifyContent:'space-around', margin:'33px 0 44px'}}>
                    <Stack direction={'row'} sx={{flexWrap:'wrap', alignItems:'center'}}>
                        <Checkbox checked={selected === 'cash'}
                                    onChange={handleChange}
                                    inputProps={{'aria-label':'controlled'}}
                                    name='checkbox-group'
                                    value={'cash'}
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                          fontSize: 68,
                                        }
                                    }}  
                        />
                        <div>
                            <Typography variant='h5' sx={{fontSize:'24px', fontWeight:'600', color:'#1400E1'}}>{t('cash')}</Typography>
                            <Typography variant='p' sx={{fontSize:'21px', fontWeight:'400', color:'#606060'}}>{t('cash-feedback')}</Typography>
                        </div>
                    </Stack>
                    <Stack direction={'row'} sx={{flexWrap:'wrap', alignItems:'center'}}>
                        <Checkbox checked={selected === 'terminal'}
                                    onChange={handleChange}
                                    inputProps={{'aria-label':'controlled'}}
                                    name='checkbox-group'
                                    value={'terminal'}
                                    // size='large'
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                        fontSize: 68,
                                    }
                                    }}
                        />
                        <div>
                            <Typography variant='h5' sx={{fontSize:'24px', fontWeight:'600', color:'#1400E1'}}>
                            {t('payment')}
                            </Typography>
                            <Typography variant='p' sx={{fontSize:'21px', fontWeight:'400', color:'#606060'}}>
                            {t('payment-feedback')}
                            </Typography>
                        </div>
                    </Stack>
                </Stack>


                <Button variant='contained' 
                        sx={{width:'399px', fontSize:'24px', padding:'13px 33px'}}
                        onClick={()=> {setCanSee(!canSee); setRun(true)}}
                >
                    {t('order')}
                </Button>
                <MyModal visible={canSee}>{t('received-order')}</MyModal>
                {run && (<Confetti width={1533} height={1999}
                    recycle={true}
                    numberOfPieces={1999}
                    onConfettiComplete={()=> setRun(false)}
                    tweenDuration={5}
                    />)}
        </div>
        <Footer/>
    </>
  )
}

export default CheckOut