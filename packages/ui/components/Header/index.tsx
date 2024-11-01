'use client'

import { HeaderProps } from './types'
import Link from 'next/link'
import clsx from 'clsx'
import { slideInTop, stagger, useAnimations } from '../../utils/animations'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import HamburgerMenuIcon from '../../icons/HamburgerMenuIcon'
import { useMenu } from 'web/src/lib/context/menu-context'

const Header = ({ links, logoText }: HeaderProps) => {
    const { ref, inView } = useAnimations()
    const path = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const { showMenu } = useMenu()

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
        <header className="w-full py-4 sticky top-0 z-10 group">
            <nav className="container flex justify-between items-center">
                <div className="w-full md:w-1/3">
                    <Link href={'/'} className="block w-fit">
                        <h1 className={clsx('text-nowrap font-ailerons text-2xl md:text-3xl')}>Tristan Brattinga</h1>
                    </Link>
                </div>
                <div
                    className={clsx('hidden lg:flex justify-center w-1/3 transition-all duration-500', {
                        '-translate-y-14 group-hover:translate-y-0': isScrolled,
                        'translate-y-0': !isScrolled,
                    })}
                >
                    {links.length > 0 && (
                        <ul className="hidden md:flex rounded-full bg-clr-accent gap-2 py-1 px-4 w-fit">
                            {links?.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.link}
                                        className={clsx('block text-center w-20 py-2 text-black rounded-full', {
                                            'bg-clr-primary': path === link.link || path.startsWith(link.link + '/'),
                                            'bg-transparent': !(path === link.link || path.startsWith(link.link + '/')),
                                        })}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/*<div className="md:w-1/3 flex justify-end">*/}
                {/*    <button*/}
                {/*        className="lg:hidden"*/}
                {/*        aria-label="Toggle hamburger menu"*/}
                {/*        onClick={() => {*/}
                {/*            showMenu()*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <HamburgerMenuIcon />*/}
                {/*    </button>*/}
                {/*</div>*/}
            </nav>
        </header>
    )
}

export default Header
