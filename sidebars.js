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
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  languageSidebar: [
    {
      type: "doc",
      id: 'languages/java',
      label: 'Java'
    },
    {
      type: "doc",
      id: 'languages/javascript',
      label: 'Javascript'
    },
  ],
  reactSidebar: [
    {
      type: 'category',
      label: 'React',
      items: ['react/questions'],
    },
    {
      type: 'category',
      label: 'React Native',
      items: ['react/react-native/questions'],
    },
    {
      type: 'category',
      label: 'ReactJS',
      items: ['react/reactjs/questions'],
    },
    {
      type: 'category',
      label: 'Redux',
      items: ['react/redux/questions'],
    },
  ],
  javaSpringBootSidebar: [
    {
      type: 'category',
      label: 'Java Spring Boot',
      items: ['java-spring-boot/questions'],
    },
  ],
  otherSidebar: [
    {
      type: 'doc',
      id: 'others/REST',
    },
  ],
};

module.exports = sidebars;
