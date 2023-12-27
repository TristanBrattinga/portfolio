"use client"
import { SidebarProps } from "./types"
import clsx from "clsx"
import { sidebarSlideIn } from "../../utils/animations"
import { useStore } from "web/src/lib/context/store-context"
import { scrollLock } from "../../utils/scrollLock"
import { useEffect } from "react"

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
                    "bg-white fixed right-0 top-0 z-50 h-screen w-screen p-5 md:w-1/2",
                    sidebarSlideIn(menuIsOpen),
                )}
            >
                <div
                    className={clsx(
                        "font-champion mb-10 ml-auto w-fit cursor-pointer text-[30px] uppercase text-black md:mb-20",
                    )}
                    onClick={closeMenu}
                >
                    Close
                </div>
                <div className="m-auto max-w-lg">
                    <div>{content}</div>
                </div>
            </div>
        </div>
    )
}
