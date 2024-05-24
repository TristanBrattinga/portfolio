import Header from '../components/Header'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
}
export default meta

export const primary = () => {
    return (
        <div className="h-[2000px]">
            <Header
                links={[
                    { link: '/', label: 'Home' },
                    { link: '/', label: 'About' },
                    { link: '/', label: 'Work' },
                    { link: '/', label: 'Contact' },
                ]}
            />
        </div>
    )
}
