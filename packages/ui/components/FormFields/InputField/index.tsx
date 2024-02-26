import * as React from 'react'
import { forwardRef } from 'react'
import { InputFieldProps } from './types'
import { get, useFormContext } from 'react-hook-form'
import classNames from 'classnames'

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ id, className, placeholder, type = 'text', name, ...props }, ref) => {
        const {
            formState: { errors },
        } = useFormContext()
        const error = get(errors, name)

        return (
            <input
                aria-label={name}
                id={id || name}
                name={name}
                ref={ref}
                className={classNames(
                    `h-[50px] rounded-[15px] border-[1px] border-[#C7C7C7] focus:border-newgreen active:border-newgreen font-archivo bg-[#F5F5F5] w-full p-4 placeholder:font-normal`,
                    {
                        'border-red-600 focus:border-red-600 focus:ring-red-600': !!error,
                    },
                    className,
                )}
                type={type}
                placeholder={placeholder}
                {...props}
            />
        )
    },
)

InputField.displayName = 'InputField'

export default InputField
