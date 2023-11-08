"use client"

import * as React from "react"
import type { MainLayoutProps } from "./types"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ToTopButton from "../../components/ToTopButton"

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <ToTopButton />
            <Footer />
        </>
    )
}

export default MainLayout
