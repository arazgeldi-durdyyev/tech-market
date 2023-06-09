import React from 'react'
import Footer from './Footer'
import { Header } from './Header'
import { useTranslation } from 'react-i18next'

import { exportedFavourites } from './ConsumerElectronics'
//import all products;
import { smartphones } from '../API/Products/smartphones.mjs'
import { computers } from '../API/Products/computers.mjs'
import { watches } from '../API/Products/watches.mjs'
import ProductCardConsumer from './UI/ProductCardConsumer'
import { dealsAPI } from '../API/Products/headphones.mjs'

const totalProdFavourites = [].concat(dealsAPI,smartphones, computers, watches) 

const Favourites = () => {

  const {t} = useTranslation()
  return (
    <>
        <Header/>
        <div className='favourites-division'>
            <h1>{t('favourites')}</h1>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
              {                
                totalProdFavourites.map(each => {
                  for (let i of exportedFavourites) {
              
                    if (each.id == i){
                      return <ProductCardConsumer removeFav={console.log} click={console.log} key={i} productData={each}/>
                    }
                  }
                })
              }
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Favourites