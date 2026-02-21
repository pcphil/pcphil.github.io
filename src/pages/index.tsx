import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import AboutSection from '@site/src/components/AboutSection';
import ExperienceSection from '@site/src/components/ExperienceSection';
import ProjectsSection from '@site/src/components/ProjectsSection';
import LatestPosts from '@site/src/components/LatestPosts';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Thank you for visiting my portfolio!"
      description="Philip Chung - AI Specialist portfolio and blog">
      <HeroSection />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <LatestPosts />
      </main>
    </Layout>
  );
}
