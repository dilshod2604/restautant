"use client";
import React from "react";
import scss from "./Preloader.module.scss";
import Image from "next/image";
import logo from "../../../assets/preloader/logo.png";
import { motion } from "framer-motion";

const title = "Restaurant";

const Preloader = () => {
  const wordVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.2,
      },
    }),
  };

  const renderWords = () => {
    return (
      <motion.span
        className={scss.word_box}
        initial={{ width: "0%" }}
        animate={{
          width: "fit-content",
          transition: {
            duration: 3,
            delay: 0.3,
          },
        }}
      >
        {title.split("").map((el, index) => (
          <motion.p
            className={scss.words}
            key={index}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            custom={index}
          >
            {el}
          </motion.p>
        ))}
      </motion.span>
    );
  };

  return (
    <div className={scss.preloader}>
      <div className={scss.preloader_content}>
        <motion.div
          className={scss.image_wrapper}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              ease: "linear",
            },
          }}
        >
          <Image
            src={logo}
            alt="logo"
            layout="intrinsic"
            width={200}
            height={200}
          />
        </motion.div>
        <div className={scss.typing_text}>
          {renderWords()}

          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            |
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
