'use client'

import * as React from 'react'
import { ChangeEvent, forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { InputFieldProps } from './types'
import { get, useFormContext } from 'react-hook-form'
import clsx from 'clsx'

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ id, className, required, label, placeholder, type = 'text', name, ...props }, ref) => {
        const {
            formState: { errors },
        } = useFormContext()
        const error = get(errors, name)
        const inputRef = React.useRef<HTMLInputElement>(null)

        useImperativeHandle(ref, () => inputRef.current!)

        return (
            <div className="relative">
                <input
                    aria-label={name}
                    id={id || name}
                    name={name}
                    ref={ref}
                    className={clsx(
                        `h-12 bg-transparent rounded-2xl border border-[#C7C7C7] w-full p-2 placeholder:font-normal peer outline-none caret-clr-text`,
                        {
                            'border-red-600 focus:border-red-600 focus:ring-red-600': !!error,
                        },
                        className,
                    )}
                    type={type}
                    placeholder={' '}
                    {...props}
                />
                <label
                    htmlFor={id || name}
                    onClick={() => inputRef.current?.focus()}
                    className={clsx(
                        'absolute select-none cursor-text left-4 top-4 leading-none peer-focus:bg-[#202124] transition-all duration-200 peer-focus:font-semibold text-base peer-focus:px-1 peer-focus:-translate-y-[150%] peer-focus:scale-105 peer-focus:left-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                    )}
                >
                    {placeholder}
                </label>
                <span className="absolute text-2xl font-bold -right-2 -top-3 leading-none">{`${
                    required ? '*' : ''
                }`}</span>
                {error && (
                    <p className="text-[12px] mb-0 mt-2 error pt-1 text-red-600 absolute right-0 top-[-10px]">
                        {error?.message?.toString()}
                    </p>
                )}
            </div>
        )
    },
)

InputField.displayName = 'InputField'

export default InputField
