// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DBM Mods Documentation',
  tagline: 'For all your dbm mod development needs.',
  url: 'https://dbm-network.github.io/',
  baseUrl: '/documentation/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dbm-network', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DBM Mods Documentation',
        logo: {
          alt: 'DBM-Network-Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'DiscordBotMaker216/modules',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/DiscordBotMaker216',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'DBM Mods Discord',
                href: 'https://discord.gg/djcvWRpgHm',
              },
              {
                label: 'Discord Bot Maker Discord',
                href: 'https://discord.gg/DMDvzSe',
              },
              {
                label: 'Raw Data Sharing',
                href: 'https://rawdata.dbm-network.org/commands',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'Mods',
                href: 'https://github.com/dbm-network/mods',
              },
              {
                label: 'Themes',
                href: 'https://github.com/dbm-network/themes',
              },
              {
                label: 'Translations',
                href: 'https://github.com/dbm-network/translations',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DBM Network. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'DiscordBotMaker2.1.6',
        // tsconfig: 'tsconfig.json',
        entryPoints: ['./DBM/2.1.6/bot.d.ts'],
        entryPointStrategy: 'expand',
        disableSources: true,
        hideGenerator: true,
        includeVersion: true,
        // @ts-ignore
        name: 'DBM bot.js',
        excludeExternals: true,
        plugin: ['typedoc-plugin-merge-modules'],
        categorizeByGroup: false,

        // @ts-ignore
        out: `DiscordBotMaker216`,
        sidebar: {
          // @ts-ignore
          categoryLabel: 'Discord Bot Maker - 2.1.6',
          position: 0,
          fullNames: false,
        },
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        language: "en",

        lunr: {
          tokenizerSeparator: /[\s\-]+/,
          b: 0.75,
          k1: 1.2,
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        }
      }
    ]
  ]
};

module.exports = config;
