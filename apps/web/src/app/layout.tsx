import "ui/styles/global.css"
import React from "react"
import MainLayout from "ui/layouts/MainLayout"
import { ailerons, nohemi, raleway } from "@lib/fonts"
import { Providers } from "./providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${ailerons.variable} ${raleway.variable} ${nohemi.variable}`} lang="en">
            <body>
                <Providers>
                    <MainLayout>{children}</MainLayout>
                </Providers>
            </body>
        </html>
    )
}
