// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "어떤 IT 도구를 선택해야 할지 고민이신가요?",
  tagline:
    "조직과 비즈니스 상황에 최적화된 IT 시스템을 추천해서 조직 업무 프로세스 문제를 해결해 드립니다.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    // Used for publishing and more
    companyName: "Kooslab",
    // tagline_02:
    //   "이후 쉽게 운영 유지 개선하실 수 있도록 매뉴얼 제공 및 교육을 제공해 드립니다.",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // color & theme configuration
      defaultMode: "dark",
      disableSwitch: false,
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Kooslab",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "디지털 핸드북",
          },
          { to: "/blog", label: "고객 사례", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      // Declare some <meta> tags
      metadata: [
        {
          name: "keywords",
          content:
            "IT 도구, 생산성 향상, 조직 운영 컨설팅, 조직 업무 프로세스 세팅",
        },
        {
          name: "description",
          content:
            "쿠스랩은 IT 도구 소개, 교육 콘텐츠 공유, 강의 및 컨설팅을 통해 조직의 업무 생산성을 향상시키는 서비스를 제공합니다.",
        },
        {
          name: "og:title",
          content: "쿠스랩 - 조직 업무 생산성을 개선해 보세요",
        },
        {
          name: "og:description",
          content:
            "IT 도구를 통한 생산성 향상 방법을 배우고, 쿠스랩의 교육과 컨설팅으로 조직의 업무 효율을 높이세요.",
        },
      ],
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `쿠스랩 | 대표이사: 구일모 | 주소: 서울시 서래로 2길 39, 501호 | 사업자등록번호: 199-36-01098 | 통신판매번호: 2024-서울서초-0845 | Contact: johnnykoo@kooslab.net`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
