import React from 'react'
import FeedbackCard from './UI/FeedbackCard'
import { useNavigate } from 'react-router-dom'
import { smartphones } from '../API/Products/smartphones.mjs'
import CatalogProductsCard from './UI/CatalogProductsCard'
import { Header } from './Header'
import Footer from './Footer'

const CatalogProducts = () => {
    const navigate = useNavigate();
    const changePage = (path) => {
        navigate(path)
    }
  return (
    <>
      <Header/>
      <div className='feedback-division'>
          <h1>Catalog Products</h1>
          {smartphones.map(thisProd => <CatalogProductsCard key={thisProd.id} thisProduct={thisProd}/>)}
      </div>
      <Footer/>
    </>
  )
}

export default CatalogProducts