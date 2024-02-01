import type { Meta } from "@storybook/react"
import ProjectList from "../components/ProjectList"

const meta: Meta<typeof ProjectList> = {
    title: "Components/ProjectList",
    component: ProjectList,
}
export default meta

export const primary = () => {
    return (
        <ProjectList
            projects={[
                { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
            ]}
        />
    )
}
