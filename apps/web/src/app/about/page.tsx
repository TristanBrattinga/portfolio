import Image from "next/image"

export default function Page() {
    return (
        <div className={"container py-12 "}>
            <div className={"flex justify-center gap-x-20"}>
                <Image src={"/images/me1.jpeg"} alt={"me 1"} width={500} height={500} />
                <Image src={"/images/me2.jpeg"} alt={"me 2"} width={500} height={500} />
            </div>
            <h1>About me!</h1>
            <p className={"text-white"}>
                Last year I made the choice to go back to school because of the Corona pandemic. I was unemployed for a
                while because of the lockdown and didn&apos;t know what to do. I chose to do Communication & Multimedia
                Design. When I was researching this study I was instantly intrigued by the curriculum. I have always had
                a certain interest for web development and UI/UX Design. What this study does good is the combination
                between the tech and visual aspect. I&apos;m still very happy with my choice. Next to my study I&apos;m
                a chef at a one Michelin Star(just received!) Restaurant, named Lars Amsterdam. As you guessed we are
                based in Amsterdam, in the Houthavens. I have been a chef here for almost three years now and it has
                been an amazing experience ever since. It has learned me unbelievably much. From working 14h day shifts,
                to planning and being stress resistant. Next to my school and work I love fashion, working out, playing
                games, DJ&apos;ing and being in the kitchen ofcourse! Going to restaurant is also one of my main
                hobbies. I&apos;m a hard worker and someone who is always striving for more. Next to this I am a
                perfectionist in everything I do. I can&apos;t do half work. Sometimes this can also be one of my flaws.
                I sometimes tend to overdo things. I am a very social person who is not afraid to speak up. 
            </p>
        </div>
    )
}
