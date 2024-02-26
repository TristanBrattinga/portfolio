import Footer from "../components/Footer"

import type { Meta } from "@storybook/react"
import GithubIcon from "../icons/GithubIcon"
import LinkedinIcon from "../icons/LinkedinIcon"
import InstagramIcon from "../icons/InstagramIcon"

const meta: Meta<typeof Footer> = {
    title: "Components/Footer",
    component: Footer,
}
export default meta

export const primary = () => {
    return (
        <Footer
            socialLinks={[
                { link: "https://github.com/TristanBrattinga", icon: <GithubIcon /> },
                { link: "https://www.linkedin.com/in/tristanbrattinga", icon: <LinkedinIcon /> },
                { link: "https://instagram.com/tristvnk", icon: <InstagramIcon /> },
            ]}
        />
    )
}
