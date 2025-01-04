import React from "react";
import Welcome from "./homeSections/welcome/Welcome";
import About from "./homeSections/about/About";
import BestSellers from "./homeSections/bestSellers/BestSellers";
import MainMenu from "./homeSections/mainMenu/MainMenu";
import ModernInterior from "./homeSections/modernInterior/ModernInterior";
import Visit from "./homeSections/modernInterior/visit/Visit";

const HomePage = () => {
  return (
    <React.Fragment>
      <Welcome />
      <About />
      <BestSellers />
      <MainMenu />
      <ModernInterior />
      <Visit />
    </React.Fragment>
  );
};

export default HomePage;
