import {useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SearchFilter from '@site/src/components/SearchFilter';
import styles from './agent-collection.module.css';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface Skill {
  title: string;
  category: string;
  description: string;
  level: Level;
}

const levelStyles: Record<Level, string> = {
  beginner: styles.levelBeginner,
  intermediate: styles.levelIntermediate,
  advanced: styles.levelAdvanced,
};

// TODO: Add your real skills here
const skills: Skill[] = [
  {
    title: 'Claude workflow Markdown',
    category: 'Development',
    description:
      'Claude workflow best for agent orchestration to build robust apps https://gist.github.com/pcphil/a84e85dda5eda3190971a1bf90f9b285',
    level: 'intermediate',
  },
  {
    title: 'Prompt Engineering',
    category: 'Fundamentals',
    description:
      'Crafting effective prompts to guide AI models toward desired outputs. Includes techniques like chain-of-thought, few-shot examples, and system prompts.',
    level: 'beginner',
  },
  {
    title: 'Agentic Workflows',
    category: 'Architecture',
    description:
      'Designing multi-step agent pipelines that break complex tasks into manageable sub-tasks with tool use and decision-making.',
    level: 'intermediate',
  },
  {
    title: 'Red Teaming AI Systems',
    category: 'Security',
    description:
      'Testing AI systems for vulnerabilities, adversarial robustness, and alignment failures through systematic adversarial evaluation.',
    level: 'advanced',
  },
];

function matchesSearch(skill: Skill, query: string): boolean {
  const q = query.toLowerCase();
  return (
    skill.title.toLowerCase().includes(q) ||
    skill.description.toLowerCase().includes(q) ||
    skill.category.toLowerCase().includes(q)
  );
}

export default function AgentSkills(): ReactNode {
  const [search, setSearch] = useState('');

  const filtered = search
    ? skills.filter((s) => matchesSearch(s, search))
    : skills;

  return (
    <Layout
      title="Agent Skills"
      description="Key skills for building and working with AI agents">
      <div className={styles.page}>
      <div className={styles.pageHeader}>
        <Heading as="h1" className={styles.pageTitle}>
          Agent Skills
        </Heading>
        <p className={styles.pageDescription}>
          Key skills and capabilities for building and working with AI agents
          effectively.
        </p>
      </div>
      <div className={styles.content}>
        <SearchFilter
          placeholder="Search skills..."
          value={search}
          onChange={setSearch}
        />
        <div className={styles.grid}>
          {filtered.length === 0 && (
            <p className={styles.noResults}>
              No skills match your search.
            </p>
          )}
          {filtered.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.tag}>{s.category}</span>
                <span className={clsx(styles.level, levelStyles[s.level])}>
                  {s.level}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDescription}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
}
