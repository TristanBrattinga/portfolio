"use client"

import Link from "next/link"
import ChevronIcon from "../../icons/ChevronIcon"

const Header = () => {
    return (
        <div
            className={
                "flex px-[60px] relative group py-2 justify-between items-center after:absolute after:inset-x-0 after:bottom-0 after:h-[.5px] after:bg-white after:scale-x-0 after:transition-transform after:duration-500 after:hover:scale-x-100 after:origin-center"
            }
        >
            <Link href={"/"}>
                <h1 className={"text-center font-ailerons text-[35px] text-white "}>Tristan Brattinga</h1>
            </Link>

            <ul
                className={
                    "ml-auto flex justify-between items-center gap-x-6 text-white font-semibold uppercase text-[24px] -translate-y-12 group-hover:translate-y-0 transition-all duration-500"
                }
            >
                <li className={"hover:text-[#759FBC] transition-colors duration-200"}>
                    <Link href={"/work"}>Work</Link>
                </li>
                <li className={"hover:text-[#759FBC] transition-colors duration-200"}>
                    <Link href={"/about"}>About</Link>
                </li>
                <li className={"hover:text-[#759FBC] transition-colors duration-200"}>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>

            <ChevronIcon className={"rotate-270 ml-2"} />
        </div>
    )
}

export default Header
