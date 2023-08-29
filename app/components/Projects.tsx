import React from 'react'
import Project from './Project'
import projects from '../utils/projects'

const Projects = () => {
    return (
        <div className='flex w-full py-24'>
            <div className="flex container mx-auto flex-col items-center">
                <div className='mb-24'>
                    <h2 className='text-blue-600 font-medium text-5xl'>Projects</h2>
                </div>
                <div className='flex flex-col gap-40'>
                    {
                        projects.map((project, index) => (
                            <Project
                                key={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                image={project.image}
                                repository={project.repository}
                                demo={project.demo}
                            />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Projects