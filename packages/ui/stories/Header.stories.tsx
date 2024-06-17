import Header from '../components/Header'

import type { Meta } from '@storybook/react'
import * as React from 'react'

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
}
export default meta

export const primary = () => {
    return (
        <div className="h-[2000px]">
            <Header
                logoText="Tristan Brattinga"
                links={[
                    { link: '/', label: 'Home' },
                    { link: '/work', label: 'Work' },
                    { link: '/about', label: 'About' },
                    { link: '/contact', label: 'Contact' },
                ]}
            />
        </div>
    )
}
