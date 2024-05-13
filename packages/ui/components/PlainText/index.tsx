import { PlainTextProps } from "./types"

const PlainText = ({ content }: PlainTextProps) => {
    return <section className="container text-white my-12 lg:my-32">{content}</section>
}

export default PlainText
