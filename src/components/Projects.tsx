import { useRef } from 'react';
import Project from './Project';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurBackground from './BlurBackground';
import { projects } from '../lib/data';

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const windowWidth = window.innerWidth;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['1%', windowWidth > 650 ? '-70%' : '-75%']
  );

  return (
    <section ref={targetRef} className="projects-container">
      <div className="projects-container-inner">
        <BlurBackground>
          <h1 className="section-title">Recent Projects</h1>
          <motion.div
            className="horizontal-scroll-container"
            style={{ x }}
          >
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                image={project.img}
                // tags={project.tags}
                description={project.description}
              />
            ))}
          </motion.div>
        </BlurBackground>
      </div>
    </section>
  );
}
