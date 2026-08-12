import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EndToEndLabCR",
  tagline: "A collaborative space for building modern fullstack applications.",

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://endtoendlabcr.github.io",
  // For GitHub pages deployment, the baseUrl is often '/<projectName>/'
  baseUrl: "/endtoendlabcr-docs/",

  // GitHub pages deployment config.
  organizationName: "EndToEndLabCR",
  projectName: "endtoendlabcr-docs",

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/EndToEndLabCR/endtoendlabcr-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "EndToEndLabCR",
      logo: {
        alt: "EndToEndLabCR Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/EndToEndLabCR/endtoendlabcr-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/nGzHazdd",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@endtoendlabcr",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/EndToEndLabCR/endtoendlabcr-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EndToEndLabCR, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
