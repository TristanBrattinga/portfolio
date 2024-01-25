import { ReactNode } from "react"

export type ProjectCardProps = {
    title: string
    description: string
    image: string
    date: Date
    techStack: ReactNode[]
}
