interface ProjectTagProps {
  content: string;
}

export default function ProjectTag({ content }: ProjectTagProps) {
  return <div className="project-tag">{content}</div>;
}
