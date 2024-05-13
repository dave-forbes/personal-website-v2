import BlurBackground from '../BlurBackground/BlurBackground';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <BlurBackground>
        <h1 className="section-title">About me</h1>
        <div className={styles.aboutTextContainer}>
          <p>
            A year ago I started The Odin Project's{' '}
            <a
              href="https://www.theodinproject.com/paths/full-stack-javascript"
              target="_blank"
            >
              Full Stack Javascript course
            </a>
            . Fortunately, what started out as a curiosity has lead to
            a new hobby and career path. My main focus over this time
            has been studying the MERN stack as well as general web
            devlopment tools and concepts.
          </p>
          <p>
            Outside of coding, my passions are for music and the great
            outdoors. I'm a lover of all music but specifically funk
            and soul, which inspired me to join a funk band{' '}
            <a href="https://waxpreachers.com/" target="_blank">
              The Wax Preachers
            </a>
            . However, when the weather allows it, I like nothing
            better than going out rock climbing or hiking. Nothing
            inspires me more than nature.
          </p>
          <p>
            My goals going forward are to start working with other
            developers and expand my skillset and knowlede, as well as
            build more apps that can solve real world problems.
          </p>
        </div>
      </BlurBackground>
    </section>
  );
}
