'use client'

import { StoreProvider } from '@lib/context/store-context'
import { ReactNode } from 'react'
import { MenuProvider } from '@lib/context/menu-context'

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <MenuProvider>
            <StoreProvider>{children}</StoreProvider>
        </MenuProvider>
    )
}
