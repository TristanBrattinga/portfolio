import * as React from "react"
import "../styles/global.css"
import { Preview } from "@storybook/react"
import "swiper/css"
import { raleway } from "web/src/lib/fonts"
import localFont from "next/font/local"

const ailerons = localFont({
    src: "../fonts/Ailerons-Typeface.otf",
    variable: "--font-ailerons",
    display: "swap",
})

const preview: Preview = {
    parameters: {
        layout: "fullscreen",
        globalTypes: {
            className: {
                defaultValue: "",
            },
            darkMode: {
                current: "light",
                dark: { appBg: "#000000" },
                light: { appBg: "#ffffff" },
            },
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globalTypes: {
        darkMode: {
            defaultValue: false, // Enable dark mode by default on all stories
        },
    },
    decorators: [
        Story => (
            <div className={`${ailerons.variable} ${raleway.variable} scroll-smooth`}>
                <Story />
            </div>
        ),
    ],
}

export default preview
