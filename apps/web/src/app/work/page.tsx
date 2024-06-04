import ProjectMenu from 'ui/components/ProjectMenu'

export default function Page() {
    return (
        <>
            <ProjectMenu
                subjects={[
                    { title: 'School', link: 'school' },
                    { title: 'Professional', link: 'professional' },
                    { title: 'Photography', link: 'photography' },
                ]}
            />
        </>
    )
}
