import React from "react"
import Link from "next/link"

const Card = () => {
    return (
        <Link href={""}>
            <div className={"group flex justify-center items-center border border-white"}>
                <h2
                    className={
                        "px-2 py-28 uppercase font-semibold text-white group-hover:scale-125 transition-all duration-300"
                    }
                >
                    Webbers Stage
                </h2>
            </div>
        </Link>
    )
}

export default Card
