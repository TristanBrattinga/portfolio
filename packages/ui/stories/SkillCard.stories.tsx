import SkillCard from "../components/SkillCard"

import type { Meta } from "@storybook/react"
import TailwindIcon from "../icons/TailwindIcon"

const meta: Meta<typeof SkillCard> = {
    title: "Components/SkillCard",
    component: SkillCard,
}
export default meta

export const Primary = () => {
    return <SkillCard techName={"Nextjs"} />
}
