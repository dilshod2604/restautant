"use client";
import React from "react";
import scss from "./BurgerMenu.module.scss";
import { motion } from "framer-motion";
import { useBurgerStore } from "@/src/stores/useBurgerStore";
import Link from "next/link";
import { useLanguageStore } from "@/src/stores/useLanguageStore";
const BurgerMenu = () => {
  const { isOpen, setIsOpen } = useBurgerStore();
  const { t, setLanguage, language } = useLanguageStore();
  const hrefs = [
    { name: t("Интерьер", "Интерьер", "Interior"), href: "#interior" },
    { name: t("Биз жонундо", "О нас", "About Us"), href: "#about" },
    { name: t("Меню", "Меню", "Menu"), href: "/menu" },
    { name: t("Контакты", "Контакты", "Contacts"), href: "#contacts" },
  ];

  const handleLanguageChange = (lang: string) => {
    switch (lang) {
      case "en":
        setLanguage("en");
        break;
      case "ru":
        setLanguage("ru");
        break;
      case "ky":
        setLanguage("ky");
        break;
    }
  };

  return (
    <motion.div
      className={scss.Burger_Menu}
      initial={{ x: "-300px" }}
      animate={{
        x: isOpen ? 0 : "-300px",
        transition: {
          duration: 0.5,
        },
      }}
    >
      <ul className={scss.burger_list_box}>
        {hrefs.map((el, index) => (
          <li className={scss.burger_list} key={index}>
            <Link
              href={el.href}
              className={scss.burger_list_link}
              onClick={() => setIsOpen(!isOpen)}
            >
              {el.name}
            </Link>
          </li>
        ))}
        <div className={scss.language_buttons}>
          <button
            className={language === "en" ? scss.active_language : ""}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>
          <button
            className={language === "ru" ? scss.active_language : ""}
            onClick={() => handleLanguageChange("ru")}
          >
            RU
          </button>
          <button
            className={language === "ky" ? scss.active_language : ""}
            onClick={() => handleLanguageChange("ky")}
          >
            KG
          </button>
        </div>
      </ul>
    </motion.div>
  );
};
export default BurgerMenu;
