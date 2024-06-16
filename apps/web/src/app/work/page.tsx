import ProjectMenu from 'ui/components/ProjectMenu'

export default function Page() {
    return (
        <>
            <ProjectMenu
                categories={[
                    { title: 'School', link: 'school' },
                    { title: 'Professional', link: 'professional', comingSoon: true },
                    { title: 'Photography', link: 'photography', comingSoon: true },
                ]}
            />
        </>
    )
}
