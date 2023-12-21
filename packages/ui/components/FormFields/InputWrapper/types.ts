import { ReactNode } from 'react'

export type InputWrapperProps = {
    id: string
    name: string
    children?: ReactNode
    customError?: string
    label?: ReactNode
    required?: boolean
    isCheckbox?: boolean
}
