'use client'

import Link from 'next/link'
import { slideInTop, stagger, useAnimations } from '../../utils/animations'
import { FooterProps } from './types'
import clsx from 'clsx'
import Button from '../Button'

const YEAR = new Date().getFullYear()

const Footer = ({ socialLinks }: FooterProps) => {
    const { ref, inView } = useAnimations()

    return (
        <footer className="">
            <section className="container flex flex-col gap-4 items-center py-10">
                <ul className="flex gap-6">
                    {socialLinks?.map((social, index) => (
                        <li key={index} ref={ref} style={stagger(index, 200)} className={clsx(slideInTop(inView))}>
                            <Button as={Link} href={social.link} variant="social">
                                {social.icon}
                            </Button>
                        </li>
                    ))}
                </ul>
                <p>Tristan Brattinga©, {YEAR}. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer
