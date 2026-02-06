import Intro from '@/components/Intro'
import ProjectSummary from '@/components/project-summary'

const Page = () => {
    return (
        <div className='flex flex-col h-full items-center justify-center overflow-x-hidden'>
            <Intro />
            <ProjectSummary
                title='Rheoma'
                description='workflow automation'
                screenshot='/screenshot.jpg'
                slug='rheoma'
            />
        </div>
    )
}

export default Page
