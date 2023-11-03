"use client"

import React from 'react';
import technologies from '../utils/technologies';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation'

const Skills = () => {
    const theme = useSelector((state:any) => state.theme)

    const searchParams = useSearchParams()
    const currentLanguage = searchParams.get('lang')

    return (
        <section id='skills' className='flex flex-col bg-light-gray dark:bg-darker-blue items-center py-24 md:py-48'>
            <div className='mb-12 md:mb-24 flex flex-col items-center gap-2'>
                <h2 className='text-blue-600 dark:text-blue-400 font-medium text-4xl'>{currentLanguage === "pt-br" ? "Habilidades" : "Skills"}</h2>
                <p className='text-dark-gray dark:text-gray text-base'>{currentLanguage === "pt-br" ? "Tecnologias Que Utilizo" : "My Tech Stack"}</p>
            </div>
            <div className='flex container'>
                <div className='flex max-w-4xl mx-auto gap-6 md:gap-4 flex-wrap justify-center'>
                    {technologies.map((technology, index) => (
                        <div title={technology.name} key={index} className='group hover:scale-90 transition-transform relative shadow-2xl w-16 h-16 md:w-24 md:h-24 bg-white dark:bg-dark-blue flex items-center justify-center rounded-xl md:rounded-3xl'>                         
                            <Image
                                className='w-10 h-10 md:w-12 md:h-12 fill-white'
                                src={theme.value === "dark" && technology.darkModeIcon ? technology.darkModeIcon : technology.icon}
                                width={48}
                                height={48}
                                alt={technology.name}
                            />
                            <div className='flex opacity-0 translate-y-[-32px] group-hover:translate-y-[-48px] md:group-hover:translate-y-[-64px] group-hover:opacity-100 transition-all duration-300 ease-in-out transform rounded-lg shadow-2xl bg-white dark:bg-dark-blue px-4 py-2 absolute'>
                                <span className='text-black text-sm text-center md:text-base dark:text-light-gray'>{technology.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
