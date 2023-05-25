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
        di perito informatico.Della mia passione per la tecnologia ne ho fatto
        un lavoro, diventando un Web Developer. Ma fermarmi non fa per me, così
        ho sviluppato le mie passioni in altri ambiti, come l'artigianato e le
        arti marziali. Sono un maestro di Wing Chun Kung Fu e lavoro il legno
        usando la mia creatività per creare oggetti che vengono acquistati in
        tutto il mondo. Dalle mie passioni ho imparato la pazienza e la
        resilienza per affrontare le difficoltà e superarle, usandole a mio
        vantaggio per crescere e migliorarmi. Sono una persona socievole aperta
        al dialogo infatti mi trovo bene a lavorare in team .
      </p>
    </div>
  );
};
export default About;
