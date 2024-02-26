import SkillCard from "../SkillCard"

const techSkills = ["JavaScript", "React", "Node.js", "CSS", "HTML"]

const Grid = () => {
    return (
        <div className="grid-container">
            {techSkills.map((tech, index) => (
                <SkillCard key={index} techName={tech} />
            ))}
        </div>
    )
}

export default Grid
