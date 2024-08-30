import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Travelbot Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  themes: ["@docusaurus/theme-mermaid"],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/travelbot-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "seven-1-travelbot", // Usually your GitHub org/user name.
  projectName: "travelbot-docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/seven-1-travelbot/travevelbot-docs/tree/main",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Travelbot",
      logo: {
        alt: "Seven-1 logo",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/seven-1-travelbot/travelbot-docs",
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
              label: "Concept Design",
              to: "/concept-design/overview",
            },
            {
              label: "Technical Design",
              to: "/implementation/overview",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Travelbot, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
