import Hero from '../components/Hero'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Hero> = {
    title: 'Components/Hero',
    component: Hero,
}
export default meta

export const primary = () => {
    return <Hero />
}
