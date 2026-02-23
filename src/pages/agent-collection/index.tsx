import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ScrollReveal from '@site/src/components/ScrollReveal';
import styles from './agent-collection.module.css';

const sections = [
  {
    icon: '📝',
    title: 'Prompt Library',
    description:
      'A curated collection of useful prompts for AI agents, coding assistants, and creative workflows.',
    to: '/agent-collection/prompt-library',
  },
  {
    icon: '📰',
    title: 'Interesting Articles',
    description:
      'Noteworthy reads on AI, machine learning, and the future of intelligent agents.',
    to: '/agent-collection/interesting-articles',
  },
  {
    icon: '⚡',
    title: 'Agent Skills',
    description:
      'Key skills and capabilities for building and working with AI agents effectively.',
    to: '/agent-collection/agent-skills',
  },
];

export default function AgentCollection(): ReactNode {
  return (
    <Layout
      title="Agent Collection"
      description="Philip Chung's curated collection of AI agent resources">
      <div className={styles.page}>
      <div className={styles.pageHeader}>
        <Heading as="h1" className={styles.pageTitle}>
          Agent Collection
        </Heading>
        <p className={styles.pageDescription}>
          A curated hub of prompts, articles, and skills for working with AI
          agents.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.landingGrid}>
          {sections.map((section, i) => (
            <ScrollReveal key={section.to} delay={i * 100}>
              <Link to={section.to} className={styles.card}>
                <div className={styles.cardIcon}>{section.icon}</div>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <p className={styles.cardDescription}>
                  {section.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
}
