"use client"

import { Sidebar } from "../components/Sidebar"

import type { Meta } from "@storybook/react"
import { useState } from "react"
import Button from "../components/Button"
import CheckmarkIcon from "../icons/CheckmarkIcon"
import Link from "next/link"
import { useStore } from "web/src/lib/context/store-context"
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon"

const meta: Meta<typeof Sidebar> = {
    title: "Components/Sidebar",
    component: Sidebar,
}
export default meta

export const Primary = () => {
    const { openMenu } = useStore()
    return (
        <>
            <div className="m-10 cursor-pointer" onClick={() => openMenu()}>
                <HamburgerMenuIcon />
            </div>
            <Sidebar content={<></>}></Sidebar>
        </>
    )
}
