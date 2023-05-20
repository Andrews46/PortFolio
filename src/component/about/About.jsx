import styles from "./index.module.scss";

const About = () => {
  const onHandleClik = () => {
    ("About");
  };
  return (
    <div onClick={onHandleClik} id="about" className={styles.About}>
      <h2>About me</h2>
      <p>
        Sono diplomato all'Istituto Tecnico Cannizzaro di Catania, con diploma
        di perito informatico. Mi affascina tutto ciò che riguarda la
        programmazione front-end e la tecnologia in generale, sono sempre pronto
        a mettermi in gioco per imparare cose nuove e fare nuove esperienze.Sono
        una persona socievole aperta al dialogo infatti mi trovo bene a lavorare
        in team .
      </p>
    </div>
  );
};
export default About;
