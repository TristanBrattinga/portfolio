import LanguageSwitcher from "ui/components/LanguageSwitcher"
import PlainText from "ui/components/PlainText"
import ProjectCard from "ui/components/ProjectCard"
import TailwindIcon from "ui/icons/TailwindIcon"

export default function Page() {
    return (
        <>
            <div className="container">
                <LanguageSwitcher />
                <PlainText content="My name is Tristan Brattinga, I'm 24 years old and I'm a front-end developer! " />
                <ProjectCard
                    title="Project Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel metus eu mauris volutpat
                    consectetur ac a justo. In hac habitasse platea dictumst. Integer nec justo eget velit fermentum
                    elementum. Curabitur eget justo non quam commodo vulputate. Duis eu ligula vel justo accumsan
                    lacinia nec a velit. Curabitur eget tellus a leo iaculis auctor nec vel turpis. Sed eget risus at
                    ipsum malesuada sollicitudin. Aliquam vestibulum ligula eget metus ultricies, sit amet consequat
                    nunc scelerisque. Nullam ultricies nisl non ipsum finibus, et feugiat erat viverra."
                    date={new Date()}
                    image="/images/stock.jpg"
                    techStack={[]}
                />
            </div>
        </>
    )
}
