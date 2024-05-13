// import ProjectTag from './ProjectTag';
import { FaRegFileCode } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import styles from './Project.module.css';
interface ProjectProps {
  project: {
    title: string;
    description: string;
    img: string;
    repoUrl: string;
    liveUrl: string;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <img src={project.img} />
        <div className={styles.text}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </div>
      <div className={styles.projectLinkContainer}>
        <a href={project.repoUrl} className="button light">
          Repo <FaRegFileCode />
        </a>
        <a href={project.liveUrl} className="button light">
          Live <LuExternalLink />
        </a>
      </div>
    </div>
  );
}
