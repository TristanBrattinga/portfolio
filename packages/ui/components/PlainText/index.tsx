import { PlainTextProps } from "./types"

const PlainText = ({ content }: PlainTextProps) => {
    return <section className="container text-white">{content}</section>
}

export default PlainText
