'use client'

import { createElement } from 'react'
import { ButtonProps, ButtonRenderComponent, ButtonVariants } from './types'
import clsx from 'clsx'
import LoadingIcon from '../../icons/LoadingIcon'

const Button = <T extends ButtonRenderComponent>({
    as = 'button',
    className,
    variant = 'primary',
    loading = false,
    disabled = false,
    onClick,
    children,
    ...props
}: ButtonProps<T>) => {
    const typedProps: any = props

    const buttonVariants: Record<ButtonVariants, string> = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        white: 'btn-white',
        outlined: 'btn-outlined',
        social: 'btn-social',
    }

    typedProps.className = clsx('btn', buttonVariants[variant], className)

    typedProps.onClick = (e: any) => {
        if (!loading && !disabled) {
            if (onClick) {
                onClick(e)
            }
        } else {
            // e.preventDefault()
        }
    }

    return createElement(
        as,
        typedProps,
        <>
            {children}
            {loading && (
                <span className="ml-3">
                    <LoadingIcon className="w-6 h-6" />
                </span>
            )}
        </>,
    )
}

export default Button
