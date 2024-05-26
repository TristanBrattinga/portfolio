'use client'

import Menu from '../components/Menu'

import type { Meta } from '@storybook/react'
import HamburgerMenuIcon from '../icons/HamburgerMenuIcon'
import { useMenu } from 'web/src/lib/context/menu-context'

const meta: Meta<typeof Menu> = {
    title: 'Components/Menu',
    component: Menu,
}
export default meta

export const primary = () => {
    const { showMenu } = useMenu()

    return (
        <>
            <div className="m-10 cursor-pointer" onClick={() => showMenu()}>
                <HamburgerMenuIcon />
            </div>
            <Menu></Menu>
        </>
    )
}
