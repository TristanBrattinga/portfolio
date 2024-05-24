'use client'

import React, { PropsWithChildren } from 'react'
import { useBoolean } from 'ui/hooks/useBoolean'

interface MenuContext {
    menuIsShown: boolean
    closeMenu: () => void
    showMenu: () => void
}

const MenuContext = React.createContext<MenuContext | null>(null)

export const useMenu = () => {
    const context = React.useContext(MenuContext)
    if (context === null) {
        throw new Error('useMenu must be used within a MenuProvider')
    }
    return context
}

export const MenuProvider = ({ children }: PropsWithChildren<{}>) => {
    const { value: menuIsShown, setFalse: closeMenu, setTrue: showMenu } = useBoolean(false)

    return (
        <MenuContext.Provider
            value={{
                menuIsShown,
                closeMenu,
                showMenu,
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}
