import { InputWrapperProps } from "./types"
import { get, useFormContext } from "react-hook-form"
import clsx from "clsx"

const InputWrapper = ({ id, name, children, customError, label, required, isCheckbox }: InputWrapperProps) => {
    const {
        formState: { errors },
    } = useFormContext()

    const error = get(errors, name)

    return (
        <div className="flex flex-1 flex-col w-full">
            <div className="flex justify-between items-center w-full">
                {!isCheckbox && label && (
                    <label
                        htmlFor={id || name}
                        className={clsx("block mb-2 text-xs peer-disabled:cursor-not-allowed peer-disabled:opacity-70")}
                    >
                        {label}
                        {`${required ? " *" : ""}`}
                    </label>
                )}
            </div>
            <div className="flex gap-4 items-center w-full">
                {children}
                {isCheckbox && label && (
                    <label htmlFor={name} className={"text-sm my-2 text-brand-black"}>
                        {label}
                        {`${required ? " *" : ""}`}
                    </label>
                )}
            </div>
            {(error || customError) && (
                <p className="text-[12px] mb-0 mt-2 error pt-1 text-red-600">
                    {customError ? customError : error?.message?.toString()}
                </p>
            )}
        </div>
    )
}

export default InputWrapper
