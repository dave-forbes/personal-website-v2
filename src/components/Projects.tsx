import { useRef } from 'react';
import Project from './Project';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurBackground from './BlurBackground';
import { projects } from '../lib/data';

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-70%']);

  return (
    <section ref={targetRef} className="projects-container">
      <div className="projects-container-inner">
        <BlurBackground>
          <motion.div
            className="horizontal-scroll-container"
            style={{ x }}
          >
            {projects.map((project) => (
              <Project
                title={project.title}
                image={project.img}
                tags={project.tags}
                description={project.description}
              />
            ))}
          </motion.div>
        </BlurBackground>
      </div>
    </section>
  );
}
