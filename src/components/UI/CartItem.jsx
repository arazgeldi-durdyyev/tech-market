import { Button, Card, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react'

const clearSX = {
    '&:hover': {
        borderRadius: '50%',
        border: '3px solid',
        borderColor: 'crimson',
        boxShadow: 'none'
    },
    position:'absolute', 
    right:'33px', top:'23px',
    border:'2px solid grey', borderRadius:'50%', boxShadow:'inset 2px 2px', 
}

const CartItem = () => {
    const [itemNumber, setItemNumber] = React.useState(1);
  return (
    <div>
        <Card variant='elevation' sx={{borderRadius:'11px', margin:'10px 0'}} elevation={9}>
            <CardContent sx={{position:'relative', width:'100%', height:'265px', backgroundColor:'x#F5F5F5', padding:1}}>
                <Typography 
                    sx={{color:"#05003D", fontSize:'20px',fontWeight:'600',margin:'9px 20px'}} 
                    variant='h3' gutterBottom
                >
                    Airpods Pro
                </Typography>

                <Stack flexDirection={'row'} sx={{justifyContent:'space-around', alignItems:'center'}}>
                    <CardMedia
                        component={'img'}
                        sx={{width:'130px', height:'130px', objectFit:'contain'}}
                        image='Images/6 Consumer/pods 1.png'
                        title='airpods'
                    />
                    <Typography sx={{fontSize:'20px',fontWeight:600, mr:'30px', pl:'65px'}}>$200</Typography>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center',
                                 marginRight:'50px', paddingLeft:'50px'}}>
                        <Stack direction={'row'} 
                               sx={{alignItems:'center', 
                               border:'3px solid blue', 
                               borderRadius:'9px',
                               borderColor:'#BCDAF5'}}>
                            <Button variant='outlined' sx={{fontSize:'20px',borderRadius:'9px',
                            }} onClick={()=> itemNumber > 0 ? setItemNumber(itemNumber - 1) : null}>
                                -
                            </Button>
                            <Typography variant='h5' sx={{fontSize:'20px', margin:'0 21px'}}>{itemNumber}</Typography>
                            <Button variant='outlined' onClick={()=> setItemNumber(itemNumber + 1)}
                                sx={{fontSize:'20px',borderRadius:'9px'}}>
                                    +
                            </Button>
                        </Stack>
                    </div>
                    <Typography sx={{fontSize:'20px',fontWeight:600, mr:'50px'}}>$200</Typography>
                </Stack>
                <IconButton aria-label='Clear'
                // className={cl.clearButton}
                    sx={clearSX}
                    
                    >
                    <ClearIcon color='warning'/>
                    
                </IconButton>
            </CardContent>
        </Card>
    </div>
  )
}

export default CartItem