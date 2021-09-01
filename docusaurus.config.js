const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '欧几里喵',
  tagline: '喵喵喵~~~',
  url: 'https://ojlm.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ojlm.jpeg',
  organizationName: 'ojlm', // Usually your GitHub org/user name.
  projectName: 'ojlm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '欧几里喵',
      logo: {
        alt: 'Logo',
        src: 'img/ojlm.jpeg',
      },
      items: [
        {
          type: 'doc',
          docId: 'api/api',
          position: 'left',
          label: 'Api',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'pea/pea',
          label: 'Pea',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'ui/ui',
          label: 'UI',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/ojlm/ojlm',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    hideableSidebar: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'Api',
              to: '/docs/api',
            },
            {
              label: 'Pea',
              to: '/docs/pea',
            },
            {
              label: 'UI',
              to: '/docs/ui',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/ojlm',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ojlm001',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ojlm`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    googleAnalytics: {
      trackingID: 'UA-113487425-1',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/ojlm/ojlm/edit/master/docs/',
        },
        // blog: {
        // showReadingTime: true,
        // editUrl: 'https://github.com/ojlm/ojlm/edit/master/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
