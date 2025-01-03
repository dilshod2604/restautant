import React from "react";
import scss from "./Footer.module.scss";
import { LiaTelegram } from "react-icons/lia";
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer id="footer" className={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer_content}>
            <h1>Restaurant</h1>
            <div className={scss.footer_nav}>
              <a href="##">interior</a>
              <a href="##">About us</a>
              <a href="##">Menu</a>
              <a href="##">Contacts</a>
            </div>
            <div className={scss.footer__icons}>
              <LiaTelegram />
              <RxInstagramLogo />
            </div>
          </div>

          <p className={scss.footer_study}>c 2023 Motion Study LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
