"use client"

import React, { useEffect, useState } from "react"
import ChevronIcon from "../../icons/ChevronIcon"
import clsx from "clsx"

const ToTopButton = () => {
    // const [isScrolled, setIsScrolled] = useState(false)
    //
    // const handleScroll = () => {
    //     if (window.scrollY > 200) {
    //         setIsScrolled(true)
    //     } else {
    //         setIsScrolled(false)
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    //
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [])

    return (
        <div
            className={clsx("bottom-5 right-5 z-10 fixed", {
                // hidden: !isScrolled,
                // fixed: isScrolled,
            })}
        >
            <button
                onClick={() => {
                    window.scrollTo(0, 0)
                }}
                className={
                    "flex gap-2 justify-center items-center p-2 border border-white rounded-full max-w-[40px] before:content-['Scroll_To'] before:whitespace-nowrap before:absolute before:right-10 hover:max-w-full"
                }
            >
                <ChevronIcon className={"rotate-90"} />
            </button>
        </div>
    )
}

export default ToTopButton
