import 'ui/styles/global.css'
import 'swiper/css'
import React from 'react'
import MainLayout from 'ui/layouts/MainLayout'
import { ailerons, nohemi, raleway } from '@lib/fonts'
import { Providers } from './providers'
import { Viewport } from 'next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${ailerons.variable} ${raleway.variable} ${nohemi.variable}`} lang="en">
            <head>
                <title>Tristan's Portfolio</title>
                <meta
                    name="description"
                    content="This is the portfolio of Tristan Brattinga. Enjoy reading it and reach out when you want to work together!"
                />
            </head>
            <body>
                <Providers>
                    <MainLayout>{children}</MainLayout>
                </Providers>
            </body>
        </html>
    )
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#262642',
}
