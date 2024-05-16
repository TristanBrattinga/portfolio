'use client'

import Button from 'ui/components/Button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()

    return (
        <section className="container my-12 lg:my-36 flex flex-col items-center">
            <h2 className="text-4xl mb-2">Not Found</h2>
            <p className="mb-10">Could not find requested resource</p>
            <Button variant="primary" onClick={() => router.back()}>
                Go Back
            </Button>
        </section>
    )
}
