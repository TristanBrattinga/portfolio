/** @type {import('tailwindcss').Config} */
const { fontFamily, screens } = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    variants: {
        margin: ["responsive", "hover", "last"],
    },
    darkMode: "class",
    theme: {
        screens: {
            ...screens,
            xl: "1440px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "16px",
                xl: "40px",
            },
        },
        extend: {
            screens: {
                lg: "1200px",
                xl: "1440px",
            },

            colors: {
                "grey-base": "#202124",
            },
            fontFamily: {
                ailerons: ["var(--font-ailerons)", ...fontFamily.sans],
                raleway: ["var(--font-raleway)", ...fontFamily.sans],
                nohemi: ["var(--font-nohemi)", ...fontFamily.sans],
            },
            keyframes: {
                slideDownAndFade: {
                    from: { opacity: 0, transform: "translateY(-2px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                slideLeftAndFade: {
                    from: { opacity: 0, transform: "translateX(2px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                },
                slideUpAndFade: {
                    from: { opacity: 0, transform: "translateY(2px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                slideRightAndFade: {
                    from: { opacity: 0, transform: "translateX(-2px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                },
            },
            animation: {
                slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
    plugins: [],
}
