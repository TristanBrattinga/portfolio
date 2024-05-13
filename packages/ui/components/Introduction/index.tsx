"use client"

import { useEffect, useState } from "react"
import Button from "../Button"
import Link from "next/link"
import clsx from "clsx"
import { slideInTop, useAnimations } from "../../utils/animations"

const Introduction = ({}) => {
    const { ref, inView } = useAnimations()
    const [age, setAge] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const birthday = new Date("1999-07-11")
        const today = new Date()

        let updateAge = today.getFullYear() - birthday.getFullYear() - 1

        if (today.getMonth() === birthday.getMonth() && today.getDay() === birthday.getDay()) {
            updateAge += 1
        }

        setAge(updateAge)
    }, [age])

    return (
        <section className="container text-white flex flex-col items-center gap-4 my-20">
            <div
                className={clsx("bg-white py-2 px-4 rounded-md absolute", slideInTop(isHovered), {
                    "!-translate-y-[10px]": !isHovered,
                })}
            >
                <p className="text-black font-medium">Yes this updates!</p>
                <span className="arrow-down"></span>
            </div>

            <h2 className="text-2xl md:text-4xl text-center">
                Hi, my name is Tristan and I&apos;m{" "}
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="text-2xl md:text-4xl w-fit mx-auto"
                >
                    {age}
                </div>{" "}
                years old
            </h2>
            <p className="text-center max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <Button as={Link} href="/work" variant="primary">
                See all Projects
            </Button>
        </section>
    )
}

export default Introduction
