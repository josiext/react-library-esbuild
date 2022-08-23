module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(tsx|ts|jsx|js)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
