import localFont from "next/font/local"
import "ui/styles/global.css"
import React from "react"
import MainLayout from "ui/layouts/MainLayout"

const ailerons = localFont({
    src: [
        {
            path: "../fonts/Ailerons-Typeface.otf",
            weight: "400",
        },
    ],
    variable: "--font-ailerons",
    display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${ailerons.className} scroll-smooth`} lang="en">
            <body>
                <MainLayout>
                    <main>{children}</main>
                </MainLayout>
            </body>
        </html>
    )
}
