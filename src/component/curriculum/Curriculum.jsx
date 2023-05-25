import styles from "./index.module.scss";
import pdf from "../../../public/curriculum/Cv+Cosentino+Andrea.pdf";

const Curriculum = () => {
  return (
    <div className={styles.Curriculum}>
      <a href={pdf} download={true}>
        <button>Download my CV</button>
      </a>
    </div>
  );
};
export default Curriculum;
