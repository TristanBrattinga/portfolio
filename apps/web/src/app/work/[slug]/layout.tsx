import React, { ReactNode } from 'react'
import ProjectSidebar from 'ui/components/ProjectSidebar'

async function getProjects() {
    const res = await fetch(
        'https://raw.githubusercontent.com/TristanBrattinga/portfolio/develop/apps/web/public/data/projects.json',
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function ProjectListLayout({ children }: { children: ReactNode }) {
    const projects = await getProjects()

    return (
        <section className="container flex gap-12 my-12 lg:my-36">
            <ProjectSidebar projects={projects} />
            {React.cloneElement(children, { projects })}
        </section>
    )
}
