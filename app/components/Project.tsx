import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Technology {
    name: string;
    icon: string;
}

interface ProjectProps {
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
    repository: string;
    demo: string;
}

const Project:React.FC<ProjectProps> = ({title, description, technologies, image, repository, demo} : ProjectProps) => {
    return (
        <div className='group w-full flex justify-center flex-col-reverse md:flex-row gap-10 md:gap-40 md:even:flex-row-reverse'>
            <div className='flex flex-col justify-end'>
                <div className='text-blue-500 text-base font-semibold'>
                    <h3>Featured Project</h3>
                </div>
                <div className='mb-2 mt-1'>
                    <h2 className='text-black font-semibold text-3xl'>{title}</h2>
                </div>
                <div className='max-w-xl'>
                    <p className='text-dark-gray text-base'>{description}</p>
                </div>
                <div className='my-10'>
                    <ul className='flex gap-4'>
                        {technologies.map((technology, index) => (
                            <li key={index}>
                                <Image
                                    src={technology.icon}
                                    width={32}
                                    height={32}
                                    alt={technology.name}
                                    className='text-gray-500'
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-8'>
                    <Link target='_blank' className='text-black font-medium flex gap-4 text-base items-center' href={repository}>Repo <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_329_691)">
                        <path d="M5.18437 12.4187C5.18437 12.4812 5.1125 12.5312 5.02187 12.5312C4.91875 12.5406 4.84688 12.4906 4.84688 12.4187C4.84688 12.3562 4.91875 12.3062 5.00938 12.3062C5.10313 12.2969 5.18437 12.3469 5.18437 12.4187ZM4.2125 12.2781C4.19063 12.3406 4.25313 12.4125 4.34688 12.4312C4.42813 12.4625 4.52188 12.4312 4.54063 12.3687C4.55938 12.3062 4.5 12.2344 4.40625 12.2063C4.325 12.1844 4.23438 12.2156 4.2125 12.2781ZM5.59375 12.225C5.50312 12.2469 5.44062 12.3063 5.45 12.3781C5.45937 12.4406 5.54063 12.4813 5.63438 12.4594C5.725 12.4375 5.7875 12.3781 5.77812 12.3156C5.76875 12.2563 5.68438 12.2156 5.59375 12.225ZM7.65 0.25C3.31563 0.25 0 3.54063 0 7.875C0 11.3406 2.18125 14.3063 5.29688 15.35C5.69688 15.4219 5.8375 15.175 5.8375 14.9719C5.8375 14.7781 5.82812 13.7094 5.82812 13.0531C5.82812 13.0531 3.64063 13.5219 3.18125 12.1219C3.18125 12.1219 2.825 11.2125 2.3125 10.9781C2.3125 10.9781 1.59687 10.4875 2.3625 10.4969C2.3625 10.4969 3.14062 10.5594 3.56875 11.3031C4.25312 12.5094 5.4 12.1625 5.84688 11.9563C5.91875 11.4563 6.12188 11.1094 6.34688 10.9031C4.6 10.7094 2.8375 10.4562 2.8375 7.45C2.8375 6.59062 3.075 6.15938 3.575 5.60938C3.49375 5.40625 3.22813 4.56875 3.65625 3.4875C4.30937 3.28437 5.8125 4.33125 5.8125 4.33125C6.4375 4.15625 7.10938 4.06563 7.775 4.06563C8.44063 4.06563 9.1125 4.15625 9.7375 4.33125C9.7375 4.33125 11.2406 3.28125 11.8938 3.4875C12.3219 4.57187 12.0563 5.40625 11.975 5.60938C12.475 6.1625 12.7812 6.59375 12.7812 7.45C12.7812 10.4656 10.9406 10.7062 9.19375 10.9031C9.48125 11.15 9.725 11.6187 9.725 12.3531C9.725 13.4062 9.71562 14.7094 9.71562 14.9656C9.71562 15.1687 9.85938 15.4156 10.2563 15.3438C13.3813 14.3062 15.5 11.3406 15.5 7.875C15.5 3.54063 11.9844 0.25 7.65 0.25ZM3.0375 11.0281C2.99687 11.0594 3.00625 11.1313 3.05938 11.1906C3.10938 11.2406 3.18125 11.2625 3.22187 11.2219C3.2625 11.1906 3.25313 11.1187 3.2 11.0594C3.15 11.0094 3.07812 10.9875 3.0375 11.0281ZM2.7 10.775C2.67813 10.8156 2.70937 10.8656 2.77187 10.8969C2.82187 10.9281 2.88438 10.9187 2.90625 10.875C2.92812 10.8344 2.89687 10.7844 2.83437 10.7531C2.77187 10.7344 2.72188 10.7437 2.7 10.775ZM3.7125 11.8875C3.6625 11.9281 3.68125 12.0219 3.75312 12.0813C3.825 12.1531 3.91562 12.1625 3.95625 12.1125C3.99687 12.0719 3.97813 11.9781 3.91563 11.9187C3.84688 11.8469 3.75313 11.8375 3.7125 11.8875ZM3.35625 11.4281C3.30625 11.4594 3.30625 11.5406 3.35625 11.6125C3.40625 11.6844 3.49063 11.7156 3.53125 11.6844C3.58125 11.6437 3.58125 11.5625 3.53125 11.4906C3.4875 11.4188 3.40625 11.3875 3.35625 11.4281Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_329_691">
                        <rect width="15.5" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </Link>
                    <Link target='_blank' className='text-black font-medium flex gap-4 text-base items-center' href={demo}>Live Preview <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_329_693)">
                        <path d="M11 0C10.5969 0 10.2312 0.24375 10.075 0.61875C9.91875 0.99375 10.0062 1.42188 10.2906 1.70938L11.5844 3L6.29375 8.29375C5.90312 8.68437 5.90312 9.31875 6.29375 9.70938C6.68437 10.1 7.31875 10.1 7.70937 9.70938L13 4.41563L14.2937 5.70937C14.5812 5.99687 15.0094 6.08125 15.3844 5.925C15.7594 5.76875 16.0031 5.40625 16.0031 5V1C16.0031 0.446875 15.5563 0 15.0031 0H11ZM2.5 1C1.11875 1 0 2.11875 0 3.5V13.5C0 14.8813 1.11875 16 2.5 16H12.5C13.8813 16 15 14.8813 15 13.5V10C15 9.44687 14.5531 9 14 9C13.4469 9 13 9.44687 13 10V13.5C13 13.775 12.775 14 12.5 14H2.5C2.225 14 2 13.775 2 13.5V3.5C2 3.225 2.225 3 2.5 3H6C6.55313 3 7 2.55313 7 2C7 1.44687 6.55313 1 6 1H2.5Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_329_693">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='md:shadow-2xl relative rounded-3xl before:content-[""] before:h-full before:w-64 md:before:w-96 before:left-[-32px] group-even:before:bg-violet-700 group-odd:before:bg-blue-600 before:absolute before:rounded-full before:blur-3xl before:scale-150 before:opacity-20 before:z-0'>
                <Link href={demo} target='_blank'>
                    <Image
                        className='rounded-3xl h-[250px] w-[375px] md:w-[525px] md:h-[325px] object-cover z-30 relative'
                        src={image}
                        width={525}
                        height={325}
                        alt={title}
                    />
                </Link>   
            </div>
        </div>
    )
}

export default Project