import { ProjectSidebarProps } from './types'
import Link from 'next/link'
import ArrowIcon from '../../icons/ArrowIcon'

const ProjectSidebar = ({}: ProjectSidebarProps) => {
    return (
        <aside className="border border-white rounded-2xl p-6 min-w-60 h-fit sticky top-20">
            <button className="flex gap-1 items-center group">
                <ArrowIcon className="transition-transform duration-300 group-hover:-translate-x-1" />
                Go back
            </button>
            <div className="w-full h-px bg-white my-4" />
            <ul>
                <li>
                    <Link
                        href="#"
                        className="group after:transition-all after:duration-200 after:group-hover:scale-x-100 after:block after:w-full after:h-px after:bg-white after:scale-x-0"
                    >
                        Project 1
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default ProjectSidebar
