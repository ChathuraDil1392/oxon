import banner from '../assets/banner_project_4.png'
import ProjectCard from './ProjectCard'

const OurProjetcs = () => {
    return (
        <>
            <section
                className="relative text-white py-20 px-6 sm:px-12 md:px-24 min-h-120 flex items-center  bg-blue-900 bg-cover bg-center bg-no-repeat opacity-110 brightness-105"
                style={{
                    backgroundImage: ` url(${banner})`
                }}
            >
                <div className="max-w-6xl mx-auto w-full">
                    {/* Your content (text, titles, buttons) goes here instead of the old img tag */}
                </div>
            </section>
            <section>
                <ProjectCard />
            </section>
        </>
    )
}

export default OurProjetcs