import { ButtonVariants } from "./types"

const btn =
    "flex justify-center items-center rounded-full font-raleway leading-none text-base px-6 py-3 text-center w-fit transition-all duration-300"

export const buttonClasses = (variant: ButtonVariants, disabled?: boolean, loading?: boolean) => {
    if (variant === "primary") {
        return ` ${disabled || loading ? "" : "text-white border border-white hover:bg-white hover:text-grey-base"} ${btn}`
    } else if (variant === "secondary") {
        return ` ${disabled || loading ? "" : ""} ${btn}`
    } else if (variant === "social") {
        return ` ${disabled || loading ? "" : "bg-white !rounded-lg !p-1.5 hover:-translate-y-1 hover:drop-shadow"} ${btn}`
    }
    return ""
}
