import { ProjectMenuProps } from './types'
import ProjectCategory from '../ProjectCategory'

const ProjectMenu = ({ categories }: ProjectMenuProps) => {
    return (
        <section className="container my-12 lg:my-36">
            <ul className="flex flex-col md:flex-row justify-between gap-10">
                {categories.map((category, index) => (
                    <li key={index}>
                        <ProjectCategory category={category} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectMenu
