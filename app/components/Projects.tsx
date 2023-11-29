"use client"

import React from 'react'
import Project from './Project'
import projects from '../utils/projects'
import { useSearchParams } from 'next/navigation'

interface languageProps {
    currentLanguage: string | null
}

const Projects = ({currentLanguage}: languageProps) => {

    return (
        <section id='projects' className='overflow-hidden flex w-full bg-white dark:bg-dark-blue py-24 md:py-48'>
            <div className="flex container mx-auto flex-col items-center">
                <div className='mb-12 md:mb-24'>
                    <h2 className='text-blue-600 dark:text-blue-400 font-medium text-4xl'>{currentLanguage === "pt-br" ? "Projetos" : "Projects"}</h2>
                </div>
                <div className='flex flex-col gap-24 md:gap-48'>
                    {
                        projects.map((project, index) => (
                            <Project
                                key={index}
                                title={project.title}
                                description={currentLanguage === 'pt-br' ? project.description.portuguese : project.description.english}
                                technologies={project.technologies}
                                image={project.image}
                                repository={project.repository}
                                demo={project.demo}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects