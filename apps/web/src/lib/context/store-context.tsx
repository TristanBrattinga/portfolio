"use client"

import React, { MouseEvent, MouseEventHandler, PropsWithChildren, useEffect, useState } from "react"
import { useBoolean } from "ui/hooks/useBoolean"

interface StoreContext {
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
    const { value: menuIsOpen, setFalse: closeMenu, setTrue: openMenu } = useBoolean(false)

    return (
        <StoreContext.Provider
            value={{
                closeMenu,
                openMenu,
                menuIsOpen,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
