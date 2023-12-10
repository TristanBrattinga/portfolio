import "ui/styles/global.css"
import React from "react"
import MainLayout from "ui/layouts/MainLayout"
import { ailerons, raleway } from "@lib/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${ailerons.className} ${raleway.variable} scroll-smooth`} lang="en">
            <body>
                <MainLayout>
                    <main>{children}</main>
                </MainLayout>
            </body>
        </html>
    )
}
