import ProjectSidebar from 'ui/components/ProjectSidebar'
import ProjectList from 'ui/components/ProjectList'
import { projects } from '../../../../public/data/projects'
import { ProjectType } from '../../../types/Project'

interface PageProps {
    params: {
        category: string
    }
}

export default function Page(params: PageProps) {
    const category = params.params.category
    const categoryData: ProjectType[] = projects[category]

    return (
        <section className="container flex flex-col lg:flex-row gap-12 my-12 lg:my-36">
            <ProjectSidebar projects={categoryData} />
            <ProjectList category={category} projects={categoryData} />
        </section>
    )
}
