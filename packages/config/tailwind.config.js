/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    variants: {
        margin: ["responsive", "hover", "last"],
    },
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "60px",
            screens: {
                xl: "1440px",
            },
        },
        extend: {
            colors: {},
            fontFamily: {
                ailerons: ["var(--font-ailerons)", ...fontFamily.sans],
                raleway: ["var(--font-raleway)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
}
