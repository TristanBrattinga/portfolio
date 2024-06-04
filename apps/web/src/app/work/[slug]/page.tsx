async function getProjects() {
    const res = await fetch('')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const data = await getProjects()

    return <></>
}
