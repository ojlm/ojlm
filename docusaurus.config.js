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
          label: 'Tutorial',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/ojlm/ojlm',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ojlm/ojlm/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ojlm/ojlm/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
