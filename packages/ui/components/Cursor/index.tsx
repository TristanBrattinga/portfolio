"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
            transition: { duration: 0 },
        },
    }
    return (
        <motion.div
            variants={variants}
            animate="default"
            className="hidden fixed lg:flex justify-center items-center top-0 left-0 w-10 h-10 border border-white pointer-events-none"
        >
            <div className="w-5 h-5 border border-white"></div>
        </motion.div>
    )
}

export default Cursor
