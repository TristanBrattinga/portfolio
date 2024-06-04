import ProjectSidebar from 'ui/components/ProjectSidebar'
import React from 'react'
import ProjectList from 'ui/components/ProjectList'
import { ProjectType } from 'ui/components/ProjectCard/types'

export default async function Page({ projects }: { projects: ProjectType[] }) {
    return (
        <section className="container flex gap-12 my-12 lg:my-36">
            <ProjectSidebar projects={projects} />
            <ProjectList projects={[]} />
        </section>
    )
}
