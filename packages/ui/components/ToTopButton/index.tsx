import React from "react"
import ChevronIcon from "../../icons/ChevronIcon"

const ToTopButton = () => {
    return (
        <div className={"fixed bottom-5 right-5 z-10"}>
            <button
                onClick={() => {
                    window.scrollTo(0, 0)
                }}
                className={"flex justify-center items-center p-4 border border-white"}
            >
                <ChevronIcon className={"rotate-90"} />
            </button>
        </div>
    )
}

export default ToTopButton
