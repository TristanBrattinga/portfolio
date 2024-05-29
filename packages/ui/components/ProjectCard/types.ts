import { ImageType } from '../ImageSlider/types'
import { LinkType } from '../Header/types'
import { ReactNode } from 'react'

export type ProjectCardProps = {
    project: ProjectType
}

export type ProjectType = {
    title: string
    description: string
    image: ImageType
    date: Date
    link?: LinkType
    icons?: ReactNode[]
    size: 'small' | 'medium' | 'large'
}
