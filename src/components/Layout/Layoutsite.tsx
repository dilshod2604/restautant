import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer/Footer";

const Layoutsite = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layoutsite;
