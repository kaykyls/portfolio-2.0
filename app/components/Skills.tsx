import React from 'react';
import technologies from '../utils/technologies';
import Image from 'next/image';

const Skills = () => {
    return (
        <section id='skills' className='flex flex-col bg-light-gray dark:bg-darker-blue items-center py-24 md:py-48'>
            <div className='mb-24 md:mb-24 flex flex-col items-center gap-2'>
                <h2 className='text-blue-600 dark:text-blue-400 font-medium text-4xl'>Skills</h2>
                <p className='text-dark-gray dark:text-gray text-base'>My Tech Stack</p>
            </div>
            <div className='flex container'>
                <div className='flex max-w-4xl mx-auto gap-x-5 gap-y-10 md:gap-4 flex-wrap justify-center'>
                    {technologies.map((technology, index) => (
                        <div title={technology.name} key={index} className='shadow-2xl dark:shadow-blue-900 dark:shadow-sm  w-12 h-12 md:w-24 md:h-24 bg-white dark:bg-dark-blue flex items-center justify-center rounded-xl md:rounded-3xl'>
                            <Image
                                className='w-8 h-8 md:w-12 md:h-12'
                                src={technology.icon}
                                width={48}
                                height={48}
                                alt={technology.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
