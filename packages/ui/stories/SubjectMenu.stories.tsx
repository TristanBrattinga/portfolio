import SubjectMenu from '../components/SubjectMenu'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof SubjectMenu> = {
    title: 'Components/SubjectMenu',
    component: SubjectMenu,
}
export default meta

export const primary = () => {
    return <SubjectMenu />
}
