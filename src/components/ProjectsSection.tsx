import Heading from '@theme/Heading';
import ScrollReveal from './ScrollReveal';
import styles from './ProjectsSection.module.css';

interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

// TODO: Replace with your real projects
const projects: Project[] = [
  {
    name: 'Web Automator',
    description:
      'Looking to quickly stand up a UI test suite? Web Automator is a tool that generates Playwright test code from simple English prompts. Produce ready-to-run test scripts, saving you hours of manual coding.',
    tags: ['Python', 'Playwright', 'OpenAI Spec'],
    url: 'https://github.com/pcphil/web-automator',
  },
  {
    name: 'Toolkit',
    description:
      'A collection of useful tools and scripts for productivity. Goal is to build reusable tools that can be used across projects. Current tools include a log parser, data visualizer, and code formatter.',
    tags: ['Python', 'Reusable Tools'],
    url: 'https://github.com/pcphil/toolkit',
  },
  {
    name: 'Pytest-Playwright Template',
    description:
      'Need a quick start for your Playwright tests? This template provides a ready-to-use Pytest framework with Playwright integration, complete with example tests and best practices to get you up and running in no time.',
    tags: ['Python', 'Playwright', 'Pytest'],
    url: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <Heading as="h2" className={styles.heading}>
            Projects
          </Heading>
        </ScrollReveal>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <a
                href={project.url}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer">
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
