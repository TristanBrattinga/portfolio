import { ReactNode } from "react"

export type FooterProps = {
    socialLinks: SocialLinksType[]
}

type SocialLinksType = {
    link: string
    icon: ReactNode
}
