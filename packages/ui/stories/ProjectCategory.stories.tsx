import ProjectCategory from '../components/ProjectCategory'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof ProjectCategory> = {
    title: 'Components/ProjectCategory',
    component: ProjectCategory,
}
export default meta

export const primary = () => {
    return <ProjectCategory subject={{ title: 'test', link: 'test' }} />
}
