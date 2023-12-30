import Image from "next/image"

const ProjectCard = () => {
    return (
        <div className="flex w-full border border-white">
            <div className="w-1/3">
                <Image
                    src={"/images/stock.jpg"}
                    alt={""}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-2/3"></div>
        </div>
    )
}

export default ProjectCard
