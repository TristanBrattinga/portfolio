import PlainText from "../components/PlainText"

import type { Meta } from "@storybook/react"

const meta: Meta<typeof PlainText> = {
    title: "Components/PlainText",
    component: PlainText,
}
export default meta

export const Primary = () => {
    return (
        <PlainText
            content="Last year I made the choice to go back to school because of the Corona pandemic. I was unemployed for a
                while because of the lockdown and didn't know what to do. I chose to do Communication & Multimedia
                Design. When I was researching this study I was instantly intrigued by the curriculum. I have always had
                a certain interest for web development and UI/UX Design. What this study does good is the combination
                between the tech and visual aspect. I'm still very happy with my choice. Next to my study I'm
                a chef at a one Michelin Star(just received!) Restaurant, named Lars Amsterdam. As you guessed we are
                based in Amsterdam, in the Houthavens. I have been a chef here for almost three years now and it has
                been an amazing experience ever since. It has learned me unbelievably much. From working 14h day shifts,
                to planning and being stress resistant. Next to my school and work I love fashion, working out, playing
                games, DJ'ing and being in the kitchen ofcourse! Going to restaurant is also one of my main
                hobbies. I'm a hard worker and someone who is always striving for more. Next to this I am a
                perfectionist in everything I do. I can't do half work. Sometimes this can also be one of my flaws.
                I sometimes tend to overdo things. I am a very social person who is not afraid to speak up."
        />
    )
}
