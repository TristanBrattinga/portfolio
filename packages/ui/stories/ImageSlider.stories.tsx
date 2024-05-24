import ImageSlider from '../components/ImageSlider'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof ImageSlider> = {
    title: 'Components/ImageSlider',
    component: ImageSlider,
}
export default meta

export const primary = () => {
    return (
        <ImageSlider
            images={[
                { src: '/images/me1.jpeg', alt: '' },
                { src: '/images/me2.jpeg', alt: '' },
                { src: '/images/me3.png', alt: '' },
            ]}
        />
    )
}
