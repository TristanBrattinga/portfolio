import Test from '../components/Test'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Test> = {
    title: 'Components/Test',
    component: Test,
}
export default meta

export const primary = () => {
    return (
        <div className="container mt-20">
            <Test />
        </div>
    )
}
