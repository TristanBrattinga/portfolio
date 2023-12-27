"use client"

import { Sidebar } from "../components/Sidebar"

import type { Meta } from "@storybook/react"
import { useState } from "react"
import Button from "../components/Button"
import CheckmarkIcon from "../icons/CheckmarkIcon"
import Link from "next/link"
import { useStore } from "web/src/lib/context/store-context"

const meta: Meta<typeof Sidebar> = {
    title: "Components/Sidebar",
    component: Sidebar,
}
export default meta

export const Primary = () => {
    const { openMenu } = useStore()
    return (
        <>
            <div className="m-10">
                <Button onClick={() => openMenu()} as={"button"} variant="primary">
                    Free Discovery Session
                </Button>
            </div>
            <Sidebar content={<></>}></Sidebar>
        </>
    )
}
