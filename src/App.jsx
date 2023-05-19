import { useState, useEffect } from "react";

import styles from "./App.scss";

import NavBar from "./component/navBar";
import Hero from "./component/hero";
import Menu from "./component/menu";
import About from "./component/about";
import Content from "./component/content";
import Project from "./component/project";
import Experience from "./component/experience";
import Loader from "./component/loader";
import Footer from "./component/footer";

function App() {
  const [scrollPage, setScrollPage] = useState("");

  const handleNavClick = (sectionId) => {
    setScrollPage(sectionId);
  };
  useEffect(() => {
    const sectionElement = document.getElementById(scrollPage);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollPage]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <Hero id="Home" />
          <NavBar onClick={handleNavClick} />
          <Menu />
          <About id="About" />
          <Content id="Content" />
          <Project id="Project" />
          <Experience id="Experience" />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
