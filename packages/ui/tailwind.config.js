/** @type {import('tailwindcss').Config} */
const defaultConfig = require("config/tailwind.config")

module.exports = {
    ...defaultConfig,
    content: ["./components/**/*.{js,ts,tsx}", "./layouts/**/*.tsx", "./stories/**/*.tsx", "./utils/**/*.{ts,tsx}"],
}
