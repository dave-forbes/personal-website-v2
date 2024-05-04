import { useRef } from 'react';
import Project from './Project';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Projects() {
  const projects = [1, 2, 3, 4];
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="projects-container">
      <div className="projects-container-inner">
        <motion.div
          className="horizontal-scroll-container"
          style={{ x }}
        >
          {projects.map(() => (
            <Project />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
