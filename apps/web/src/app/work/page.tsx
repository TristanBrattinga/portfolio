import ProjectList from "ui/components/ProjectList"

export default function Page() {
    return (
        <>
            <ProjectList
                projects={[
                    {
                        image: "/images/stock.jpg",
                        title: "Introduction to Programming",
                        date: new Date(),
                        description: "Test test",
                    },
                    {
                        image: "/images/stock.jpg",
                        title: "Internet Standards",
                        date: new Date(),
                        description: "Test test",
                    },
                    {
                        image: "/images/stock.jpg",
                        title: "Front-end Development 1",
                        date: new Date(),
                        description: "Test test",
                    },
                    {
                        image: "/images/stock.jpg",
                        title: "ISGA Individual Project",
                        date: new Date(),
                        description: "Test test",
                    },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                ]}
            />
        </>
    )
}
