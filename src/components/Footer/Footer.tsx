import styles from './Footer.module.css';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <a
        href="https://github.com/dave-forbes?tab=repositories"
        target="_blank"
        className="button light border"
      >
        More projects on github
      </a>
      <a href="#hero" className="button dark">
        Back to the top
      </a>
    </section>
  );
}
