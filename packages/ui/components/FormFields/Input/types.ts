import React from "react"

export type InputFieldProps = {
    name: string
    label: string
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>
