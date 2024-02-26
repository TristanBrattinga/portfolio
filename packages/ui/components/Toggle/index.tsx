"use client"

import React from "react"
import * as Switch from "@radix-ui/react-switch"
import { ToggleProps } from "./types"
import { useStore } from "web/src/lib/context/store-context"

const Toggle = ({ label }: ToggleProps) => {
    const { darkModeToggle, darkMode } = useStore()

    console.log(darkMode)

    return (
        <form>
            <div className="flex items-center">
                <label className="text-[20px] leading-none pr-[15px]" htmlFor="airplane-mode">
                    {label}
                </label>
                <Switch.Root
                    className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
                    id="airplane-mode"
                    // @ts-ignore
                    style={{ "WebkitTapHighlightColor?": "rgba(0, 0, 0, 0)" }}
                    onClick={darkModeToggle}
                >
                    <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>
            </div>
        </form>
    )
}

export default Toggle
