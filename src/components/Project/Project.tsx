// import ProjectTag from './ProjectTag';
import { FaRegFileCode } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import styles from './Project.module.css';

interface ProjectProps {
  image: string;
  title: string;
  description: string;
}

export default function Project({
  image,
  title,
  description,
}: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <img src={image} />
        {/* <div className="project-tag-container">
        {tags.map((tag) => (
          <ProjectTag content={tag} />
        ))}
      </div> */}
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.projectLinkContainer}>
        <a href="" className="button light">
          Repo <FaRegFileCode />
        </a>
        <a href="" className="button light">
          Live <LuExternalLink />
        </a>
      </div>
    </div>
  );
}
