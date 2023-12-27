const btn =
    "flex justify-center items-center rounded-full block font-raleway leading-none text-base px-6 py-2 border text-center"

exports.buttonClasses = variant => {
    if (variant === "primary") {
        return `${btn}(
          
        )} border border-white text-white`
    } else if (variant === "secondary") {
        return `${btn}(
          
        )} `
    }
    return ""
}
