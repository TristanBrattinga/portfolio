import { ProjectCategoryProps } from './types'
import clsx from 'clsx'

const ProjectCategory = ({ category }: ProjectCategoryProps) => {
    return (
        <a
            href={`/work/${category.link}`}
            className={clsx(
                'border border-white rounded-2xl h-20 flex flex-col justify-center items-center group hover:bg-white transition-all duration-300',
                {
                    'opacity-35': category.comingSoon,
                    'opacity-100': !category.comingSoon,
                },
            )}
        >
            <h2 className="font-ailerons text-4xl group-hover:text-black">{category.title}</h2>
            {category.comingSoon && <p>Coming Soon!</p>}
        </a>
    )
}

export default ProjectCategory
