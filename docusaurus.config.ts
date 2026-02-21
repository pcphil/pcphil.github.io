import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Philip Chung',
  tagline: 'AI Specialist',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://pcphil.github.io',
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  organizationName: 'pcPhil',
  projectName: 'pcphil.github.io',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PC | Philip Chung',
      logo: {
        alt: 'Philip Chung Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/#about', label: 'About', position: 'left'},
        {to: '/#experience', label: 'Experience', position: 'left'},
        {to: '/#projects', label: 'Projects', position: 'left'},
        {to: '/agent-collection', label: 'Agent Collection', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pcphil',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/chungphilip96/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigate',
          items: [
            {label: 'About', to: '/#about'},
            {label: 'Experience', to: '/#experience'},
            {label: 'Projects', to: '/#projects'},
            {label: 'Agent Collection', to: '/agent-collection'},
            {label: 'Blog', to: '/blog'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: 'https://github.com/pcphil'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/chungphilip96/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Philip Chung.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
