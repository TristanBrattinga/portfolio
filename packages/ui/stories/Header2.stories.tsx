import Header2 from "../components/Header2"

import type { Meta } from "@storybook/react"

const meta: Meta<typeof Header2> = {
    title: "Components/Header2",
    component: Header2,
}
export default meta

export const primary = () => {
    return (
        <Header2
            links={[
                { link: "/", label: "Home" },
                { link: "/", label: "About" },
                { link: "/", label: "Work" },
                { link: "/", label: "Contact" },
            ]}
        />
    )
}
