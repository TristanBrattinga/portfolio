'use client'

import { WordCloudProps } from './types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const WordCloud = ({ words }: WordCloudProps) => {
    return (
        <section className="bg-gray-700 py-5 overflow-hidden my-12 lg:my-32">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1.8}
                spaceBetween={40}
                className={'flex items-center justify-center [&>div]:ease-linear !overflow-visible'}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                speed={5000}
                loop
            >
                {words?.map((word, index) => (
                    <SwiperSlide key={index}>
                        <p className="font-nohemi text-3xl font-semibold text-nowrap">{word}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default WordCloud
