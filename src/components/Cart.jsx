import React from 'react'
import Box from '@mui/material/Box';
import { Button, Stack, Typography } from '@mui/material';
import Footer from './Footer';
import CartItem from './UI/CartItem';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import '../styles/App.css'

const Cart = () => {
    const navigate = useNavigate()
    const changePage = (path) => {
        navigate(path)
    }
    const {t} = useTranslation();
  return (
    <>
        <div className='cart-division'>
            <h1>{t('cart')} <Button variant='contained'>{t('clear-cart')}</Button>  </h1>
            <Box sx={{mt:'20px', mb:'30px', width:'100%',height:'56px', backgroundColor:"#BCDAF5", 
                display:'flex', justifyContent:'space-around', alignItems:'center', borderRadius:'5px'}}
            >
                <Typography sx={{fontSize:'22px', fontWeight:'400', color:'#232323'}}>
                {t('product')}
                </Typography>
                <Typography sx={{fontSize:'22px', fontWeight:'400', color:'#232323'}}>
                {t('price')}
                </Typography>
                <Typography sx={{fontSize:'22px', fontWeight:'400', color:'#232323'}}>
                {t('quantity')}
                </Typography>
                <Typography sx={{fontSize:'22px', fontWeight:'400', color:'#232323'}}>
                {t('subtotal')}
                </Typography>
            </Box>
            {/*Cart items should be here*/}
            <CartItem/>
            <CartItem/>
            <CartItem/>

            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', 
                    padding:'20px', mt:'50px', width:'320px', height:'300px', backgroundColor:'#BCDAF5', 
                    borderRadius:'9px', margin:'0 65px 222px auto'}}
            >
                <Typography variant='h2' sx={{fontSize:'20px', fontWeight:'600'}}>My cart</Typography>
                <hr/>

                <Stack direction={'row'} 
                    sx={{color: 'black', justifyContent:'space-between', alignItems:'center', padding:'45px 30px 10px' }}
                >
                    <Typography sx={{fontSize:'16px',fontWeight:'600'}}>{t('items')}</Typography>
                    <Typography sx={{fontSize:'16px',fontWeight:'600'}}>3</Typography>
                </Stack>
                <Stack direction={'row'} 
                    sx={{color:'black', justifyContent:'space-between', alignItems:'center', padding:'10px 30px'}}
                >
                    <Typography sx={{fontSize:'16px', fontWeight:'600'}}>{t('shipping-cost')}</Typography>
                    <Typography sx={{fontSize:'16px', fontWeight:'600'}}>{t('free')}</Typography>
                </Stack>
                <Stack direction={'row'}
                    sx={{color:'black', justifyContent:'space-between', alignItems:'center', margin:'35px 30px 19px',
                        borderTop:'#05003D 1px solid', borderBottom:'#05003D 1px solid'}}
                >
                    <Typography sx={{fontSize:'20px', fontWeight:'600'}}>{t('total')}</Typography>
                    <Typography sx={{color:'#1400E1',fontSize:'20px', fontWeight:'600'}}>$2.300</Typography>
                </Stack>
                
                <Button variant='contained' sx={{margin:'0 auto'}} onClick={()=>changePage('/check-out')}>{t('checkout')}</Button>
            </Box>
        </div>
        <Footer/>
    </>
  )
}

export default Cart