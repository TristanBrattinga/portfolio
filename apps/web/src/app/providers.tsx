"use client"

import { StoreProvider } from "@lib/context/store-context"
import { ReactNode } from "react"

export const Providers = ({ children }: { children: ReactNode }) => {
    return <StoreProvider>{children}</StoreProvider>
}
