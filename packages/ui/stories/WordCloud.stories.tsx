import type { Meta } from "@storybook/react"
import WordCloud from "../components/WordCloud"

const meta: Meta<typeof WordCloud> = {
    title: "Components/WordCLoud",
    component: WordCloud,
}
export default meta

export const primary = () => {
    return <WordCloud words={["Nice", "Social", "Hard Working", "Nice", "Nice", "Social", "Hard Working", "Nice"]} />
}
