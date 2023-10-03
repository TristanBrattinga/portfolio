const path = require("path");
const envPath = path.resolve(__dirname, "../.env");
const storybookDotenv = require("dotenv").config({
  path: envPath
});
export default {
  addons: ['storybook-tailwind-dark-mode', "@storybook/addon-links", "@storybook/preset-typescript", "@storybook/addon-essentials", "@storybook/addon-interactions", {
    name: "@storybook/addon-postcss",
    options: {
      postcssLoaderOptions: {
        implementation: require("postcss")
      }
    }
  }],
  docs: {
    autodocs: false
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      fastRefresh: true,
      builder: {
        lazyCompilation: true,
        fsCache: true
      }
    }
  },
  staticDirs: ["../static"],
  stories: ["../stories/**/*.stories.tsx"],
  env: config => {
    return {
      ...config,
      ...storybookDotenv.parsed
    };
  }
};