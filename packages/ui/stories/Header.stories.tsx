import Header from "../components/Header"

import type { Meta } from "@storybook/react"

const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header,
}
export default meta

export const primary = () => {
    return (
        <div className="h-[2000px]">
            <Header />
        </div>
    )
}
