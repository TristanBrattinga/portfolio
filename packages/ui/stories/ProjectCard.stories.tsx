import type { Meta } from "@storybook/react"
import ProjectCard from "../components/ProjectCard"

const meta: Meta<typeof ProjectCard> = {
    title: "Components/ProjectCard",
    component: ProjectCard,
}
export default meta

export const primary = () => {
    return (
        <div>
            <ProjectCard
                project={{ image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" }}
            />
        </div>
    )
}
