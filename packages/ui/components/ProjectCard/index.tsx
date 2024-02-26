import Image from "next/image"
import TailwindIcon from "../../icons/TailwindIcon"
import TypeScriptIcon from "../../icons/TypeScriptIcon"
import ReactIcon from "../../icons/ReactIcon"
import NextJsIcon from "../../icons/NextJsIcon"
import Link from "next/link"
import { ProjectCardProps } from "./types"

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link href="#" className="block border border-white w-full text-white group">
            <div className="overflow-hidden">
                <Image
                    src={project.image}
                    alt="stock image"
                    width={600}
                    height={500}
                    className="group-hover:scale-105 transition-all duration-300 w-full"
                />
            </div>
            <div className="p-10 pt-4 border border-white">
                <div className="hidden md:flex items-center justify-between mb-4">
                    <h4 className="font-semibold uppercase">{project.title}</h4>
                    <ul className="flex items-center justify-center gap-4 bg-white rounded-lg py-2 px-4 border border-white -translate-y-[60px] relative -z-10 group-hover:translate-y-0 transition-all duration-300">
                        <li>
                            <TailwindIcon />
                        </li>
                        <li>
                            <TypeScriptIcon />
                        </li>
                        <li>
                            <ReactIcon />
                        </li>
                        <li>
                            <NextJsIcon />
                        </li>
                    </ul>
                    <p className="font-semibold">{project.date.toDateString()}</p>
                </div>
                <p className="text-white">{project.description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard
