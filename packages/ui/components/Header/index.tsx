'use client'

import Link from 'next/link'
import ChevronIcon from '../../icons/ChevronIcon'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import HamburgerMenuIcon from '../../icons/HamburgerMenuIcon'
import { useStore } from 'web/src/lib/context/store-context'
import { slideInLeft, useAnimations } from '../../utils/animations'

const Header = () => {
    const { ref, inView } = useAnimations()
    const [isScrolled, setIsScrolled] = useState(false)
    const { openMenu } = useStore()

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={clsx('block sticky top-0 w-full transition-all duration-300', {
                'bg-black/25': isScrolled,
                'bg-transparent': !isScrolled,
            })}
        >
            <div className={clsx('container flex group py-4 w-full justify-between items-center')}>
                <Link href={'/'}>
                    <h1
                        ref={ref}
                        className={clsx(
                            'text-start lg:text-center font-ailerons text-2xl md:text-3xl lg:text-4xl',
                            slideInLeft(inView),
                        )}
                    >
                        Tristan Brattinga
                    </h1>
                </Link>
                <button onClick={() => openMenu()} className=" md:hidden">
                    <HamburgerMenuIcon />
                </button>
                <ul className={clsx('flex justify-between items-center gap-x-6 font-semibold uppercase text-2xl')}>
                    <li className={'hover:text-clr-accent transition-all duration-200'}>
                        <Link href={'/work'}>Work</Link>
                    </li>
                    <li className={'hover:text-clr-accent transition-colors duration-200'}>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li className={'hover:text-clr-accent transition-colors duration-200'}>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
