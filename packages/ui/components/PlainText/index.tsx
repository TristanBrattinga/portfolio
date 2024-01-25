import { PlainTextProps } from "./types"

const PlainText = ({ content }: PlainTextProps) => {
    return (
        <div>
            <p className="text-white">{content}</p>
        </div>
    )
}

export default PlainText
