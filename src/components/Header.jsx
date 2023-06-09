import React from "react";
import { Outlet, useLocation, useNavigate, NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Button, IconButton, MenuItem } from "@mui/material";
import i18 from "../utilities/i18translate";
// import {createTheme} from '@mui/material/styles'; //you could't get it to work

import { changeLanguage } from "./../App";
import { useTranslation } from "react-i18next";
import Select from '@mui/material/Select';
import { useState } from "react";
import Search from "./Search";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#F1400E1',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

const storedLang = window.localStorage.getItem('language')
export const Header = () => {
  const [language, setLanguage] = useState(storedLang)
  const handleChange = (event) => {
    changeLanguage(event.target.value)
    setLanguage(event.target.value);
    console.log(language)
    console.log(storedLang)
  };

  const navigator = useNavigate();
  function changePage(path) {
    navigator(path);
  }

  //sahypalaryn listini edyar
  const location = useLocation();
  React.useEffect(() => {
    //her sapar uytgande location trigger bolyar netijede useEffect ishleyar
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <header className="header">
        <img
          className="tech-logo"
          src="/Images/1 Header/logo.png"
          alt="TECH Market logo"
          onClick={() => changePage("/")}
        />
        <Search/>
        <div className="user-interaction">
          <NavLink to={"/cart"}>
            <IconButton aria-label="Shopping-cart">
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: "30px", color: "#1400e1" }}
              />
            </IconButton>
          </NavLink>

          <IconButton
            aria-label="Favorite"
            onClick={() => changePage("/favourites")}
          >
            <FavoriteBorderIcon
              color="primary"
              sx={{ fontSize: "30px", color: "#1400e1" }}
            />
          </IconButton>

          <NavLink to={"/sign-in"}>
            <IconButton aria-label="Login">
              <PersonOutlineOutlinedIcon
                sx={{ fontSize: "30px", color: "#1400e1" }}
              />
            </IconButton>
          </NavLink>
          <Select name="lang" id="lang-select" onChange={(e)=> handleChange(e)} defaultValue={language} value={language}>
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ru">RU</MenuItem>
            <MenuItem value="tm">TM</MenuItem>
          </Select>
        </div>
      </header>
      <Outlet />
    </>
  );
};
