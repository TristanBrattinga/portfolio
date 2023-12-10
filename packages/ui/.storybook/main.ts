const path = require("path")
const envPath = path.resolve(__dirname, "../.env")
const storybookDotenv = require("dotenv").config({
    path: envPath,
})
export default {
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
    docs: {
        autodocs: false,
    },
    framework: {
        name: "@storybook/nextjs",
        options: {
            fastRefresh: true,
        },
    },
    staticDirs: ["../static"],
    stories: ["../stories/**/*.stories.tsx"],
    env: config => {
        return {
            ...config,
            ...storybookDotenv.parsed,
        }
    },
    webpackFinal: async config => {
        config.optimization.minimize = false
        return config
    },
}
