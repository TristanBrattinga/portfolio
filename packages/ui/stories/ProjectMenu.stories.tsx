import ProjectMenu from '../components/ProjectMenu'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof ProjectMenu> = {
    title: 'Components/ProjectMenu',
    component: ProjectMenu,
}
export default meta

export const primary = () => {
    return <ProjectMenu subjects={[{ title: 'test', link: 'test' }]} />
}
