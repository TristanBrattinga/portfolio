import * as React from "react"
import { forwardRef } from "react"
import { InputFieldProps } from "./types"
import { get, useFormContext } from "react-hook-form"
import classNames from "classnames"

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ id, className, required, label, placeholder, type = "text", name, ...props }, ref) => {
        const {
            formState: { errors },
        } = useFormContext()
        const error = get(errors, name)

        return (
            <div className="relative">
                <input
                    aria-label={name}
                    id={id || name}
                    name={name}
                    ref={ref}
                    className={classNames(
                        `bg-transparent border border-[#C7C7C7] w-full py-3 px-4 placeholder:font-normal peer outline-none caret-white text-white`,
                        {
                            "border-red-600 focus:border-red-600 focus:ring-red-600": !!error,
                        },
                        className,
                    )}
                    type={type}
                    placeholder={placeholder}
                    {...props}
                />
                <label
                    htmlFor={id || name}
                    className={classNames(
                        "absolute text-white left-4 top-4 leading-none peer-focus:bg-[#202124] transition-all duration-200 peer-focus:font-semibold text-base peer-focus:px-1 peer-focus:-translate-y-[140%] peer-focus:scale-105 peer-focus:left-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    )}
                >
                    {label}
                </label>
                <span className="absolute text-white text-2xl font-bold -right-2 -top-3 leading-none">{`${
                    required ? "*" : ""
                }`}</span>
            </div>
        )
    },
)

InputField.displayName = "InputField"

export default InputField
