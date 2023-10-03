"use client"

import * as React from "react"
import type { MainLayoutProps } from "./types"

const MainLayout = ({ children}: MainLayoutProps) => {
    return (<section>{children}</section>
    )
}

export default MainLayout
