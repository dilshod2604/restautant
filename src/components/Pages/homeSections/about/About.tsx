import React from "react";
import scss from "./About.module.scss";

const About = () => {
  return (
    <section className={scss.About} id="about">
      <div className="container">
        <div className={scss.content}>About</div>
      </div>
    </section>
  );
};

export default About;
