import React from 'react'
import ProjectSidebar from 'ui/components/ProjectSidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="container flex gap-10 my-12 lg:my-36">
            <ProjectSidebar />
            {children}
        </section>
    )
}
