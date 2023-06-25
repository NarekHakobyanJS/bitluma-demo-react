import React, { useState, useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import {IoLanguageSharp} from "react-icons/io5"
import logo from "../../assetss/logo.png"
import Container from "../Container/Container";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <Container>
      <header className="header">
        <div className="header-content">
      <NavLink to="/" className="header-logo">
        <img src={logo} />
      </NavLink>
      
      <Navbar />
     
      <div>
      <button 
        className="btn-theme"
       onClick={toggleTheme}>
        {
          theme === "light" ? <BsFillMoonFill className="moon"/> : <BsFillSunFill className="sun"/>
        }
      </button>
      <IoLanguageSharp
      onClick={() => setOpenPopup(!openPopup)}
      className="lng"/>
      </div>
      {openPopup && <div className="openPopup"> <LanguageSwitcher /></div> }
      </div>
      </header>
    </Container>
  );
};

export default Header;
