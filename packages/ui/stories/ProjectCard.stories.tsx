import type { Meta } from '@storybook/react'
import ProjectCard from '../components/ProjectCard'

const meta: Meta<typeof ProjectCard> = {
    title: 'Components/ProjectCard',
    component: ProjectCard,
}
export default meta

export const primary = () => {
    return (
        <ProjectCard
            project={{
                image: { src: '/images/stock.jpg', alt: '' },
                link: { link: '', label: '' },
                title: 'Project',
                date: new Date(),
                description: 'This is the project description',
            }}
            size="large"
        />
    )
}
