import { ProjectCategoryProps } from './types'

const ProjectCategory = ({ category }: ProjectCategoryProps) => {
    return (
        <a
            href={`/work/${category.link}`}
            className="border border-white rounded-full p-20 flex justify-center items-center"
        >
            <h2 className="font-ailerons text-4xl">{category.title}</h2>
        </a>
    )
}

export default ProjectCategory
