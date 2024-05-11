import { useRef } from 'react';
import Project from '../Project/Project';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../../lib/data';
import styles from './Projects.module.css';

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-75%']);

  return (
    <section ref={targetRef} className={styles.projectsContainer}>
      <div className={styles.projectsContainerInner}>
        <div>
          <h1 className="section-title">Recent Projects</h1>
          <motion.div
            className={styles.horizontalScrollContainer}
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
        </div>
      </div>
    </section>
  );
}
