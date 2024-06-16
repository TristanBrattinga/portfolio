'use client'

import { useEffect, useState } from 'react'
import Button from '../Button'
import Link from 'next/link'
import clsx from 'clsx'
import { slideInTop, useAnimations } from '../../utils/animations'
import useMediaQuery from '../../hooks/useMediaQuery'

const Introduction = ({}) => {
    const [age, setAge] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)')

    useEffect(() => {
        const birthday = new Date('1999-07-11')
        const today = new Date()

        let updateAge = today.getFullYear() - birthday.getFullYear() - 1

        if (today.getMonth() === birthday.getMonth() && today.getDay() === birthday.getDay()) {
            updateAge += 1
        }

        setAge(updateAge)
    }, [age])

    return (
        <section className="">
            <h2 className="text-2xl md:text-4xl">
                Hi, my name is Tristan and I&apos;m{' '}
                <span
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="text-2xl md:text-4xl w-fit inline relative"
                >
                    {age}
                    <div
                        className={clsx(
                            'bg-white py-2 px-4 rounded-md absolute right-0 top-0 w-fit',
                            slideInTop(isHovered),
                            {
                                '!-translate-y-[10px]': !isHovered,
                            },
                        )}
                    >
                        <p className="text-black font-medium">Yes this updates!</p>
                        <span className="arrow-down"></span>
                    </div>
                </span>{' '}
                years old
            </h2>
            <p className="max-w-2xl mt-6">
                I am an enthusiastic front-end developer at Webbers Agency located in Amsterdam. In my free time I love
                to cook, play games, code, workout and spend time with friends. It is my dream to be my own boss and
                start a digital agency and make awesome things for the web!
            </p>
            <ul className="flex gap-2 justify-end mt-10">
                <li>
                    <Button as={Link} href="/about" variant="outlined">
                        {isMobile ? 'About Me' : 'Learn more about me'}
                    </Button>
                </li>
                <li>
                    <Button as={Link} href="/work" variant="primary">
                        {isMobile ? 'My Work' : 'See my Work'}
                    </Button>
                </li>
            </ul>
        </section>
    )
}

export default Introduction
