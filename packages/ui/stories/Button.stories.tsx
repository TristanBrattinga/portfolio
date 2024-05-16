import Button from '../components/Button'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
}
export default meta

export const primary = () => {
    return (
        <div className="m-10">
            <Button href={'#'} variant={'primary'}>
                Hello
            </Button>
        </div>
    )
}

export const secondary = () => {
    return (
        <div className="m-10">
            <Button href={'#'} variant={'secondary'}>
                Hello
            </Button>
        </div>
    )
}

export const accent = () => {
    return (
        <div className="m-10">
            <Button href={'#'} variant={'accent'}>
                Hello
            </Button>
        </div>
    )
}

export const white = () => {
    return (
        <div className="m-10">
            <Button href={'#'} variant={'white'}>
                Hello
            </Button>
        </div>
    )
}

export const outlined = () => {
    return (
        <div className="m-10">
            <Button href={'#'} variant={'outlined'}>
                Hello
            </Button>
        </div>
    )
}
