"use client"

import { createElement } from "react"
import { ButtonProps, ButtonRenderComponent } from "./types"

import classNames from "classnames"
const { buttonClasses } = require("./classes")

const Button = <T extends ButtonRenderComponent>({
    as = "button",
    className,
    variant = "primary",
    onClick,
    children,
    ...props
}: ButtonProps<T>) => {
    const typedProps: any = props
    typedProps.className = classNames(`${buttonClasses(variant)}`, className)

    typedProps.onClick = (e: any) => {
        if (onClick) {
            onClick(e)
        } else {
            e.preventDefault()
        }
    }

    return createElement(as, typedProps, <>{children}</>)
}

export default Button
