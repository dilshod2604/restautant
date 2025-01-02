import React from "react";
import Image from "next/image";
// import left from "../../assets/main_menu/left.png";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer_blocks}>
            <div className={scss.block__1}>
              <div className={scss.block__visit}>
                {/* <Image src={left} alt="img" width={25} height={10} />    */}
                <h3>Visit Restaurant</h3>
              </div>
              <h1>
                Join Us for <br /> Happy Hours
              </h1>
            </div>
            <div className={scss.block__2}></div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
