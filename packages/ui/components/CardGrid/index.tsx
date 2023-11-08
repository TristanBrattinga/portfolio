import React from "react"
import Image from "next/image"
import TypeScriptIcon from "../../icons/TypeScriptIcon"
import Card from "../Card"

const CardGrid = () => {
    return (
        <section className={"container flex justify-between gap-20 h-screen"}>
            <div className={"w-1/2 h-60 border-b border-white"}>
                <Card />
            </div>
            <div className={"w-1/2 h-60 border-b border-white"}>
                <Card />
            </div>
        </section>
    )
}

export default CardGrid
