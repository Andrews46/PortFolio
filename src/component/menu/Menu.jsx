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

  return (
    <div className={styles.Menu}>
      <div className={styles.hamburgerMenu}>
        <GiHamburgerMenu onClick={openModal} />
      </div>

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
            <button className={styles.btnModal} onClick={onHandleClose}>
              x
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Menu;
