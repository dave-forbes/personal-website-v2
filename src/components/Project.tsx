import ProjectTag from './ProjectTag';
import { FaRegFileCode } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';

interface ProjectProps {
  image: string;
  title: string;
  tags: string[];
  description: string;
}

export default function Project({
  image,
  title,
  tags,
  description,
}: ProjectProps) {
  return (
    <div className="project">
      <h1>{title}</h1>
      <img src={image} />
      <div className="project-tag-container">
        {tags.map((tag) => (
          <ProjectTag content={tag} />
        ))}
      </div>
      <p>{description}</p>
      <div className="project-link-container">
        <a href="" className="button light">
          Code <FaRegFileCode />
        </a>
        <a href="" className="button light">
          Live Demo <LuExternalLink />
        </a>
      </div>
    </div>
  );
}
