"use client"

import * as React from "react"
import { createElement } from "react"
import { ButtonProps, ButtonRenderComponent } from "./types"
import clsx from "clsx"
import { buttonClasses } from "./classes"
import LoadingIcon from "../../icons/LoadingIcon"

const Button = <T extends ButtonRenderComponent>({
    as = "button",
    className,
    variant = "primary",
    loading = false,
    addToCart,
    hamburgerButton,
    disabled = false,
    onClick,
    children,
    ...props
}: ButtonProps<T>) => {
    const typedProps: any = props
    const disabledProps = loading || disabled ? "cursor-not-allowed" : "cursor-pointer"

    typedProps.className = clsx(
        `${disabledProps} disabled:opacity-50 ${buttonClasses(variant, disabled, loading)}`,
        className,
    )

    typedProps.onClick = (e: any) => {
        if (!loading && !disabled) {
            if (onClick) {
                onClick(e)
            }
        } else {
            e.preventDefault()
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
