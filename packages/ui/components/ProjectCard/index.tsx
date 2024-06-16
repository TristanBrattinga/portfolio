'use client'

import Link from 'next/link'
import { ProjectCardProps } from './types'
import Image from 'next/image'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { slugifyString } from '../../utils/slugifyString'

const ProjectCard = ({ project, category }: ProjectCardProps) => {
    const [randomNumber, setRandomNumber] = useState<number>()

    const randomizer = () => {
        return Math.floor(Math.random() * 4) + 1
    }

    useEffect(() => {
        setRandomNumber(randomizer())
    }, [])

    return (
        <article
            // href={`/work/${category}/${slugifyString(project.title)}`}
            id={slugifyString(project.title)}
            className={clsx('block relative group w-full')}
        >
            <Image
                src={project.image.src}
                alt={project.image.alt}
                width={1500}
                height={1500}
                className="w-full object-cover"
            />
            <div
                className={clsx('bg-black/75 absolute transition-all duration-300 ease-in', {
                    'top-0 inset-x-0 h-0 group-focus:h-full group-hover:h-full': randomNumber === 1,
                    'inset-y-0 right-0 w-0 group-focus:w-full group-hover:w-full': randomNumber === 2,
                    'bottom-0 inset-x-0 h-0 group-focus:h-full group-hover:h-full': randomNumber === 3,
                    'inset-y-0 left-0 w-0 group-focus:w-full group-hover:w-full': randomNumber === 4,
                })}
            />
            <article
                className={clsx(
                    'absolute z-10 left-10 bottom-10 opacity-0 group-focus:opacity-100 group-hover:opacity-100 delay-200 transition-all duration-700 ease-out',
                    {
                        '-translate-y-10 group-focus:translate-y-0 group-hover:translate-y-0': randomNumber === 1,
                        'translate-x-10 group-focus:translate-x-0 group-hover:translate-x-0': randomNumber === 2,
                        'translate-y-10 group-focus:translate-y-0 group-hover:translate-y-0': randomNumber === 3,
                        '-translate-x-10 group-focus:translate-x-0 group-hover:translate-x-0': randomNumber === 4,
                    },
                )}
            >
                <h2 className="text-2xl font-medium uppercase mb-1">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
            </article>
        </article>
    )
}

export default ProjectCard
