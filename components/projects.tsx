import React from 'react'
import ProjectSummary from './project-summary'

const projectList = [
    {
        title: "Rheoma - Workflow Automation Platform",
        description: "Built a workflow automation platform that lets teams design, orchestrate, and monitor business processes with minimal manual effort.",
        slug: "rheoma",
        screenshot: "/rheoma-screen.jpg"

    },
]
const Projects = () => {
    return (
        <>
            {projectList.map((project) => (
                <ProjectSummary
                    key={project.title}
                    {...project}
                />
            ))}
        </>

    );
};


export default Projects
