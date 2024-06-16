import { ProjectCategoryProps } from './types'
import clsx from 'clsx'
import Link from 'next/link'

const ProjectCategory = ({ category }: ProjectCategoryProps) => {
    return (
        <Link
            href={`/work/${category.link}`}
            className={clsx(
                'border border-white rounded-2xl h-20 flex flex-col justify-center items-center group  transition-all duration-300',
                {
                    'opacity-35 pointer-events-none': category.comingSoon,
                    'opacity-100 hover:bg-white': !category.comingSoon,
                },
            )}
        >
            <h2
                className={clsx('font-ailerons text-4xl ', {
                    'group-hover:text-black': !category.comingSoon,
                })}
            >
                {category.title}
            </h2>
            {category.comingSoon && <p>Coming Soon!</p>}
        </Link>
    )
}

export default ProjectCategory
