import ContactForm from "ui/components/ContactForm"

export default function Page() {
    return (
        <section className="flex flex-col justify-center container">
            <div className="max-w-md mx-auto py-40">
                <ContactForm />
            </div>
        </section>
    )
}
