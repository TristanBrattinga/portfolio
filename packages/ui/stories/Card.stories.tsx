import { Card } from "../components/Card"

import Link from "next/link"
import type { Meta } from "@storybook/react"

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
}
export default meta

export const primary = () => {
    return (
        <div className="m-10">
            <Card />
        </div>
    )
}
