import Terminal from '../components/Terminal'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Terminal> = {
    title: 'Components/Terminal',
    component: Terminal,
}
export default meta

export const primary = () => {
    return (
        <div className="container mt-20">
            <Terminal />
        </div>
    )
}
