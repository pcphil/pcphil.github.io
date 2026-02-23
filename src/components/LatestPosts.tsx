import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import ScrollReveal from './ScrollReveal';
import styles from './LatestPosts.module.css';

interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

// TODO: Update this array as you write new blog posts,
// or replace with a dynamic Docusaurus plugin approach later.
const posts: Post[] = [
  {
    title: 'Best Coding Assistant',
    date: 'February 22, 2026',
    slug: '/blog/claude-code',
    excerpt: 'Why this coding assistant is the best',
  },
];

export default function LatestPosts() {
  return (
    <section id="latest-posts" className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <Heading as="h2" className={styles.heading}>
            Latest Posts
          </Heading>
        </ScrollReveal>
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 100}>
              <Link to={post.slug} className={styles.card}>
                <span className={styles.date}>{post.date}</span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className={styles.viewAll}>
            <Link to="/blog" className="button button--outline button--primary">
              View All Posts
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
