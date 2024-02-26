import { ProjectListProps } from "./types"
import ProjectCard from "../ProjectCard"

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <section className="container">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects?.map((project, index) => (
                    <li key={index}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectList
