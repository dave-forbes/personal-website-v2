// import ProjectTag from './ProjectTag';
import { FaRegFileCode } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';

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
    <div className="project">
      <img src={image} />
      <h1>{title}</h1>
      {/* <div className="project-tag-container">
        {tags.map((tag) => (
          <ProjectTag content={tag} />
        ))}
      </div> */}
      <p>{description}</p>
      <div className="project-link-container">
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
