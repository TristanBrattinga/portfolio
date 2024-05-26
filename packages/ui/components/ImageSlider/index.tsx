'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageSliderProps } from './types'
import Image from 'next/image'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'

const ImageSlider = ({ images }: ImageSliderProps) => {
    return (
        <>
            <Swiper
                effect={'fade'}
                loop
                // slidesPerView={1}
                spaceBetween={300}
                modules={[EffectFade, Autoplay]}
                speed={1000}
                autoplay={{ delay: 10000 }}
                className="w-full max-w-80"
            >
                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width ? image.width : 1000}
                            height={image.height ? image.height : 1000}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ImageSlider
