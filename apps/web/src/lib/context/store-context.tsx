"use client"

import React, { MouseEvent, MouseEventHandler, PropsWithChildren, useEffect, useState } from "react"
import { useBoolean } from "ui/hooks/useBoolean"

interface StoreContext {
    darkMode: boolean
    darkModeToggle: () => void

    menuIsOpen: boolean
    closeMenu: () => void
    openMenu: () => void
}

const StoreContext = React.createContext<StoreContext | null>(null)

export const useStore = () => {
    const context = React.useContext(StoreContext)
    if (context === null) {
        throw new Error("useStore must be used within a StoreProvider")
    }
    return context
}
export const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const { value: menuIsOpen, setFalse: closeMenu, setTrue: openMenu } = useBoolean(false)

    const darkModeToggle = () => {
        setDarkMode(!darkMode)
    }

    return (
        <StoreContext.Provider
            value={{
                darkMode,
                darkModeToggle,
                closeMenu,
                openMenu,
                menuIsOpen,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
