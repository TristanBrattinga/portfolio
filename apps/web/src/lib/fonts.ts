import { Raleway } from "next/font/google"
import localFont from "next/font/local"

export const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
    display: "swap",
    style: ["normal"],
})

export const ailerons = localFont({
    src: "../../../../packages/ui/static/fonts/Ailerons-Typeface.otf",
    variable: "--font-ailerons",
    display: "swap",
})

export const nohemi = localFont({
    src: "../../../../packages/ui/static/fonts/Nohemi-VF.ttf",
    variable: "--font-nohemi",
    display: "swap",
})
