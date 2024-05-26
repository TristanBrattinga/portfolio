'use client'

import { ProgressBarProps } from './types'
import { motion, useScroll, useSpring } from 'framer-motion'

const ProgressBar = ({}: ProgressBarProps) => {
    const { scrollYProgress } = useScroll()

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <>
            <motion.div
                className="fixed top-0 right-0 origin-top h-screen w-1 lg:w-2.5 bg-clr-accent"
                style={{ scaleY }}
            />
        </>
    )
}

export default ProgressBar
