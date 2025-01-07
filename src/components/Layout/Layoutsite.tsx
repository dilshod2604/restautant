"use client";
import React, { ReactNode, useEffect, useState } from "react";

import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Prealoder from "../UI/preloader/Prealoder";

const Layoutsite = ({ children }: { children: ReactNode }) => {
  const [isPreloader, setIsPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsPreloader(false);
    }, 4000);
  }, []);

  if (isPreloader) return <Prealoder />;
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layoutsite;
