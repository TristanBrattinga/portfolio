"use client"

import * as React from "react"
import type { MainLayoutProps } from "./types"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ToTopButton from "../../components/ToTopButton"
import { Sidebar } from "../../components/Sidebar"

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <ToTopButton />
            <Sidebar content={<></>}></Sidebar>
        </>
    )
}

export default MainLayout
