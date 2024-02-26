"use client"
import { SidebarProps } from "./types"
import clsx from "clsx"
import { sidebarSlideIn } from "../../utils/animations"
import { useStore } from "web/src/lib/context/store-context"
import { scrollLock } from "../../utils/scrollLock"
import { useEffect } from "react"
import CloseIcon from "../../icons/CloseIcon"
import UserIcon from "../../icons/UserIcon"
import ChatIcon from "../../icons/ChatIcon"
import Link from "next/link"

export const Sidebar = ({ content }: SidebarProps) => {
    const { menuIsOpen, closeMenu } = useStore()

    useEffect(() => {
        if (menuIsOpen) {
            scrollLock.enable()
        } else {
            scrollLock.disable()
        }
    }, [menuIsOpen])

    return (
        <div>
            <div
                onClick={closeMenu}
                className={clsx("ease fixed inset-0 z-40 h-screen w-full bg-black/30 transition-all duration-700", {
                    "opacity-100": menuIsOpen,
                    "pointer-events-none opacity-0": !menuIsOpen,
                })}
            ></div>
            <div
                className={clsx(
                    "flex flex-col items-center bg-blue-950 fixed right-0 top-0 z-50 h-screen p-5 w-1/5",
                    sidebarSlideIn(menuIsOpen),
                )}
            >
                <div className="cursor-pointer mb-10" onClick={closeMenu}>
                    <CloseIcon color="white" />
                </div>
                <div className="flex flex-col gap-4">
                    <Link href="#" className="flex justify-center items-center p-2 bg-blue-700 rounded">
                        <UserIcon color="white" />
                    </Link>
                    <Link href="#" className="flex justify-center items-center p-2 bg-blue-700 rounded">
                        <UserIcon color="white" />
                    </Link>
                    <Link href="/contact" className="flex justify-center items-center p-2 bg-blue-700 rounded">
                        <ChatIcon color="white" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
