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
            <p className="max-w-2xl mt-6 md:-ml-10">
                I'm a passionate front-end developer hailing from the vibrant city of Amsterdam. With a zest for all
                things tech, I dive into the world of web development with boundless enthusiasm and curiosity.
                <br />
                <br /> As a self-proclaimed geek, I thrive on unraveling the intricacies of code, constantly seeking new
                challenges and opportunities to expand my knowledge. Whether it's mastering the latest JavaScript
                frameworks or crafting seamless user experiences, I'm always eager to push the boundaries of what's
                possible in the digital realm. <br />
                <br /> In my journey as a developer, I'm on the lookout for exciting projects and collaborations that
                allow me to innovate, grow, and make a meaningful impact. Every line of code I write is fueled by a
                relentless drive to learn and improve, striving for excellence in every aspect of my work.
                <br />
                <br />
                When I'm not immersed in the world of web development, you can often find me in the kitchen, indulging
                my passion for cooking. Much like coding, cooking allows me to experiment, create, and delight in the
                joy of bringing ideas to life. <br />
                <br />
                Ready to embark on this coding adventure together? Let's connect, collaborate, and create something
                extraordinary!
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
