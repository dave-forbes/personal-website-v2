import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import IconFall from './components/IconFall';
import { memo } from 'react';
import Tools from './components/Tools';
import Contact from './components/Contact';

const MemoizedIconFall = memo(IconFall);

export default function App() {
  return (
    <main id="main">
      <MemoizedIconFall pos="0" />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <MemoizedIconFall pos="300vh" />
      <Contact />
    </main>
  );
}
