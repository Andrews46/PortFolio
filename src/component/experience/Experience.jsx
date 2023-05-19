import styles from "./index.module.scss";

const Experience = () => {
  const onHadleClick = () => {
    ("Experience");
  };
  return (
    <div onClick={onHadleClick} id="experience" className={styles.Experience}>
      <div className={styles.container}>
        <h2>Experience</h2>
        <h3>FRONT-END DEVELOPER</h3>
        <p>
          Edgemony Code-week: sviluppo applicazione meteo zona di Palermo e
          provincia. Realizzata con: HTML, CSS, JAVASCRIPT Vanilla. Final
          project: sviluppo applicazione per prenotazione biglietti del cinema,
          con player per i trailer dei film. Realizzata con: React. js, SASS,
          CSS modules, React router e Firebase.
        </p>
        <hr />
        <h3>LAVORO AUTONOMO</h3>
        <p>
          2019 - Presente: Creazione di prodotti in legno handmade di
          riproduzione di armi di arti marziali e armi per cosplayer, oggetti
          ornamentali Gestione rapporti con i clienti Gestione social collegato
          allo store
        </p>
        <hr />
        <h3>MAESTRO DI ARTI MARZIALI</h3>
        <p>
          Febbraio 2018 - Presente: Maestro di Wing Chun e difesa personale,
          membro ASI, associazione sportiva.
        </p>
        <hr />
        <h3>EDILIZIA</h3>
        <p>
          2012 - 2018 : Sistema di costruzione a secco: pareti e controsoffitti
          interni ed esterni, cartongesso tecnico d'arredo
        </p>
      </div>
    </div>
  );
};
export default Experience;
