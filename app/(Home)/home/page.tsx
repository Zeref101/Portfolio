import AboutMe from '@/components/about-me'
import Intro from '@/components/Intro'
import Projects from '@/components/projects'

export const dynamic = "force-dynamic";

const Page = () => {
    return (
        <div className='flex flex-col h-full items-center justify-center overflow-x-hidden'>
            <Intro />
            <Projects />
            <AboutMe />
        </div>
    )
}

export default Page
