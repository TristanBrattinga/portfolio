import React from 'react'
import ProjectSidebar from 'ui/components/ProjectSidebar'

export default function ProjectListLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="container flex gap-12 my-12 lg:my-36">
            <ProjectSidebar projects={[]} />
            {children}
        </section>
    )
}
