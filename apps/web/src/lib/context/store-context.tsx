'use client'

import React, { PropsWithChildren, useState } from 'react'

interface StoreContext {
    darkMode: boolean
    darkModeToggle: () => void
}

const StoreContext = React.createContext<StoreContext | null>(null)

export const useStore = () => {
    const context = React.useContext(StoreContext)
    if (context === null) {
        throw new Error('useStore must be used within a StoreProvider')
    }
    return context
}
export const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const darkModeToggle = () => {
        setDarkMode(!darkMode)
    }

    return (
        <StoreContext.Provider
            value={{
                darkMode,
                darkModeToggle,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
