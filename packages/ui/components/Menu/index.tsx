'use client'

import { MenuProps } from './types'
import clsx from 'clsx'
import { scrollLock } from '../../utils/scrollLock'
import { useEffect } from 'react'
import { useMenu } from 'web/src/lib/context/menu-context'
import { sidebarSlideIn, stagger } from '../../utils/animations'
import { handleEscKeyPress } from '../../utils/handleEscKeyPress'

const Menu = ({}: MenuProps) => {
    const { menuIsShown, closeMenu } = useMenu()
    const items = [1, 2, 3]

    useEffect(() => {
        if (menuIsShown) {
            scrollLock.enable()
            document.addEventListener('keydown', e => handleEscKeyPress(e, () => closeMenu()))
        } else {
            scrollLock.disable()
            document.removeEventListener('keydown', e => handleEscKeyPress(e, () => closeMenu()))
        }

        return () => {
            document.removeEventListener('keydown', e => handleEscKeyPress(e, () => closeMenu()))
        }
    }, [menuIsShown])

    return (
        <aside>
            <div
                onClick={closeMenu}
                className={clsx('ease fixed inset-0 z-10 h-screen w-full bg-black/30 transition-all duration-700', {
                    'opacity-100': menuIsShown,
                    'pointer-events-none opacity-0': !menuIsShown,
                })}
            ></div>
            <ul className="fixed right-0 top-0 z-20 [&>li:nth-of-type(1)]:p-56 [&>li:nth-of-type(1)]:bg-clr-secondary [&>li:nth-of-type(2)]:bg-clr-accent [&>li:nth-of-type(3)]:bg-clr-primary [&>li:nth-of-type(2)]:p-64 [&>li:nth-of-type(3)]:p-72 [&>li:nth-of-type(1)]:z-30 [&>li:nth-of-type(2)]:z-20 [&>li]:absolute [&>li]:right-0 [&>li]:top-0 [&>li]:rounded-bl-full">
                {items.map(index => (
                    <li
                        style={stagger(index, menuIsShown ? 100 : 25)}
                        className={clsx('', sidebarSlideIn(menuIsShown))}
                    ></li>
                ))}
            </ul>
        </aside>
    )
}

export default Menu
