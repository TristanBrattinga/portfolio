'use client'

import { ProjectSidebarProps } from './types'
import Link from 'next/link'
import ArrowIcon from '../../icons/ArrowIcon'
import Button from '../Button'
import { useRouter } from 'next/navigation'

const ProjectSidebar = ({ projects }: ProjectSidebarProps) => {
    const router = useRouter()

    return (
        <aside className="border border-white rounded-2xl p-6 min-w-60 h-fit sticky top-20">
            <button onClick={() => router.back()} className="remove styling flex gap-1 items-center group">
                <ArrowIcon className="transition-transform duration-300 group-hover:-translate-x-1" />
                Go back
            </button>
            <div className="w-full h-px bg-white my-4" />
            <ul>
                {projects.map((project, index) => (
                    <li>
                        <Link href="#" className="block py-2 link-ltr w-full">
                            Project 1
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default ProjectSidebar
