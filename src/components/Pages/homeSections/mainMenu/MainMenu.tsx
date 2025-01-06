"use client";
import React, { useState } from "react";
import scss from "./MainMenu.module.scss";
import left from "../../../../assets/main_menu/left.png";
import right from "../../../../assets/main_menu/right.png";
import Image from "next/image";
import { main_menu } from "@/src/constants/menu";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLanguageStore } from "@/src/stores/useLanguageStore";

const MainMenu = () => {
  const { t } = useLanguageStore();
  const [isActive, setIsActive] = useState<number>(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [active, setActive] = useState<boolean>(false);
  const [menuData, setMenuData] = useState(
    main_menu.filter((el) => el.category === "desserts")
  );
  //filterButtons
  const buttons = main_menu.reduce<string[]>((acc, el) => {
    if (acc.includes(el.category)) return acc;
    return [...acc, el.category];
  }, []);
  //filterAction
  const handleFilter = (category: string) => {
    setMenuData(main_menu.filter((el) => el.category === category));
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const buttonBlackVariant = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -5,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: i * 0.2,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <section className={scss.MainMenu}>
      <div className="container">
        <div className={scss.MainMenu}>
          <div className={scss.menu}>
            <Image src={left} alt="img" width={25} height={10} />
            <h3>Main Menu</h3>
            <Image src={right} alt="img" width={25} height={10} />
          </div>
          <h1>
            {t(
              "Өзгөчө сапат.  Жагымдуу даамдуу",
              "Исключительное качество.  Восхитительно вкусно",
              "Exceptional Quality.  Delightfully Delicious"
            )}
          </h1>
          <div className={scss.blocks}>
            <LayoutGroup>
              <motion.div className={scss.block1} layout>
                {buttons.map((el, index) => (
                  <motion.button
                    layout
                    key={index}
                    onClick={() => {
                      handleFilter(el);
                      setIsActive(index);
                    }}
                    className={scss.buttons}
                    initial="hidden"
                    whileInView="visible"
                    variants={buttonBlackVariant}
                    custom={index}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <p
                      className={`${scss.button_text} ${
                        isActive === index ? scss.active : ""
                      }`}
                    >
                      {el}
                    </p>

                    {isActive === index && (
                      <motion.span
                        className={scss.button_active}
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 1,
                            ease: "linear",
                          },
                        }}
                      ></motion.span>
                    )}
                    {isActive === index && (
                      <span className={scss.button_line}></span>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </LayoutGroup>
            <div className={scss.block2} key={animationKey}>
              {menuData.map((el, index) => (
                <motion.div
                  key={index}
                  className={scss.menu_item_box}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                  custom={index}
                >
                  <span className={scss.menu_item}>
                    <h4 className={scss.item_name}>{el.name}</h4>
                    <span className={scss.item_price}>${el.price}</span>
                  </span>
                  <p className={scss.item_description}>{el.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div
            className={scss.view_all_button}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <Link href="/menu" className={scss.button}>
              {t("Толук менюну көрүү", "Посмотреть полное меню", "View Full menu")}
              <FaArrowRight className={scss.button_icon} />
            </Link>
            <motion.span
              className={`${scss.button_line_1} ${active ? scss.active : ""}`}
              animate={{
                x: active ? -55 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            ></motion.span>
            <motion.span
              className={`${scss.button_line_2} ${active ? scss.active : ""}`}
              animate={{
                x: active ? 55 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            ></motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
