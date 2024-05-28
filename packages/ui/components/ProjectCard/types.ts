import { ImageType } from '../ImageSlider/types'
import { LinkType } from '../Header/types'

export type ProjectCardProps = {
    project: ProjectType
    size: 'small' | 'medium' | 'large'
}

export type ProjectType = {
    title: string
    description: string
    image: ImageType
    date: Date
    link: LinkType
}
