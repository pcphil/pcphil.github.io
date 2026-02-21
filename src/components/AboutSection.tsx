import Heading from '@theme/Heading';
import ScrollReveal from './ScrollReveal';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <Heading as="h2" className={styles.heading}>
            About Me
          </Heading>
        </ScrollReveal>
        <div className={styles.grid}>
          <ScrollReveal direction="left">
            <img
              src="img/profile.png"
              alt="Philip Chung"
              className={styles.avatar}
            />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div className={styles.bio}>
              <p>
                Hi there! I'm Philip, A passionate software developer focused on modernization and transformation wherever I work. I Strive to adopt AI and mentor peers to scale for growth. My long term goal is to be a strong leader who can teach or improve fellow peers on modern skillsets.
              </p>
              <p>
                When I'm not coding, you'll find me reading about the newest tech trend, experimenting with claude code, or exploring the outdoors. I'm always eager to connect with like-minded individuals, so feel free to reach out!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
