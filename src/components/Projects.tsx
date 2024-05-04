import Project from './Project';

export default function Projects() {
  const projects = [1, 2, 3, 4];

  return (
    <section>
      {projects.map(() => (
        <Project />
      ))}
    </section>
  );
}
