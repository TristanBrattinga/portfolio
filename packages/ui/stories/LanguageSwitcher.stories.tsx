import LanguageSwitcher from "../components/LanguageSwitcher"

import type { Meta } from "@storybook/react"

const meta: Meta<typeof LanguageSwitcher> = {
    title: "Components/LanguageSwitcher",
    component: LanguageSwitcher,
    parameters: {
        layout: "centered",
    },
}
export default meta

export const primary = () => {
    return (
        <div>
            <LanguageSwitcher />
        </div>
    )
}
