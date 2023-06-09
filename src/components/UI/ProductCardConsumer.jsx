import React from 'react';
import {Card, CardMedia, Stack, Typography} from '@mui/material';

import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppContext } from '../../App';
import HalfRating from './HalfRating';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductCardConsumer = ({productData, click, removeFav}) => {
    const { id, product_name, image,title, price } = productData
    // const [favourite, setFavourites] = React.useContext(AppContext)

    //adding to favourites starts
    const [favActive, setFavActive] = useState(false)
    //adding to favourites ends

    const navigate = useNavigate();
    const changePage = (path) => {
        navigate(path);
    }
    // const handleHeartClick=(productItem)=>{
    //     // let copyFavourites=[...favourites]
    //     // copyFavourites.push(productItem)
    //     // setFavourites(copyFavourites)
    // }
  return (
    <div>
        <Card variant="elevation" sx={{margin:'12px',transition: '.7s ease',
                "&:hover": {
                    transform: 'scale(1.1)'
                }}} elevation={9}>
            <CardContent sx={{position:'relative', 
                width: 285, height: 435, 
                padding: 1,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around'
            }}>
                <Stack sx={{justifyContent: 'space-between', alignItems:'center'}} flexDirection={'row'}>
                    <Typography sx={{fontSize: 20, fontWeight:600}} variant='h5' color={'#05003D'} gutterBottom>
                        {product_name}
                    </Typography>
                    <IconButton
                     onClick={ ()=> {favActive ? removeFav(id) : click(id); setFavActive(!favActive)} }
                      style={{ 
                        position: "absolute", top:'43px', right:'17px', zIndex:1000 
                        }} aria-label='Favorite'
                    >
                        {favActive ? <FavoriteIcon color='error'/> : <FavoriteBorderIcon color='primary'/>}
                    </IconButton>
                </Stack>
                    <IconButton  aria-label='Shopping-cart' sx={{position: 'absolute', right: '9px'}}>
                        <ShoppingCartOutlinedIcon color='dark'/>
                    </IconButton>
                {/* <Link to */}
                    <CardMedia 
                        component={'img'}
                        sx={{width:143, height: 230, 
                            cursor:'pointer',
                            padding: '28px 3px', 
                            margin:'0 auto',
                            objectFit:'contain'}}
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
            </CardContent>
        </Card>
    </div>
  )
}

export default ProductCardConsumer