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
    company: 'Royal Bank of Canada',
    role: 'Software Development Manager',
    period: '2023 — 2026',
    bullets: [
      'Lead a team of engineers to automate and build quality pipelines for datawarehouse. over 1000 combination of rows and columns in views verified and exposed to all lines of business in the bank'
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Senior QA Lead',
    period: '2022 — 2023',
    bullets: [
      'Automation focused on reducing manual efforts for cost avoidance and time savings',
      'Provide and build QA strategy on DevOps pipeline and tools for new projects',
      'Establish automation foundation and execution plan for new projects across the board',
      'Facilitate automation for several projects and be able to provide solutions for fellow automation developers on obstacles such as python to API coding, non browser based apps, and building jenkins pipeline',
      'Build feature files and follow BDD mindset',
      'Mentor and improve fellow manual testers on automation',
      'Migrated all testcases from HP ALM/QC to qTest',
      'Integrated Robotframework to qTest via Jenkins pipeline for automation reports'
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'QA Automation Lead',
    period: '2020 — 2022',
    bullets: [
      'Document workflow applications department consisting of electronic signatures, document data extraction, and records management',
      'Facilitate automation coverage of over 95% under an API based SaaS solution leveraged across 15 internal lines of businesses such as insurance, wealth management, mortgage renewals and GIC.',
      'Maintain built-in Dev-ops pipeline integrated with Jenkins and automation greatly and continuously migrate API services to containerized jenkins agents',
      'Drive weekly defect triages to reduce technical debt and improve resiliency ',
      'Increase early detection visibility through long term risk overviews and discussions with team',
      'Manage a JIRA service desk and bridge communications between vendors and internal consumers to deliver accurate requirements'
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'QA Analyst',
    period: '2017 — 2020',
    bullets: [
      'Document workflow applications department consisting of electronic signatures, document data extraction, and records management',
      'Facilitate automation coverage of over 95% under an API based SaaS solution leveraged across 15 internal lines of businesses such as insurance, wealth management, mortgage renewals and GIC.',
      'Maintain built-in Dev-ops pipeline integrated with Jenkins and automation greatly and continuously migrate API services to containerized jenkins agents',
      'Drive weekly defect triages to reduce technical debt and improve resiliency ',
      'Increase early detection visibility through long term risk overviews and discussions with team',
      'Manage a JIRA service desk and bridge communications between vendors and internal consumers to deliver accurate requirements'
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Technical System Analyst Co-op',
    period: '2017 — 2017',
    bullets: [
      'Saved over $100K through automation for 3 different applications written in Python with Selenium framework',
      'Adopted Agile values and principles contributed to the process of quality and cooperation within projects',
      'Achieved cost savings of over $80k per month worth of manual regression with automation coverage'
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
