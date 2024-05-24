import Toggle from '../components/Toggle'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
}
export default meta

export const primary = () => {
    return <Toggle />
}
