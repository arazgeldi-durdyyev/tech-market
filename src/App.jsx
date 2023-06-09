import React from "react"; //you can also use useRef
import Main from "./components/Main";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cart from "./components/Cart";
import { Header } from "./components/Header";
import CheckOut from "./components/CheckOut";
import Favourites from "./components/Favourites";
import Feedback from "./components/Feedback";
import { useState } from "react";
import i18 from './utilities/i18translate'
import { useEffect } from "react";
import CatalogProducts from "./components/CatalogProducts";
// import ProductCardConsumer from "./component/UI/ProductCardConsumer";

export const AppContext = React.createContext();
// window.localStorage.setItem('language', resources.en.translation)

export function changeLanguage(lng) {
  i18.changeLanguage(lng);
  window.localStorage.setItem('language', lng)
}

function App(props) {

  useEffect(()=>{
    changeLanguage(window.localStorage.getItem('language'))
  }, [])

  const [cartProducts, setCartProducts] = React.useState(0);
  const [favourites, setFavourites] = useState([])// <= this state holds the id's of all favorite but doesn't work
    return (
    <AppContext.Provider value={{ cartProducts, setCartProducts, favourites, setFavourites }}>
      <div {...props} className="screen-width">
        {/* <h1 style={{margin: "22px 12px"}}>Welcome to FInal Project</h1> */}
        <BrowserRouter>
        {/* <Header/> */}
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            {/*eger sign in chyksa footer ayyrmaly*/}
            <Route path="/sign-up" element={<SignUp />} />
            {/*eger sign up chyksa footer ayyrmaly*/}
            <Route path="/check-out" element={<CheckOut/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/catalog-products" element={<CatalogProducts/>}/>
            {/* <Route path="/catalog-products" element={<CatalogProducts/>}/> */}
            {/* <Route path="/feedback/" element={<Feedback/>}>
              <Route path=":productId" element={<FeedbackCard/>}/>
            </Route> */}
            <Route path="/feedback/:productId" element={<Feedback/>}/>
            <Route path="/cart" element={<Header/>}>
              <Route index element={<Cart/>}/>
            </Route>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;