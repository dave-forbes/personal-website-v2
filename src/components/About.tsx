import BlurBackground from './BlurBackground';

export default function About() {
  return (
    <section className="about" id="about">
      <BlurBackground>
        <h1 className="section-title">About me</h1>
        <div className="about-text-container">
          <p>
            I am self taught developer, currenty specializing in the
            MERN stack. I love building things and learning new tools
            and technologies.
          </p>
          <p>
            I'm looking for opportunities to work with other
            developers and continuing my web development journey.
          </p>
          <p>
            When I am not coding, I'll be rock climbing, hiking or
            playing guitar in my band.
          </p>
        </div>
      </BlurBackground>
    </section>
  );
}
