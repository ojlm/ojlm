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
          docId: 'intro',
          position: 'left',
          label: 'Docs',
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
          title: 'Docs',
          items: [
            {
              label: '简介',
              to: '/docs',
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
