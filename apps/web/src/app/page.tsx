import ProjectList from "ui/components/ProjectList"
import Button from "ui/components/Button"
import Link from "next/link"

export default function Page() {
    return (
        <div className="my-40">
            <section className="container text-white flex flex-col items-center gap-4 my-20">
                <h1 className="text-2xl md:text-5xl">Hi, my name is Tristan and I&apos;m 24 years old</h1>
                <p className="text-center max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Button as={Link} href="/work" variant="primary">
                    See all Projects
                </Button>
            </section>
            <ProjectList
                projects={[
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                ]}
            />
        </div>
    )
}
