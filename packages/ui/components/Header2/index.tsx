"use client"

import { Header2Props } from "./types"
import Link from "next/link"
import { useState } from "react"

const Header = ({ links }: Header2Props) => {
    const [active, setActive] = useState("")

    return (
        <header>
            <nav>
                <ul className="flex rounded-full bg-slate-500 gap-4 p-1 w-fit after:bg-red-500 after:hover:left-72 after:block after:w-20 after:h-10 after:rounded-full after:absolute after:left-1 after:transition-all after:duration-300 after:ease-in-out">
                    {links?.map((link, index) => (
                        <li key={index} className="hover:bg-slate-600 rounded-full">
                            <Link
                                onClick={() => setActive(link.label)}
                                href={"/" + link.link}
                                className="block w-full px-4 py-2"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
