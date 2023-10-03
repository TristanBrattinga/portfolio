import React from "react"

import MainLayout from "ui/layouts/MainLayout";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">

            <body >
                    <MainLayout>
                        <main>{children}</main>
                    </MainLayout>
            </body>
        </html>
    )
}
