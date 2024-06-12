import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import beeChat from '../../assets/bee-chat.png';
import she from '../../assets/she-care.png';
import sound from '../../assets/sound.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/AarushiDaksh/"
          h3="Online Shop"
          p="Easy solutions"
        />
        <ProjectCard
          src={beeChat}
          link="https://github.com/AarushiDaksh/"
          h3="Bee Chat"
          p="Communication"
        />
        <ProjectCard
          src={she}
          link="https://github.com/AarushiDaksh/"
          h3="She Care"
          p="Period Cramp Controller"
        />
        <ProjectCard
          src={sound}
          link="https://github.com/AarushiDaksh/"
          h3="Music"
          p="Together Forever"
        />
      </div>
    </section>
  );
}

export default Projects;
