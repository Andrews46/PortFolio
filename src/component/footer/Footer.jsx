import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { GoLocation } from "react-icons/Go";
import styles from "./index.module.scss";

const Footer = () => {
  const onHandleClick = () => {
    ("Footer");
  };
  return (
    <div onClick={onHandleClick} id="footer" className={styles.Footer}>
      <h2>My Contact</h2>
      <div className={styles.container}>
        <div className={styles.infoEmail}>
          <MdOutlineEmail className={styles.Icon} />
          <h3>
            <a href="http://andrea46ct@hotmail.it">andrea46ct@hotmail.it</a>
          </h3>
        </div>
        <div className={styles.infoNum}>
          <IoIosPhonePortrait className={styles.Icon} />
          <h3>3921196982</h3>
        </div>
        <div className={styles.infoCity}>
          <GoLocation className={styles.Icon} />
          <h3>Catania</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
