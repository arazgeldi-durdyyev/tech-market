import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { smartphones } from '../../API/Products/smartphones.mjs';
import { computers } from '../../API/Products/computers.mjs';
import { watches } from '../../API/Products/watches.mjs'
// import { dealProducts } from '../Deals';
import { useTranslation } from 'react-i18next';
import { dealsAPI } from '../../API/Products/headphones.mjs';

const mergedItems = smartphones.concat(dealsAPI, computers, watches)

const FeedbackCard = () => {
    const {t} = useTranslation();
    console.log(smartphones)

    const {productId} = useParams();
    console.log(productId)
    let thisProduct = mergedItems.find(prod => prod["id"] == productId)


  return (
    <div className='feedback-card-division'>
        <h1>{thisProduct.title}</h1>
        <Card variant='elevation' elevation={9} sx={{
            margin:'12px',mb:'155px', borderRadius:'9px', backgroundColor:'cornsilk'
        }}>
            <CardContent sx={{width:'100%'}}>
                <Stack direction={'row'} sx={{
                    justifyContent:'space-around',
                    alignItems:'center', flexWrap:'wrap'
                }}>
                    <Box component={'img'} sx={{
                        width:'270px', height:'300px',objectFit:'contain'
                        }}
                        src={thisProduct.image}
                        title='Loomo'
                    />
                    <Stack direction={'column'} sx={{
                        justifyContent:'center', alignItems:'center', flexWrap:'wrap', width:'50%'
                    }}>
                        <Typography sx={{
                            fontSize:'24px', fontWeight:600, marginBottom:'23px'
                        }}>
                            {thisProduct.product_name} {thisProduct.make}
                        </Typography>
                        <Typography sx={{
                            fontSize:'24px', fontWeight:400,
                        }}>
                            {thisProduct.specification? 
                            <div>
                                {thisProduct.specification.CPU} <br/>
                                <span style={{fontWeight:600}}>{t('memory')}:</span><span style={{color:'red'}}>HDD:</span> {thisProduct.specification.HDD} <em style={{color:'darkblue'}}>SSD: {thisProduct.specification.SSD}</em> <br/>
                                <span style={{fontWeight:600}}>   {t('os')}:</span> {thisProduct.specification.motherboard} <br/>
                                <span style={{fontWeight:600}}>   {t('ram')}:</span> {thisProduct.specification.ram} <br/>
                                <span style={{fontWeight:600}}> Cooling: </span> {thisProduct.specification.coolingSystem}<br/>
                                <span style={{fontWeight:600}}>   {t('price')}:</span> ${thisProduct.price}
                            </div>
                            : 
                            <div>
                                <span style={{fontWeight:600}}>{t('memory')}:</span> {thisProduct.memory}<br/>
                                <span style={{fontWeight:600}}>   {t('os')}:</span> {thisProduct.os} <br/>
                                <span style={{fontWeight:600}}>   {t('ram')}:</span> {thisProduct.ram} <br/>
                                <span style={{fontWeight:600}}>   {t('wireless')}:</span> {thisProduct.wn}<br/>
                                <span style={{fontWeight:600}}>   {t('price')}:</span> ${thisProduct.price}
                            </div>
                            }
                        </Typography>
                    </Stack>
                    
                </Stack>
            </CardContent>
        </Card>
        <h1>{t('feedback')}</h1>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default FeedbackCard