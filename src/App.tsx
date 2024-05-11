import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import IconFall from './components/IconFall/IconFall';
import { memo } from 'react';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';

const MemoizedIconFall = memo(IconFall);

export default function App() {
  return (
    <main id="main">
      <MemoizedIconFall pos="0" />
      <Hero />
      <About />
      <Tools />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
