import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import IconFall from './components/IconFall';
import { memo } from 'react';

const MemoizedIconFall = memo(IconFall);

export default function App() {
  const sections = [Hero, About, Projects];

  return (
    <main id="main">
      <MemoizedIconFall />
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </main>
  );
}
