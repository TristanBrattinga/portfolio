import { ProjectMenuProps } from './types'
import ProjectCategory from '../ProjectCategory'

const ProjectMenu = ({ categories }: ProjectMenuProps) => {
    return (
        <section className="container my-12 lg:my-36">
            <ul className="flex flex-col justify-between gap-10 max-w-md md:max-w-3xl mx-auto">
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
