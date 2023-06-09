import React from 'react';
import {Card, CardMedia, Stack, Typography} from '@mui/material';

import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HalfRating from './HalfRating';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductCard = ({click, productData}) => {//how to give more radius to the edges
    const { id, product_name, image,title, price, memory, os, ram, wn } = productData
    const navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }

    const {t} = useTranslation();
  return (
    <div>
        <Card variant="elevation" sx={{margin:'9px 0',padding:'0px', borderRadius:'23px',transition: '.7s ease',
                "&:hover": {
                    transform: 'scale(1.1)'
                }}} elevation={9}>
            <CardContent sx={{position:'relative', 
                        width: 285,
                        height: 435,
                        padding: '5px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center'}}
            >
                <Stack sx={{justifyContent: 'space-between', alignItems:'center'}} flexDirection={'row'}>
                    <Typography sx={{fontSize: 20, fontWeight:600}} variant='h5' color={'#05003D'} gutterBottom>
                        {product_name}
                    </Typography>
                    <IconButton onClick={()=>click(id)} aria-label='Favorite'>
                        <FavoriteBorderIcon color='primary'/>
                    </IconButton>
                </Stack>
                    <IconButton aria-label='Shopping-cart' sx={{position: 'absolute', right: '9px'}}>
                        <ShoppingCartOutlinedIcon color='dark'/>
                    </IconButton>
                <CardMedia 
                    component={'img'}
                    sx={{width:123, height: 210, padding: '18px 3px', margin:'0 auto', objectFit:'contain', cursor:'pointer'}}
                    image={image}
                    title={title}
                    onClick={()=> changePage(`/feedback/${id}`)}
                />
                <div style={{margin:'0 auto'}}>

                    <HalfRating/>
                </div>

                <Typography sx={{fontSize: 20, fontWeight: 700, textAlign:'center'}} color={'#1400E1'} gutterBottom>
                    ${price}
                </Typography>
                {/**textAlign:'left' did not work please find out the reason!!!!! */}
                <Stack spacing={0.5}>
                    <Stack direction={'row'} sx={{color: '#05003D', justifyContent:'space-between', padding: '0 9px'}}>
                        <Typography sx={{fontSize: 15, fontWeight: 600}}>{t('memory')}</Typography>
                        <Typography sx={{fontSize: 13, fontWeight: 400, textAlign:'left'}}>{memory}</Typography>
                    </Stack>
                    <Stack direction={'row'} sx={{color: '#05003D', justifyContent:'space-between', padding: '0 9px'}}>
                        <Typography sx={{fontSize: 15, fontWeight: 600}}>{t('os')}</Typography>
                        <Typography sx={{fontSize: 13, fontWeight: 400, textAlign:'left'}}>{os}</Typography>
                    </Stack>
                    <Stack direction={'row'} sx={{color: '#05003D', justifyContent:'space-between', padding: '0 9px'}}>
                        <Typography sx={{fontSize: 15, fontWeight: 600}}>{t('ram')}</Typography>
                        <Typography sx={{fontSize: 13, fontWeight: 400, textAlign:'left'}}>{ram}</Typography>
                    </Stack>
                    <Stack direction={'row'} sx={{color: '#05003D', justifyContent:'space-between', padding: '0 9px'}}>
                        <Typography sx={{fontSize: 15, fontWeight: 600}}>{t('wireless')}</Typography>
                        <Typography sx={{fontSize: 13, fontWeight: 400, textAlign:'left'}}>{wn}</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProductCard