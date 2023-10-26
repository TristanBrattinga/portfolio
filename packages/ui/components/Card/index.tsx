import React from "react"
import Image from "next/image"
import TypeScriptIcon from "../../icons/TypeScriptIcon"

export const Card = () => {
    return (
        <div className={"flex flex-col md:flex-row justify-between bg-blue-400 pr-10 rounded max-w-3xl"}>
            <Image src={"/images/stock1.jpg"} alt={""} width={400} height={500} />
            <div className={"w-3/5 text-white py-4"}>
                <h2 className={"text-3xl font-bold"}>Project Title</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes nascetur. Sagittis
                    orci a scelerisque purus semper. Cursus risus at ultrices mi tempus imperdiet nulla malesuada
                    pellentesque. Dolor sit amet consectetur adipiscing elit ut. Aenean euismod elementum nisi quis
                    eleifend. Nisl rhoncus mattis rhoncus urna neque viverra. Id aliquet lectus proin nibh. Aliquet
                    porttitor lacus luctus accumsan tortor posuere ac. Enim sit amet venenatis urna cursus eget.
                    Adipiscing tristique risus nec feugiat. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices
                    dui.
                </p>
            </div>

            <TypeScriptIcon />
        </div>
    )
}
