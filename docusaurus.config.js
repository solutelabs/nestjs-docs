/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Nestjs Boilerplate",
  tagline: "Production Grade Nestjs Boilerplate",
  url: "https://solutelabs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Solutelabs", // Usually your GitHub org/user name.
  projectName: "nestjs-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "NestJS Boilerplate",
      items: [
        {
          href: "https://github.com/solutelabs/nestjs-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/solutelabs/nestjs-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SoluteLabs. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
