import React from "react";
import scss from "./ModernInterior.module.scss";

const ModernInterior = () => {
  return (
    <section className={scss.ModernInterior} id="interior">
      <div className="container">
        <div className={scss.content}>ModernInterior</div>
      </div>
    </section>
  );
};

export default ModernInterior;
