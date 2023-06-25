import React from 'react'
import { useTranslation } from 'react-i18next'
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {

    const {i18n} = useTranslation()
    const switcher = (lng) => () => {
        i18n.changeLanguage(lng)
    }
  return (
    <div className='Lng-switcher'>
        <div className='lng-switcher' onClick={switcher('en')}><p className='lng-switcher-text'>En</p></div>
        <div className='lng-switcher' onClick={switcher('am')}><p className='lng-switcher-text'>Am</p></div>
    </div>
  )
}

export default LanguageSwitcher