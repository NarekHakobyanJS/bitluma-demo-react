import React from "react";
import "./FirstBlock.css";
import { delay, motion } from "framer-motion";
import BitlumaCoin from "../../../assetss/bitlumaCoin.jpg";
import {useTranslation} from "react-i18next";

const FirstBlock = () => {
  const {t} = useTranslation()
  return (
    <div className="first-block">
      <div className="first-block-left">
        <h1>
          {t("homeFirst.h1")} <b>BITLUMA</b>
        </h1>
        <div className="firs-block-btns">
          <p className="firs-block-btns-3rd">3{t('homeFirst.p')}...</p>
          <button className="firs-block-btns-1">{t("homeFirst.btn1")}</button>
          <button className="firs-block-btns-2">{t("homeFirst.btn2")}</button>
          <p className="firs-block-btns-price">1BtiLuma = 100.000 {t('homeFirst.price')}</p>
        </div>
      </div>
      <div className="first-block-right">
        <motion.img 
        initial={{ translateY : 0}}
         animate={{ translateY : 5}}
         transition={{
          repeat : Infinity,
          delay : 2,
         }}
        src={BitlumaCoin} />
      </div>
    </div>
  );
};

export default FirstBlock;
