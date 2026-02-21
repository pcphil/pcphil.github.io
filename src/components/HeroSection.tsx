import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <Heading as="h1" className={styles.title}>
          Philip Chung
        </Heading>
        <p className={styles.subtitle}>Enthusiast in AI and Software Development</p>
        <p className={styles.tagline}>
          Constantly learning and exploring the latest in technology to solve real-world problems.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="#experience">
            View My Work
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/blog">
            Read Blog
          </Link>
        </div>
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.chevron}>&#8964;</span>
      </div>
    </header>
  );
}
