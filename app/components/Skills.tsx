import React from 'react';
import technologies from '../utils/technologies';
import Image from 'next/image';

const Skills = () => {
    return (
        <section id='skills' className='flex flex-col bg-light-gray items-center py-24'>
            <div className='mb-24'>
                <h2 className='text-blue-600 font-medium text-4xl'>Skills</h2>
            </div>
            <div className='flex  max-w-4xl'>
                <div className='flex gap-4 flex-wrap justify-center'>
                    {technologies.map((technology, index) => (
                        <div title={technology.name} key={index} className='w-14 h-14 md:w-24 md:h-24 bg-white flex items-center justify-center rounded-3xl'>
                            <Image
                                className='w-8 h-8 md:w-16 md:h-16'
                                src={technology.icon}
                                width={64}
                                height={64}
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
