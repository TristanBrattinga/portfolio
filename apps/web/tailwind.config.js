/** @type {import('tailwindcss').Config} */

const defaultConfig = require("config/tailwind.config")
module.exports = {
    ...defaultConfig,
    content: [
        "../../packages/ui/components/**/*.{js,ts,tsx}",
        "../../packages/ui/icons/**/*.tsx",
        "../../packages/ui/layouts/**/*.tsx",
        "../../packages/ui/stories/**/*.tsx",
        "../../packages/ui/utils/**/*.{ts,tsx}",
        "./src/components/*/*.{ts,tsx}",
        "./src/app/**/*.{ts,tsx}",
    ],
}
