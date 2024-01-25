"use client"

import * as React from "react"
import type { MainLayoutProps } from "./types"
import Header from "../../components/Header"
import ToTopButton from "../../components/ToTopButton"
import { Sidebar } from "../../components/Sidebar"
import { useStore } from "web/src/lib/context/store-context"
import Cursor from "../../components/Cursor"

const MainLayout = ({ children }: MainLayoutProps) => {
    const { darkMode } = useStore()
    return (
        <>
            <div className={`${darkMode ? "dark" : "light"}`}>
                <Header />
                {children}
                <ToTopButton />
                <Sidebar content={<></>}></Sidebar>
                {/*<Cursor />*/}
            </div>
        </>
    )
}

export default MainLayout
