import React from "react";
import scss from "./Footer.module.scss";
import { LiaTelegram } from "react-icons/lia";
import { RxInstagramLogo } from "react-icons/rx";
import { useLanguageStore } from "@/src/stores/useLanguageStore";

const Footer = () => {
  const { t } = useLanguageStore();
  return (
    <footer id="footer" className={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer_content}>
            <h1>Restaurant</h1>
            <div className={scss.footer_nav}>
              <a href="##">{t("ички", "интерьер", "interior")}</a>
              <a href="##">{t("Биз жөнүндө", "О нас", "About us")}</a>
              <a href="##">{t("Меню", "Меню", "Menu")}</a>
              <a href="##">{t("Контакттар", "Контакты", "Contacts")}</a>
            </div>
            <div className={scss.footer__icons}>
              <LiaTelegram />
              <RxInstagramLogo />
            </div>
          </div>

          <p className={scss.footer_study}>
            {t(
              "c 2023 Motion Study LLC",
              "c 2023 ООО «Движение Исследование»",
              "c 2023 Motion Study LLC"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
