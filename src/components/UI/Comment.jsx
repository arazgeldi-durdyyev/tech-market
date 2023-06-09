import React from 'react'
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { deepOrange } from '@mui/material/colors';
import { Card, CardContent, IconButton, Rating, Stack, Typography } from '@mui/material'

const Comment = () => {
  return (
    <Card variant='elevation' elevation={9} sx={{
        margin:'12px', borderRadius:'9px', backgroundColor:'cornsilk',
        }}>
            <CardContent>
                <Stack direction={'row'} sx={{flexWrap:'wrap', justifyContent:'space-around'}}>
                    <Stack direction={'row'} sx={{justifyContent:'center', alignItems:'center'}}>
                        <Avatar sx={{bgcolor: deepOrange[500]}}
                            alt='Remy Sharp'
                            src='broken-image.jpg'
                        />
                        <Stack direction={'column'} sx={{ alignItems:'center'}}>
                            <Typography sx={{fontSize:'15px'}}>Robert Fox</Typography>
                            <Rating name='feedback-rating' defaultValue={2.5} precision={0.5}/>
                        </Stack>
                    </Stack>
                    <Typography sx={{fontSize:'16px', width:'50%'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime commodi adipisci cupiditate tempora dignissimos consectetur porro aliquam aliquid, et vitae. Nostrum distinctio incidunt soluta! 
                        Laboriosam officiis consequatur sunt provident quibusdam vitae, velit sint?
                    </Typography>
                    <IconButton><ThumbUpIcon color='primary'/></IconButton>
                </Stack>
            </CardContent>
        </Card>
  )
}

export default Comment