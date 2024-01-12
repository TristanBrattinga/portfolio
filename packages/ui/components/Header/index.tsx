"use client"

import Link from "next/link"
import ChevronIcon from "../../icons/ChevronIcon"
import { useEffect, useState } from "react"
import clsx from "clsx"
import HamburgerMenuIcon from "../../icons/HamburgerMenuIcon"
import { useStore } from "web/src/lib/context/store-context"
import { slideInLeft, useAnimations } from "../../utils/animations"

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
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section className={"fixed top-0 mix-blend-difference"}>
            <div
                className={clsx(
                    "flex group w-full fixed py-4 container justify-between items-center after:hidden lg:after:block after:absolute after:inset-x-0 after:bottom-0 after:h-[.5px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:hover:scale-x-100 after:origin-center",
                )}
            >
                <Link href={"/"}>
                    <h1
                        ref={ref}
                        className={clsx(
                            "text-start lg:text-center font-ailerons text-2xl md:text-3xl lg:text-4xl text-white",
                            slideInLeft(inView),
                        )}
                    >
                        Tristan Brattinga
                    </h1>
                </Link>
                <button onClick={() => openMenu()} className=" md:hidden">
                    <HamburgerMenuIcon />
                </button>
                <ul
                    className={clsx(
                        "hidden ml-auto md:flex justify-between items-center gap-x-6 text-white font-semibold uppercase text-2xl translate-y-0 lg:-translate-y-12 lg:group-hover:translate-y-0 transition-all duration-300",
                        {
                            "translate-y-0": isScrolled,
                            "-translate-y-12": !isScrolled,
                        },
                    )}
                >
                    <li className={"hover:text-[#759FBC] hover:scale-125 transition-all duration-200"}>
                        <Link href={"/work"}>Work</Link>
                    </li>
                    <li className={"hover:text-[#759FBC] transition-colors duration-200"}>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className={"hover:text-[#759FBC] transition-colors duration-200"}>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <ChevronIcon
                    className={clsx(
                        "hidden lg:block absolute right-40 -rotate-90 group-hover:opacity-0 transition-all duration-200 -z-10",
                        {
                            hidden: isScrolled,
                        },
                    )}
                />
            </div>
        </section>
    )
}

export default Header
