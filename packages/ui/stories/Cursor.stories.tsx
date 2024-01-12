import Cursor from "../components/Cursor"

import type { Meta } from "@storybook/react"

const meta: Meta<typeof Cursor> = {
    title: "Components/Cursor",
    component: Cursor,
    parameters: {
        layout: "centered",
    },
}
export default meta

export const Primary = () => {
    return (
        <div className="h-[2000px]">
            <Cursor />
        </div>
    )
}
