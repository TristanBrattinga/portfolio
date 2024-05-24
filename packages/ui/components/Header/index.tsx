'use client'

import { Header2Props } from './types'
import Link from 'next/link'
import Toggle from '../Toggle'
import clsx from 'clsx'
import { slideInLeft, useAnimations } from '../../utils/animations'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useStore } from 'web/src/lib/context/store-context'

const Header = ({ links }: Header2Props) => {
    const { ref, inView } = useAnimations()
    const path = usePathname()
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
        <header className="w-full py-4 sticky top-0 z-10 group">
            <nav className="container flex justify-between items-center">
                <div className="w-1/3">
                    <Link href={'/'} className="block w-fit">
                        <h1 ref={ref} className={clsx(' font-ailerons text-2xl md:text-3xl', slideInLeft(inView))}>
                            Tristan Brattinga
                        </h1>
                    </Link>
                </div>
                <div
                    className={clsx('flex justify-center w-1/3 transition-all duration-500', {
                        '-translate-y-14 group-hover:translate-y-0': isScrolled,
                        'translate-y-0': !isScrolled,
                    })}
                >
                    <ul className="flex rounded-full bg-slate-600 gap-2 py-1 px-2 w-fit">
                        {links?.map((link, index) => (
                            <li key={index} className="hover:bg-slate-600 rounded-full">
                                <Link href={link.link} className="block w-full px-4 py-2 text-clr-text">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/3 flex justify-end">
                    <Toggle />
                </div>
            </nav>
        </header>
    )
}

export default Header
