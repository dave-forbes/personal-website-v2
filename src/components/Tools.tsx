import BlurBackground from './BlurBackground';

export default function Tools() {
  return (
    <section className="tools">
      <BlurBackground>
        <h1 className="section-title">My tools</h1>
        <div className="grid">
          <div>
            <h2>Code Editor</h2>
            <ul>
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div>
            <h2>Languages/Markup</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Pug</li>
            </ul>
          </div>
          <div>
            <h2>Database</h2>
            <ul>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h2>Frameworks</h2>
            <ul>
              <li>React</li>
              <li>NextJs</li>
              <li>Vite</li>
              <li>Express</li>
            </ul>
          </div>
          <div>
            <h2>Testing</h2>
            <ul>
              <li>Jest</li>
              <li>Vitest</li>
              <li>SuperTest</li>
              <li>React Testing Library</li>
              <li>Chrome Dev Tools</li>
            </ul>
          </div>
          <div>
            <h2>Other services</h2>
            <ul>
              <li>Github</li>
              <li>Netlify</li>
              <li>Railway</li>
              <li>AWS</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
      </BlurBackground>
    </section>
  );
}
