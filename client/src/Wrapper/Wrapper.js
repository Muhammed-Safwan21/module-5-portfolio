import React, { useContext } from "react";
import ContactPage from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import HeaderComponent from "../Components/Header/HeaderComponent";
import ScrollToTop from "../Components/Scroll/Scroll";
import { ContextValue } from "../App";
import './Wrapper.css'


function Wrapper() {
  const { theme } = useContext(ContextValue);
  return (
    
      <div className={theme === false ? "wrapper-dark" : "wrapper-light"}>
        <HeaderComponent />
        <Home />
        <Skills />
        <Projects />
        <ContactPage />
        <ScrollToTop />
        <Footer />
      </div>
   
  );
}

export default Wrapper;
