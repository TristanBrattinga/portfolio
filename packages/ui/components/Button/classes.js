const btn =
    "flex items-center [&>*]:shrink-0 [&>*]:mr-1.5 rounded-full font-ailerons leading-none text-sm px-[22px] py-[14px] border border-[1px] text-center transition block w-fit"

exports.buttonClasses = variant => {
    if (variant === "primary") {
        return `${btn}(
          
        )} bg-blue900new text-white border-transparent hover:bg-transparent hover:border-[1px] hover:border-blue900new hover:text-blue900new dark:hover:text-white dark:hover:border-white/50`
    } else if (variant === "secondary") {
        return `${btn}(
          
        )} border-black/50 text-black hover:text-blue900new hover:border-blue900new dark:hover:border-white dark:border-white dark:border-white/25 dark:text-white`
    } else if (variant === "white") {
        return `${btn}(
          
        )} bg-white border-white text-blue900new hover:bg-blue900new dark:border-blue900new hover:text-white dark:text-white dark:bg-blue900new dark:border-blue900new dark:hover:bg-black dark:hover:border-white`
    } else if (variant === "outlined") {
        return `${btn}(
          
        )} border-white text-white bg-blue900new hover:bg-white hover:text-blue900new dark:border-white/50 dark:text-white dark:bg-black dark:border-white dark:hover:bg-blue900new dark:hover:border-blue900new`
    } else if (variant === "dark") {
        return `${btn}(
          
        )} bg-transparent border-[1px] border-white text-white hover:bg-blue900new hover:text-white hover:border-blue900new`
    } else if (variant === "disabled") {
        return `${btn} text-black/30 pointer-events-none cursor-default`
    } else if (variant === "contact") {
        return `${btn} border-[#CBCBCB] hover:border-blue900new hover:text-blue900new`
    } else if (variant === "selected") {
        return `${btn} border-blue900new text-blue900new`
    }
    return ""
}
