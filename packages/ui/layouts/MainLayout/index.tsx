import * as React from 'react'
import type { MainLayoutProps } from './types'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import GithubIcon from '../../icons/GithubIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import ProgressBar from '../../components/ProgressBar'

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header
                logoText="Tristan Brattinga"
                links={[
                    { link: '/', label: 'Home' },
                    { link: '/work', label: 'Work' },
                    { link: '/about', label: 'About' },
                    { link: '/contact', label: 'Contact' },
                ]}
            />
            <main>{children}</main>
            <Menu
                links={[
                    { link: '/', label: 'Home' },
                    { link: '/work', label: 'Work' },
                    { link: '/about', label: 'About' },
                    { link: '/contact', label: 'Contact' },
                ]}
            />
            <ProgressBar />
            <Footer
                socialLinks={[
                    {
                        link: 'https://github.com/TristanBrattinga',
                        icon: <GithubIcon />,
                        name: 'link to my github account',
                    },
                    {
                        link: 'https://www.linkedin.com/in/tristanbrattinga',
                        icon: <LinkedinIcon />,
                        name: 'link to my linkedin account',
                    },
                    {
                        link: 'https://instagram.com/tristvnk',
                        icon: <InstagramIcon />,
                        name: 'link to my instagram account',
                    },
                ]}
            />
        </>
    )
}

export default MainLayout
