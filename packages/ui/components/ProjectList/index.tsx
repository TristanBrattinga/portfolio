import { ProjectListProps } from './types'
import ProjectCard from '../ProjectCard'
import clsx from 'clsx'

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <section className="">
            <ul className="flex flex-wrap gap-5">
                {projects?.map((project, index) => (
                    <li
                        key={index}
                        className={clsx('flex-grow', {
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
