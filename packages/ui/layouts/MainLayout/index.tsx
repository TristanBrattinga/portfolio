import * as React from 'react'
import type { MainLayoutProps } from './types'
import Header from '../../components/Header'
import ToTopButton from '../../components/ToTopButton'
import { Sidebar } from '../../components/Sidebar'
import { useStore } from 'web/src/lib/context/store-context'
import Cursor from '../../components/Cursor'
import Footer from '../../components/Footer'
import GithubIcon from '../../icons/GithubIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import InstagramIcon from '../../icons/InstagramIcon'

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header
                links={[
                    { link: '/', label: 'Home' },
                    { link: '/work', label: 'Work' },
                    { link: '/about', label: 'About' },
                    { link: '/contact', label: 'Contact' },
                ]}
            />
            <main>{children}</main>
            <Footer
                socialLinks={[
                    { link: 'https://github.com/TristanBrattinga', icon: <GithubIcon /> },
                    { link: 'https://www.linkedin.com/in/tristanbrattinga', icon: <LinkedinIcon /> },
                    { link: 'https://instagram.com/tristvnk', icon: <InstagramIcon /> },
                ]}
            />
        </>
    )
}

export default MainLayout
