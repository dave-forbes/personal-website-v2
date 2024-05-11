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
      <img src={image} />
      <h1>{title}</h1>
      {/* <div className="project-tag-container">
        {tags.map((tag) => (
          <ProjectTag content={tag} />
        ))}
      </div> */}
      <p>{description}</p>
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
