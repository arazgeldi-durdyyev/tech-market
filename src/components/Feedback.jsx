import { Button } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FeedbackCard from './UI/FeedbackCard';
import {  useNavigate } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import PostForm from './PostForm'

const Feedback = () => {
  const navigate = useNavigate();
  const changePage = (path)=>{
    navigate(path)
  }
  const {t} = useTranslation();
  window.scrollTo({ left: 0, top:0, behavior: "smooth" });
  return (
    <>
        <Header/>
        <div className='feedback-division'>
            <Button variant='outlined' onClick={()=> changePage('/')}><ArrowBackIcon/></Button>
            <h1>{t('review')}</h1>
            <FeedbackCard/>
            <PostForm/>
        </div>
        <Footer/>
    </>
  )
}

export default Feedback