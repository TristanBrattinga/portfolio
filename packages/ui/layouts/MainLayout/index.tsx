"use client"

import * as React from "react"
import type { MainLayoutProps } from "./types"
import Header from "../../components/Header"
import ToTopButton from "../../components/ToTopButton"
import { Sidebar } from "../../components/Sidebar"

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <ToTopButton />
            <Sidebar content={<></>}></Sidebar>
            {/*<Cursor />*/}
        </>
    )
}

export default MainLayout
