import React from "react"
import Link from "next/link"
import { CardProps } from "./types"
import Image from "next/image"
import { stagger } from "../../utils/animations"

const Card = ({ title, image }: CardProps) => {
    return (
        <div style={stagger(100)} className="relative w-fit group">
            <div
                className={
                    "w-fit flex justify-center items-center relative overflow-hidden transition-all duration-500 cursor-pointer"
                }
            >
                <h2
                    className={
                        "text-2xl absolute z-20 uppercase font-bold text-white group-hover:opacity-0 group-hover:translate-y-20  transition-all duration-300"
                    }
                >
                    {title}
                </h2>
                <Image
                    src={image}
                    alt={""}
                    width={400}
                    height={600}
                    className="group-hover:scale-110 transition-all duration-500 opacity-75 group-hover:opacity-100"
                />
                <h2
                    className={
                        "text-2xl absolute z-20 bottom-10 uppercase font-bold text-white opacity-0 group-hover:opacity-100  transition-all duration-[400ms]"
                    }
                >
                    {title}
                </h2>
            </div>
            <div className="absolute -z-10 -right-20 -bottom-10 bg-black/30 h-[225px] w-[375px] group-hover:right-0 group-hover:bottom-0 transition-all duration-[400ms]"></div>
            <div className="absolute -z-10 -top-20 -right-5 bg-black/30 h-[200px] w-[350px] group-hover:right-0 group-hover:top-0 transition-all duration-300"></div>
            <div className="absolute -z-10 -left-8 -top-4 bg-black/30 h-[250px] w-[400px] group-hover:left-0 group-hover:top-0 transition-all duration-200"></div>
        </div>
    )
}

export default Card
