import { Stack } from '@mui/material'
import React, { useState } from 'react'
import ProductCardConsumer from './UI/ProductCardConsumer'
import styles from '../styles/consumerElectronics.module.css'
import { smartphones } from '../API/Products/smartphones.mjs'
import { computers } from '../API/Products/computers.mjs'
import { watches } from '../API/Products/watches.mjs'
import { AppContext } from '../App'
import { useTranslation } from 'react-i18next'

//you have to export the favourites
 export const exportedFavourites = [];
//you have to export the favourites

const ConsumerElectronics = () => {
  //adding to favourites
  const [favourite, setFavourites] = useState([])
  const addToFavourite = id => {
    if(!favourite.includes(id)) {
        setFavourites(favourite.concat(id));
        exportedFavourites.push(id)
  }}
  //adding to faourites ends

  //removing from favourites starts
  const removeFavorite = id => {
    let index = exportedFavourites.indexOf(id);
    console.log(index);
    let x = exportedFavourites.splice(index, 1)
    console.log(x)
  };
  //removing from favourites ends



  const { cartProducts, setCartProducts } = React.useContext(AppContext)
  const [products, setProducts]=useState([])

  const featured = [];
  featured.push(smartphones.filter(item=> item.isNew == true))

  const handleLinkClick=(type, a)=>{
    setActiveIndex(a)
    setCartProducts(cartProducts + 1)
    if(type === 'smartphones'){
      setProducts(smartphones)
    }else if(type==='computers'){
      setProducts(computers)
    }else if(type==='popular'){
      setProducts(watches)
    }
  }
  
  const [activeIndex, setActiveIndex] = React.useState(9)
  // const navigate = useNavigate();
  // const changePage = (path) => {
    //   navigate(path);
    // }
    const {t} = useTranslation();
  return (
    <div>
      <div className={styles["consumer-electronics-division"]}>
        <Stack direction={'row'} sx={{justifyContent: 'space-between', alignItems: 'center', flexWrap:'wrap'}}>
          <h1 className='consumer-electronics-heading'>{t('consumer-electronics')}</h1>
            <div className={styles["consumer-electronics-navbar"]}>
              <div className={styles["navbar_links"]}>
                <div className={activeIndex === 0 ? styles['link','active']: styles['link']} onClick={()=>{
                  handleLinkClick('smartphones', 0)}}>
                  {t('smartphones')}
                </div>
                <div className={activeIndex === 1 ? styles['link','active']: styles['link']}
                    onClick={()=>{
                      handleLinkClick('computers', 1)}}>
                    {t('computers')}
                </div>
                <div className={activeIndex === 2 ? styles['link','active']: styles['link']}
                    onClick={()=>handleLinkClick('popular', 2)}>
                  {t('popular')}</div>
                <div className={activeIndex === 3 ? styles['link','active']: styles['link']}
                     onClick={()=>handleLinkClick('best-sellers', 3)}>{t('bestseller')}</div>
              </div>
            </div>
           
        </Stack>
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
         {/* {setProducts(featured[0])} */}
           {/*onclick = () =>{changePage('/feedback')}*/}
          { activeIndex === 9 ?
            featured[0].map(feat=><ProductCardConsumer click={addToFavourite} removeFav={removeFavorite} key={feat.id} productData={feat}/>)
            : 
           products.map(product=><ProductCardConsumer click={addToFavourite} removeFav={removeFavorite} key={product.id} productData={product}/>)
          }
        </div>
              
      </div>
    </div>
  )
}

export default ConsumerElectronics