import { Stack } from '@mui/material'
import React, { useState } from 'react'
import ProductCard from './UI/ProductCard'
import Banner from './Banner'
import { useTranslation } from 'react-i18next'
import { exportedFavourites } from './ConsumerElectronics'
import { dealsAPI } from '../API/Products/headphones.mjs'

// export const dealProducts = [{
//   "id": 31,
//   "order": 1,
//   "product_name": 'Galaxy S23',
//   "make": "Samsung",
//   "memory": "128GB",
//   "os": "Android",
//   "ram": "8GB",
//   "price": 800,
//   "image": '/Images/5 Deals/galaxy-s23.png',
//   "title": "Smartphone",
//   "isNew":false,
//   "wn": '3G, 4G LTE',
// },{
//   "id": 32,
//   "order": 1,
//   "product_name": 'Apple watch series 8',
//   "make": "Apple",
//   "memory": "32GB",
//   "os": "iOS",
//   "ram": "8GB",
//   "price": 750,
//   "image": '/Images/5 Deals/apple-watch.png',
//   "title": "Watch",
//   "isNew":false,
//   "wn": '3G, 4G LTE',
// },{
//   "id": 33,
//   "order": 1,
//   "product_name": 'Galaxy Tab S8+ 5G' ,
//   "make": "Samsung",
//   "memory": "128GB",
//   "os": "Android",
//   "ram": "8GB",
//   "price": 650,
//   "image": '/Images/5 Deals/Galaxy Tab S8.png',
//   "title": "Tablet",
//   "isNew":false,
//   "wn": '3G, 4G LTE',
// },{
//   "id": 34,
//   "order": 1,
//   "product_name": 'iPhone 13 Pro Max' ,
//   "make": "Apple",
//   "memory": "256GB",
//   "os": "iOS",
//   "ram": "8GB",
//   "price": 650,
//   "image": '/Images/5 Deals/iPhone 13 Pro Max.png',
//   "title": "Smartphone",
//   "isNew":false,
//   "wn": '3G, 4G LTE',
// }
// ]

const Deals = () => {
  //adding favourites
  const [favourite, setFavourites] = useState([])
  const addToFavourite = id => {
    if(!favourite.includes(id)) {
        setFavourites(favourite.concat(id));
        exportedFavourites.push(id)
  }}
  //adding favourites ends
  const {t} = useTranslation();
  return (
    <div>
      <div className="deals-division">        
        <h1 className='deals-heading'>{t('deals-of-the-day')}</h1>
        <Stack direction={'row'} spacing={3} sx={{flexWrap:'wrap', justifyContent:'space-around', alignItems:'center'}}>
           {dealsAPI.map(item => <ProductCard click={addToFavourite} key={item.id} productData={item}/>)}
        </Stack>
      </div>

      <Banner/>
    </div>
  )
}

export default Deals;