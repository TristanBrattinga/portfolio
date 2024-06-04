import { ProjectSubjectProps } from './types'

const ProjectSubject = ({ subject }: ProjectSubjectProps) => {
    return (
        <a
            href={`/work/${subject.link}`}
            className="border border-white rounded-full p-20 flex justify-center items-center"
        >
            <h2 className="font-ailerons text-4xl">{subject.title}</h2>
        </a>
    )
}

export default ProjectSubject
