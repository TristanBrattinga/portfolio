import { ProjectListProps } from "./types"
import ProjectCard from "../ProjectCard"

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <section className="container my-12 lg:my-36">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
