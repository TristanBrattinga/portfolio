import ProjectSidebar from '../components/ProjectSidebar'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof ProjectSidebar> = {
    title: 'Components/ProjectSidebar',
    component: ProjectSidebar,
}
export default meta

export const primary = () => {
    return <ProjectSidebar />
}
