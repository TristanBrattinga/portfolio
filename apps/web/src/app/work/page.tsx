import ProjectList from "ui/components/ProjectList"

export default function Page() {
    return (
        <>
            <ProjectList
                projects={[
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
                    { image: "/images/stock.jpg", title: "Project", date: new Date(), description: "Test test" },
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
