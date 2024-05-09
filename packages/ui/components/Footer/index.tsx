"use client"

import Link from "next/link"
import { slideInTop, stagger, useAnimations } from "../../utils/animations"
import { FooterProps } from "./types"
import clsx from "clsx"

const YEAR = new Date().getFullYear()

const Footer = ({ socialLinks }: FooterProps) => {
    const { ref, inView } = useAnimations()

    return (
        <footer className="">
            <section className="container flex flex-col gap-4 items-center py-10">
                <ul className="flex gap-6">
                    {socialLinks?.map((social, index) => (
                        <li key={index} ref={ref} style={stagger(index, 200)} className={""}>
                            <Link
                                href={social.link}
                                className="block h-fit p-1.5 border border-white rounded-xl bg-white hover:-translate-y-1 hover:drop-shadow-md transition-all duration-200 ease-in-out"
                            >
                                {social.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="text-white">Tristan Brattinga©, {YEAR}. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer
