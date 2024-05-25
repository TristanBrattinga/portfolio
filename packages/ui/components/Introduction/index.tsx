'use client'

import { useEffect, useState } from 'react'
import Button from '../Button'
import Link from 'next/link'
import clsx from 'clsx'
import { slideInTop, useAnimations } from '../../utils/animations'

const Introduction = ({}) => {
    const { ref, inView } = useAnimations()
    const [age, setAge] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

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
        <section className="my-20">
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
            <p className="max-w-2xl mt-6 -ml-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <ul className="flex gap-2 justify-end mt-10">
                <li>
                    <Button as={Link} href="/work" variant="outlined">
                        See my Work
                    </Button>
                </li>
                <li>
                    <Button as={Link} href="/about" variant="primary">
                        Learn more about me
                    </Button>
                </li>
            </ul>
        </section>
    )
}

export default Introduction
