import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./SecondBlock.css";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

const textAnimation = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
};

const progresAnimation = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
};

const SecondBlock = () => {
  const { t } = useTranslation();

  return (
    <div className="second-block">
      <h1>{t("homeAbout.h1")}</h1>
      <p className="second-block-p">{t("homeAbout.p")}</p>
      <div className="second-block-decription">
        <div className="second-block-info">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={progresAnimation}
            custom={1}
            className="progres"
          >
            <label>{t("homeAbout.fast")}</label>
            <b>100%</b>
            <progress max="100" value="100" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={progresAnimation}
            custom={1}
            className="progres"
          >
            <label>{t("homeAbout.transparent")}</label>
            <b>100%</b>
            <progress max="100" value="100" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={progresAnimation}
            custom={1}
            className="progres"
          >
            <label>{t("homeAbout.security")}</label>
            <b>100%</b>
            <progress max="100" value="100" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={progresAnimation}
            custom={1}
            className="progres"
          >
            <label>{t("homeAbout.availability")}</label>
            <b>100%</b>
            <progress max="100" value="100" />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          custom={1}
          className="second-block-info2"
        >
          <p>"BitLuma {t("homeAbout.bitlumaInfo1")} "</p>
          <h5>- BitLuma {t("homeAbout.bitlumaInfo2")}</h5>
          <p>{t("homeAbout.bitlumaInfo3")}</p>
        </motion.div>
      </div>
    </div>
  );
};
export default SecondBlock;
