import React from 'react'
import { Header } from './Header'
import Footer from './Footer'

function Container(props) {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Container;