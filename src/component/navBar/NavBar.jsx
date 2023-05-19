import styles from "./index.module.scss";
const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={styles.NavBar}>
        <ul className={styles.lista}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("content")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Project</li>
          <li onClick={() => scrollToSection("experience")}>Experience</li>
          <button onClick={() => scrollToSection("footer")}>Contact-me</button>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
