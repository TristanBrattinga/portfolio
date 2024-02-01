import Button from "../components/Button"

import type { Meta } from "@storybook/react"
import React from "react"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
}
export default meta

export const primary = () => {
    return (
        <div className="m-10">
            <Button href={"#"} variant={"primary"}>
                Hello
            </Button>
        </div>
    )
}

export const social = () => {
    return (
        <div className="m-10">
            <Button href={"#"} variant={"social"}>
                Hello
            </Button>
        </div>
    )
}
