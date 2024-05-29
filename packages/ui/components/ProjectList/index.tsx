import { ProjectListProps } from './types'
import ProjectCard from '../ProjectCard'
import clsx from 'clsx'

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <section className="container my-12 lg:my-36">
            <ul className="flex flex-wrap">
                {projects?.map((project, index) => (
                    <li
                        key={index}
                        className={clsx('', {
                            'w-[350px]': project.size === 'small',
                            'w-[450px]': project.size === 'medium',
                            'w-[800px]': project.size === 'large',
                        })}
                    >
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectList
