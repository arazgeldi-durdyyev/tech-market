import { Rating, Stack } from '@mui/material'
import React from 'react'

const HalfRating = ({...props}) => {
  return (
    <Stack spacing={1}>
        <Rating {...props} name='half-rating' defaultValue={2.5} precision={0.5}/>
    </Stack>
  )
}

export default HalfRating