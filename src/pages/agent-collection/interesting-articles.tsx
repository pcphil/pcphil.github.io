import {useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SearchFilter from '@site/src/components/SearchFilter';
import styles from './agent-collection.module.css';

interface Article {
  title: string;
  source: string;
  tags: string[];
  url: string;
  description: string;
}

// TODO: Add your real articles here
const articles: Article[] = [
  {
    title: 'Attention Is All You Need',
    source: 'arXiv',
    tags: ['Transformers', 'Deep Learning'],
    url: 'https://arxiv.org/abs/1706.03762',
    description:
      'The foundational paper introducing the Transformer architecture that revolutionized NLP and AI.',
  },
  {
    title: 'Building Effective Agents',
    source: 'Anthropic',
    tags: ['Agents', 'Best Practices'],
    url: 'https://www.anthropic.com/engineering/building-effective-agents',
    description:
      'Practical guidance on designing and building reliable AI agent systems.',
  },
  {
    title: 'Prompt Engineering Guide',
    source: 'OpenAI',
    tags: ['Prompting', 'LLMs'],
    url: 'https://platform.openai.com/docs/guides/prompt-engineering',
    description:
      'Strategies and tactics for getting better results from large language models.',
  },
];

function matchesSearch(article: Article, query: string): boolean {
  const q = query.toLowerCase();
  return (
    article.title.toLowerCase().includes(q) ||
    article.description.toLowerCase().includes(q) ||
    article.source.toLowerCase().includes(q) ||
    article.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export default function InterestingArticles(): ReactNode {
  const [search, setSearch] = useState('');

  const filtered = search
    ? articles.filter((a) => matchesSearch(a, search))
    : articles;

  return (
    <Layout
      title="Interesting Articles"
      description="Noteworthy reads on AI and intelligent agents">
      <div className={styles.page}>
      <div className={styles.pageHeader}>
        <Heading as="h1" className={styles.pageTitle}>
          Interesting Articles
        </Heading>
        <p className={styles.pageDescription}>
          Noteworthy reads on AI, machine learning, and the future of
          intelligent agents.
        </p>
      </div>
      <div className={styles.content}>
        <SearchFilter
          placeholder="Search articles..."
          value={search}
          onChange={setSearch}
        />
        <div className={styles.grid}>
          {filtered.length === 0 && (
            <p className={styles.noResults}>
              No articles match your search.
            </p>
          )}
          {filtered.map((a) => (
            <a
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}>
              <span className={styles.source}>{a.source}</span>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <div className={styles.tags}>
                {a.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.cardDescription}>{a.description}</p>
            </a>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
}
