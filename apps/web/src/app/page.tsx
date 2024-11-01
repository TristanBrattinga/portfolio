import Hero from 'ui/components/Hero'
import ProjectList from 'ui/components/ProjectList'
import { images } from '../../public/data/images'

const Page = () => {
    return (
        <>
            <Hero />
            <section id='ImageProjects' className='container my-12 scroll-mt-12 md:scroll-mt-32'>
                <ProjectList category='Melbourne by Tram' projects={images.three} />
            </section>
        </>
    )
}

export default Page
