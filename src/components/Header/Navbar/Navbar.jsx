import React from 'react'
import { NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
    const {t} = useTranslation()
  return (
    <nav>
        <ul className='navbar-item'>
            <li className='navlink'>
                <NavLink to="/" className='active'>{t('navigation.home')}</NavLink>
            </li>
            <li className='navlink'>
                <NavLink to="/docs">{t('navigation.documentation')}</NavLink>
            </li>
            <li className='navlink'>
                <NavLink to="/">BitLuma {t('navigation.platform')}</NavLink>
            </li>
            <li className='navlink'>
                <NavLink to="/nft">NFT</NavLink>
            </li>
            <li className='navlink'>
                <NavLink to="/our-team">{t('navigation.ourTeam')}</NavLink>
            </li>
            <li className='navlink'>
                <NavLink to="/road-map">{t('navigation.roadMap')}</NavLink>
            </li>
            <li className='navlink'>
                <NavLink to="/">{t('navigation.contacts')}</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar