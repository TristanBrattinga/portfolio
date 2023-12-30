import type { Meta } from "@storybook/react"
import ProjectCard from "../components/ProjectCard"

const meta: Meta<typeof ProjectCard> = {
    title: "Components/ProjectCard",
    component: ProjectCard,
    parameters: {
        layout: "centered",
    },
}
export default meta

export const primary = () => {
    return (
        <div>
            <ProjectCard />
        </div>
    )
}
