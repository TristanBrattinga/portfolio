import ProjectList from 'ui/components/ProjectList'

export default function Page() {
    return (
        <>
            <ProjectList
                projects={[
                    {
                        image: { src: '/images/stock.jpg', alt: '' },
                        link: { link: '', label: '' },
                        title: 'Project',
                        date: new Date(),
                        description: 'This is the project description',
                    },
                    {
                        image: { src: '/images/stock.jpg', alt: '' },
                        link: { link: '', label: '' },
                        title: 'Project',
                        date: new Date(),
                        description: 'This is the project description',
                    },
                    {
                        image: { src: '/images/stock.jpg', alt: '' },
                        link: { link: '', label: '' },
                        title: 'Project',
                        date: new Date(),
                        description: 'This is the project description',
                    },
                    {
                        image: { src: '/images/stock.jpg', alt: '' },
                        link: { link: '', label: '' },
                        title: 'Project',
                        date: new Date(),
                        description: 'This is the project description',
                    },
                    {
                        image: { src: '/images/stock.jpg', alt: '' },
                        link: { link: '', label: '' },
                        title: 'Project',
                        date: new Date(),
                        description: 'This is the project description',
                    },
                    {
                        image: { src: '/images/stock.jpg', alt: '' },
                        link: { link: '', label: '' },
                        title: 'Project',
                        date: new Date(),
                        description: 'This is the project description',
                    },
                ]}
            />
        </>
    )
}
