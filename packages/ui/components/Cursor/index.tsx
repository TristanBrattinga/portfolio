"use client"

import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const handleScroll = () => {
        const scrollTop = window.scrollY
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const percentage = Math.round((scrollTop / scrollHeight) * 100)
        setScrollPercentage(percentage)
    }

    const dashArray = 125.6636
    const dashOffset = dashArray - (dashArray * scrollPercentage) / 100

    const circleStyle = {
        strokeDasharray: dashArray,
        strokeDashoffset: dashOffset,
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    })

    const variants = {
        default: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            transition: { duration: 0, type: "spring", stiffness: 100, damping: 20 },
        },
    }

    return (
        <>
            {/*<motion.div variants={variants} animate="default">*/}
            {/*    <div className="w-px h-px bg-red-500"></div>*/}
            {/*</motion.div>*/}
            <motion.div
                variants={variants}
                animate="default"
                className="hidden fixed lg:flex justify-center items-center top-0 left-0 w-10 h-10 pointer-events-none"
            >
                <div className="bg-red-500 h-1 w-1"></div>
                <svg className="circle-container">
                    <circle className="circle" cx="50%" cy="50%" r="20" style={circleStyle}></circle>
                </svg>
                <div className="fixed text-white font-bold text-lg left-8 bottom-8">{scrollPercentage}%</div>
            </motion.div>
        </>
    )
}

export default Cursor
