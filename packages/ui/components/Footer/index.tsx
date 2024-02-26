"use client"

import Button from "../Button"
import Link from "next/link"
import { slideInTop, stagger, useAnimations } from "../../utils/animations"
import { FooterProps } from "./types"
import clsx from "clsx"

const YEAR = new Date().getFullYear()

const Footer = ({ socialLinks }: FooterProps) => {
    const { ref, inView } = useAnimations()

    return (
        <footer className="">
            <section className="container flex flex-col gap-4 items-center border-t border-white/25 py-10">
                <ul className="flex gap-4">
                    {socialLinks?.map((social, index) => (
                        <li
                            key={index}
                            ref={ref}
                            style={stagger(index, 200)}
                            className={clsx("block", slideInTop(inView))}
                        >
                            <Button as={Link} target="_blank" href={social.link} variant="social">
                                {social.icon}
                            </Button>
                        </li>
                    ))}
                </ul>
                <p className="text-white">Tristan Brattinga©, {YEAR}. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer
