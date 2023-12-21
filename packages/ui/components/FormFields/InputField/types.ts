import React from 'react'

export type InputFieldProps = {
    name: string
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>
