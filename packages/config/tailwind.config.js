/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    variants: {
        margin: ["responsive", "hover", "last"],
    },
    darkMode: "class",
    theme: {
        fontSize: {
            sm: ["14px"],
            base: ["18px"],
            xl: ["24px"],
            "2xl": ["60px"],
            "3xl": ["60px"],
        },
        container: {
            center: true,
            padding: "20px",
            screens: {
                xl: "1440px",
            },
        },
        extend: {
            colors: {},
            fontFamily: {
                satoshi: ["var(--font-satoshi)", ...fontFamily.sans],
                champion: ["var(--font-champion)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
}
