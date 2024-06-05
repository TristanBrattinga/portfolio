import { ImageType } from 'ui/components/ImageSlider/types'
import { ReactNode } from 'react'

export type ProjectType = {
    title: string
    description: string
    courseName?: string
    image: ImageType
    date: Date
    projectLink?: string
    icons?: ReactNode[]
    size: 'small' | 'medium' | 'large'
}
