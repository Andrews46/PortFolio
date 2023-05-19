import styles from "./index.module.scss";

const Hero = () => {
  const onHandleclick = () => {
    ("Hero");
  };
  return (
    <div onClick={onHandleclick} id="hero" className={styles.Hero}>
      <div className={styles.contain}>
        <div className={styles.oneCard}>
          <div className={styles.CardDescr}>
            <h1>Hi, I Am </h1>
            <h1>Andrea Cosentino</h1>
            <h2>Front-end developer junior</h2>
            <div className={styles.btn}>
              <a href="https://www.linkedin.com/in/andrea-cosentino-38aa99151/">
                LinkedIn
              </a>
              <a href="https://github.com/Andrews46">Github</a>
              <a href="https://calendly.com/andrea4691ct">Calendly</a>
            </div>
          </div>
          <div className={styles.CardImage}>
            <img src="7378371341976964505.JPG" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
