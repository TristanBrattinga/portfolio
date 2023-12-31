import "ui/styles/global.css"
import React from "react"
import MainLayout from "ui/layouts/MainLayout"
import { ailerons, raleway } from "@lib/fonts"
import { Providers } from "./providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${ailerons.variable} ${raleway.variable} scroll-smooth`} lang="en">
            <body>
                <Providers>
                    <MainLayout>
                        <main>{children}</main>
                    </MainLayout>
                </Providers>
            </body>
        </html>
    )
}
