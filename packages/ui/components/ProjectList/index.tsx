import { ProjectListProps } from './types'
import ProjectCard from '../ProjectCard'
import clsx from 'clsx'

const ProjectList = ({ projects, category }: ProjectListProps) => {
    return (
        <section>
            <h2 className="text-5xl capitalize font-medium border-b border-white pb-4 mb-6">{`${category} projects`}</h2>
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
                        <ProjectCard category={category} project={project} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectList
