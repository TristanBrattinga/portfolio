import type { Meta } from '@storybook/react'
import ProjectList from '../components/ProjectList'

const meta: Meta<typeof ProjectList> = {
    title: 'Components/ProjectList',
    component: ProjectList,
}
export default meta

export const primary = () => {
    return (
        <ProjectList
            projects={[
                {
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '', label: '' },
                    title: 'Project',
                    date: new Date(),
                    description: 'This is the project description',
                    size: 'large',
                },
                {
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '', label: '' },
                    title: 'Project',
                    date: new Date(),
                    description: 'This is the project description',
                    size: 'small',
                },
                {
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '', label: '' },
                    title: 'Project',
                    date: new Date(),
                    description: 'This is the project description',
                    size: 'medium',
                },
                {
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '', label: '' },
                    title: 'Project',
                    date: new Date(),
                    description: 'This is the project description',
                    size: 'medium',
                },
                {
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '', label: '' },
                    title: 'Project',
                    date: new Date(),
                    description: 'This is the project description',
                    size: 'small',
                },
                {
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '', label: '' },
                    title: 'Project',
                    date: new Date(),
                    description: 'This is the project description',
                    size: 'small',
                },
                {
                    image: { src: '/images/stock.jpg', alt: '' },
                    link: { link: '', label: '' },
                    title: 'Project',
                    date: new Date(),
                    description: 'This is the project description',
                    size: 'small',
                },
            ]}
        />
    )
}
