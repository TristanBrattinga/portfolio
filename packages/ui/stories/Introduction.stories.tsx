import Introduction from "../components/Introduction"

import Link from "next/link"
import type { Meta } from "@storybook/react"

const meta: Meta<typeof Introduction> = {
    title: "Components/Introduction",
    component: Introduction,
}
export default meta

export const primary = () => {
    return (
        <div>
            <Introduction />
        </div>
    )
}
