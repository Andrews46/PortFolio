import styles from "./index.module.scss";

const Project = () => {
  const onHadleClick = () => {
    ("Projects");
  };
  return (
    <div onClick={onHadleClick} id="projects" className={styles.Project}>
      <div className={styles.imgProject}>
        <h2> Project: GoCine </h2>

        <p>
          App multimediale con riproduzione trailer ultime uscite e prenotazione
          posto al cinema. Realizzato con React/Sass/Firebase/React-router-dom
        </p>
        <a href="https://finalprojectdb-d09ac.web.app/">
          <img className={styles.imagesProject} src="GoCine.png" alt="" />
        </a>
        <h2>AppCocktail</h2>

        <p>
          App di visualizzazione cocktail con istruzioni per riprodurli.
          Realizzato con React
        </p>
        <a href="https://app-cocktail.vercel.app/">
          <img className={styles.imagesProject} src="AppCocktail.png" alt="" />
        </a>
        <h2>Clone Twitter</h2>

        <p>Riproduzione app di twitter realizzata con React </p>
        <a href="https://twitter-clone-beta-ebon.vercel.app/">
          <img className={styles.imagesProject} src="CloneTwitter.png" alt="" />
        </a>
        <h2>AndrewsVideo</h2>
        <p>
          App per visualizzare le nuove uscite al cinema realizzata con
          Javascript,Css,Html .
        </p>
        <a href="https://andrews-video.vercel.app">
          <img className={styles.imagesProject} src="AndrewsVideo.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Project;
