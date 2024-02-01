import ContactForm from "../components/ContactForm"

import type { Meta } from "@storybook/react"

const meta: Meta<typeof ContactForm> = {
    title: "Components/ContactForm",
    component: ContactForm,
}
export default meta

export const primary = () => {
    return (
        <div>
            <ContactForm />
        </div>
    )
}
