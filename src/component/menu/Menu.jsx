import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./index.module.scss";

const Menu = () => {
  const [visible, setVisible] = useState("");
  const openModal = () => {
    setVisible(!visible);
  };
  const onHandleClose = () => {
    setVisible(false);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.Menu}>
      <GiHamburgerMenu onClick={openModal} />
      {visible && (
        <div className={styles.modal}>
          <ul>
            <a href="#hero" onClick={onHandleClose}>
              Home
            </a>
            <a href="#about" onClick={onHandleClose}>
              About
            </a>
            <a href="#skills" onClick={onHandleClose}>
              Skills
            </a>
            <a href="#experience" onClick={onHandleClose}>
              Experience
            </a>
            <a href="#footer" onClick={onHandleClose}>
              Contact-me
            </a>
            <button onClick={onHandleClose}>x</button>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Menu;
