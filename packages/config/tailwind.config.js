/** @type {import('tailwindcss').Config} */

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
            padding: "60px",
            screens: {
                xl: "1440px",
            },
        },
        extend: {
            colors: {},
            fontFamily: {
                ailerons: ["var(--font-ailerons)"],
            },
        },
    },
    plugins: [],
}
