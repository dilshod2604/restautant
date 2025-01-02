import React from "react";
import scss from "./Menu.module.scss";
const Menu = () => {
  return (
    <section className={scss.Menu}>
      <div className="container">
        <div className={scss.content}>Menu</div>
      </div>
    </section>
  );
};

export default Menu;
