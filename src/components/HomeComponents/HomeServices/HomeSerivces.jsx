import React from 'react'
import "./HomeService.css"
import {useTranslation} from "react-i18next";

const HomeSerivces = () => {
    const {t} = useTranslation();
  return (
    <div className='home-service'>
        <h1>{t('homeService.serviceTitle')}</h1>
        <p className='home-service-p'>{t('homeService.serviceParagrap')}</p>
        <div className='home-service-block'>
            <div className='home-serivce-block-description'>
                <h5>{t('homeService.serviceTitle1')}</h5>
                <b>Bitluma {t('homeService.serviceParagrap1')}</b>
            </div>
            <div className='home-serivce-block-description'>
                <h5>{t('homeService.serviceTitle2')}</h5>
                <b>{t('homeService.serviceParagrap2')}</b>
            </div>
            <div className='home-serivce-block-description'>
                <h5>{t('homeService.serviceTitle3')}</h5>
                <b>{t('homeService.serviceParagrap3')}</b>
            </div>
            <div className='home-serivce-block-description'>
                <h5>{t('homeService.serviceTitle4')}</h5>
                <b>{t('homeService.serviceParagrap4')}</b>
            </div>
            <div className='home-serivce-block-description'>
                <h5>{t('homeService.serviceTitle5')}</h5>
                <b>{t('homeService.serviceParagrap5')}</b>
            </div>
            <div className='home-serivce-block-description'>
                <h5>{t('homeService.serviceTitle6')}</h5>
                <b>{t('homeService.serviceParagrap6')}</b>
            </div>
        </div>
    </div>
  )
}

export default HomeSerivces