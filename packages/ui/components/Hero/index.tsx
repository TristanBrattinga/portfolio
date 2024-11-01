'use client'

import React, { useEffect, useState } from 'react'
import ImageSlider from '../ImageSlider'
import Introduction from '../Introduction'
import useMediaQuery from '../../hooks/useMediaQuery'

type AnimationStyle = {
    animationDuration: string
    animationDelay: string
}

const generateRandomStyles = (): AnimationStyle => {
    const duration = Math.random() * 5 + 3 // Random duration between 3s and 8s
    const delay = Math.random() * 2 // Random delay between 0s and 2s
    return {
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
    }
}

const Hero = () => {
    const [styles, setStyles] = useState<AnimationStyle[]>([])
    const isMobile = useMediaQuery('(max-width: 768px)')

    useEffect(() => {
        const newStyles: AnimationStyle[] = [generateRandomStyles(), generateRandomStyles(), generateRandomStyles()]
        setStyles(newStyles)
    }, [])

    return (
        <section className="flex md:items-center flex-col lg:flex-row container md:h-screen">
            <div className="w-full md:w-1/2 my-20">
                <div className="relative md:w-fit md:mx-auto">
                    {styles.length > 0 && !isMobile && (
                        <>
                            <div
                                className="border border-white w-full h-full absolute -left-20 -top-5 border-animation"
                                style={styles[0]}
                            ></div>
                            <div
                                className="border border-white w-full h-full absolute -top-20 -right-20 border-animation"
                                style={styles[1]}
                            ></div>
                            <div
                                className="border border-white w-full h-full absolute -right-10 -bottom-10 border-animation"
                                style={styles[2]}
                            ></div>
                        </>
                    )}
                    <ImageSlider
                        images={[
                            { src: '/images/me1.jpeg', alt: '' },
                            { src: '/images/me2.jpeg', alt: '' },
                            { src: '/images/me3.png', alt: '' },
                        ]}
                    />
                </div>
            </div>
            <Introduction />
        </section>
    )
}

export default Hero
