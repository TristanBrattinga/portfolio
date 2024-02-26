import ToTopButton from "../components/ToTopButton"

import type { Meta } from "@storybook/react"

const meta: Meta<typeof ToTopButton> = {
    title: "Components/ToTopButton",
    component: ToTopButton,
}
export default meta

export const Primary = () => {
    return (
        <div className="h-[2000px]">
            <ToTopButton />
        </div>
    )
}
