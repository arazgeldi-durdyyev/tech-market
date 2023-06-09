import React from 'react'
import Catalog from './Catalog'
import Deals from './Deals'
import Ads from './Ads'
import ConsumerElectronics from './ConsumerElectronics'
import Container from './Container'
import SlideImage from './UI/SlideImage'

import {useTranslation} from 'react-i18next';


const Main = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <main>
          <h1>{t('heading')}</h1>
          <p>{t("subheading")} <span className='main-span'>{t('span-subheading')}</span></p>
          {/* <div className='main-product-image-container'> */}
            <SlideImage/>
          {/* </div> */}
      </main>

      <Catalog/>
      <Ads/>
      <Deals/>
      <ConsumerElectronics/> 
    </Container>
  )
}

export default Main