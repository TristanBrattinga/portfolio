import { ProjectMenuProps } from './types'
import ProjectSubject from '../ProjectSubject'

const ProjectMenu = ({ subjects }: ProjectMenuProps) => {
    return (
        <section className="container my-12 lg:my-36">
            <ul className="flex justify-between gap-10">
                {subjects.map((subject, index) => (
                    <li key={index}>
                        <ProjectSubject subject={subject} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectMenu
