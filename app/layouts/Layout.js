import React from "react";
import FooterBottom from "../footer/FooterBottom";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;
