/**

* Creating a sidebar enables you to:

- create an ordered group of docs

- render a sidebar for each doc of that group

- provide next/previous navigation

  

The sidebars can be generated from the filesystem, or explicitly defined here.

  

Create as many sidebars as you want.

*/

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",

    {
      type: "category",

      label: "조직 운영",

      items: [
        "services/services",
        "services/change-process-tools",
        "services/no-mid-leadership",
        "services/team-conflicts",
      ],
    },
  ], // Added a closing bracket and a comma here
};

export default sidebars;
