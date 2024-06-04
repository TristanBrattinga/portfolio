import ProjectSubject from '../components/ProjectSubject'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof ProjectSubject> = {
    title: 'Components/ProjectSubject',
    component: ProjectSubject,
}
export default meta

export const primary = () => {
    return <ProjectSubject subject={{ title: 'test', link: 'test' }} />
}
