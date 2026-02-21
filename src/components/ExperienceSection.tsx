import Heading from '@theme/Heading';
import ScrollReveal from './ScrollReveal';
import styles from './ExperienceSection.module.css';

interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

// TODO: Replace with your real experience
const experiences: Experience[] = [
  {
    company: 'Royal Bank of Canada',
    role: 'AI Specialist',
    period: '2026 — Present',
    bullets: [
      'Drive Agentic Workflows and enablement across the organization',
      'Collaborate with cross-functional teams to integrate AI solutions into products and services',
      'Conduct research and development to stay at the forefront of AI advancements',
      'Leveraging past experience in SDET to become a red team member for AI security and robustness testing',
    ],
  },
  {
    company: 'WIP',
    role: 'Software Engineer',
    period: '2020 — 2023',
    bullets: [
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <Heading as="h2" className={styles.heading}>
            Work Experience
          </Heading>
        </ScrollReveal>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <ScrollReveal
              key={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
              delay={i * 100}>
              <div className={styles.card}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
