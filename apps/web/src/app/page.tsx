import ProjectList from "ui/components/ProjectList"
import Button from "ui/components/Button"
import Link from "next/link"
import Introduction from "ui/components/Introduction"

export default function Page() {
    return (
        <div className="my-40">
            <Introduction />
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
