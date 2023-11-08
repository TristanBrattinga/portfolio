import React from "react"
import Button from "../Button"
import ChevronIcon from "../../icons/ChevronIcon"

const ToTopButton = () => {
    return (
        <div className={"fixed bottom-5 right-5 z-10"}>
            <Button
                as={"button"}
                onClick={() => {
                    window.scrollTo(0, 0)
                }}
                variant={"primary"}
                className={"block absolute bottom-5 right-5 border border-white rounded-full"}
            >
                <ChevronIcon className={"rotate-90"} />
            </Button>
        </div>
    )
}

export default ToTopButton
