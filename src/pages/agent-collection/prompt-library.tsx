import {useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SearchFilter from '@site/src/components/SearchFilter';
import styles from './agent-collection.module.css';

interface Prompt {
  title: string;
  category: string;
  description: string;
  prompt: string;
}

// TODO: Add your real prompts here
const prompts: Prompt[] = [
  {
    title: 'Code Review Assistant',
    category: 'Development',
    description:
      'A prompt that helps review code for bugs, performance issues, and best practices.',
    prompt:
      'Review the following code for bugs, performance issues, security vulnerabilities, and adherence to best practices. Provide specific suggestions with code examples.',
  },
  {
    title: 'Technical Writer',
    category: 'Documentation',
    description:
      'Generates clear technical documentation from code or specifications.',
    prompt:
      'Write clear, concise technical documentation for the following. Include usage examples, parameter descriptions, and edge cases.',
  },
  {
    title: 'Red Team Tester',
    category: 'Security',
    description:
      'A prompt for testing AI systems for robustness and safety.',
    prompt:
      'Act as a red team tester. Identify potential vulnerabilities, edge cases, and failure modes in the following system. Suggest mitigations for each finding.',
  },
];

function matchesSearch(prompt: Prompt, query: string): boolean {
  const q = query.toLowerCase();
  return (
    prompt.title.toLowerCase().includes(q) ||
    prompt.description.toLowerCase().includes(q) ||
    prompt.category.toLowerCase().includes(q)
  );
}

export default function PromptLibrary(): ReactNode {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = search
    ? prompts.filter((p) => matchesSearch(p, search))
    : prompts;

  function handleCopy(text: string, title: string) {
    navigator.clipboard.writeText(text);
    setCopied(title);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <Layout
      title="Prompt Library"
      description="Curated collection of useful AI prompts">
      <div className={styles.pageHeader}>
        <Heading as="h1" className={styles.pageTitle}>
          Prompt Library
        </Heading>
        <p className={styles.pageDescription}>
          Curated prompts for AI agents, coding assistants, and creative
          workflows.
        </p>
      </div>
      <div className={styles.content}>
        <SearchFilter
          placeholder="Search prompts..."
          value={search}
          onChange={setSearch}
        />
        <div className={styles.grid}>
          {filtered.length === 0 && (
            <p className={styles.noResults}>
              No prompts match your search.
            </p>
          )}
          {filtered.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.tag}>{p.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDescription}>{p.description}</p>
              <div className={styles.promptText}>{p.prompt}</div>
              <button
                className={styles.copyButton}
                onClick={() => handleCopy(p.prompt, p.title)}>
                {copied === p.title ? 'Copied!' : 'Copy Prompt'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
