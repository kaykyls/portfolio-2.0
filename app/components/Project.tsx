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
        <div className='w-full flex justify-center gap-24 even:flex-row-reverse'>
            <div className='flex flex-col justify-end'>
                <div className='text-blue-500 text-xl font-semibold'>
                    <h3>Featured Project</h3>
                </div>
                <div className='mb-2 mt-1'>
                    <h2 className='text-black font-semibold text-3xl'>{title}</h2>
                </div>
                <div className='max-w-2xl'>
                    <p className='text-dark-gray text-xl'>{description}</p>
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
                    <Link target='_blank' className='text-black flex gap-4 text-xl' href={repository}>Repo <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_329_691)">
                        <path d="M7.77656 18.6281C7.77656 18.7219 7.66875 18.7969 7.53281 18.7969C7.37812 18.8109 7.27031 18.7359 7.27031 18.6281C7.27031 18.5344 7.37813 18.4594 7.51406 18.4594C7.65469 18.4453 7.77656 18.5203 7.77656 18.6281ZM6.31875 18.4172C6.28594 18.5109 6.37969 18.6187 6.52031 18.6469C6.64219 18.6937 6.78281 18.6469 6.81094 18.5531C6.83906 18.4594 6.75 18.3516 6.60938 18.3094C6.4875 18.2766 6.35156 18.3234 6.31875 18.4172ZM8.39062 18.3375C8.25469 18.3703 8.16094 18.4594 8.175 18.5672C8.18906 18.6609 8.31094 18.7219 8.45156 18.6891C8.5875 18.6563 8.68125 18.5672 8.66719 18.4734C8.65312 18.3844 8.52656 18.3234 8.39062 18.3375ZM11.475 0.375C4.97344 0.375 0 5.31094 0 11.8125C0 17.0109 3.27188 21.4594 7.94531 23.025C8.54531 23.1328 8.75625 22.7625 8.75625 22.4578C8.75625 22.1672 8.74219 20.5641 8.74219 19.5797C8.74219 19.5797 5.46094 20.2828 4.77188 18.1828C4.77188 18.1828 4.2375 16.8187 3.46875 16.4672C3.46875 16.4672 2.39531 15.7312 3.54375 15.7453C3.54375 15.7453 4.71094 15.8391 5.35312 16.9547C6.37969 18.7641 8.1 18.2438 8.77031 17.9344C8.87813 17.1844 9.18281 16.6641 9.52031 16.3547C6.9 16.0641 4.25625 15.6844 4.25625 11.175C4.25625 9.88594 4.6125 9.23906 5.3625 8.41406C5.24063 8.10938 4.84219 6.85312 5.48438 5.23125C6.46406 4.92656 8.71875 6.49688 8.71875 6.49688C9.65625 6.23438 10.6641 6.09844 11.6625 6.09844C12.6609 6.09844 13.6688 6.23438 14.6063 6.49688C14.6063 6.49688 16.8609 4.92187 17.8406 5.23125C18.4828 6.85781 18.0844 8.10938 17.9625 8.41406C18.7125 9.24375 19.1719 9.89062 19.1719 11.175C19.1719 15.6984 16.4109 16.0594 13.7906 16.3547C14.2219 16.725 14.5875 17.4281 14.5875 18.5297C14.5875 20.1094 14.5734 22.0641 14.5734 22.4484C14.5734 22.7531 14.7891 23.1234 15.3844 23.0156C20.0719 21.4594 23.25 17.0109 23.25 11.8125C23.25 5.31094 17.9766 0.375 11.475 0.375ZM4.55625 16.5422C4.49531 16.5891 4.50938 16.6969 4.58906 16.7859C4.66406 16.8609 4.77187 16.8938 4.83281 16.8328C4.89375 16.7859 4.87969 16.6781 4.8 16.5891C4.725 16.5141 4.61719 16.4812 4.55625 16.5422ZM4.05 16.1625C4.01719 16.2234 4.06406 16.2984 4.15781 16.3453C4.23281 16.3922 4.32656 16.3781 4.35938 16.3125C4.39219 16.2516 4.34531 16.1766 4.25156 16.1297C4.15781 16.1016 4.08281 16.1156 4.05 16.1625ZM5.56875 17.8312C5.49375 17.8922 5.52187 18.0328 5.62969 18.1219C5.7375 18.2297 5.87344 18.2438 5.93437 18.1688C5.99531 18.1078 5.96719 17.9672 5.87344 17.8781C5.77031 17.7703 5.62969 17.7562 5.56875 17.8312ZM5.03438 17.1422C4.95938 17.1891 4.95938 17.3109 5.03438 17.4188C5.10938 17.5266 5.23594 17.5734 5.29688 17.5266C5.37188 17.4656 5.37188 17.3438 5.29688 17.2359C5.23125 17.1281 5.10938 17.0813 5.03438 17.1422Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_329_691">
                        <rect width="23.25" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </Link>
                    <Link target='_blank' className='text-black flex gap-4 text-xl' href={demo}>Live Preview <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_329_693)">
                        <path d="M16.5 0C15.8953 0 15.3469 0.365625 15.1125 0.928125C14.8781 1.49062 15.0094 2.13281 15.4359 2.56406L17.3766 4.5L9.44062 12.4406C8.85469 13.0266 8.85469 13.9781 9.44062 14.5641C10.0266 15.15 10.9781 15.15 11.5641 14.5641L19.5 6.62344L21.4406 8.56406C21.8719 8.99531 22.5141 9.12188 23.0766 8.8875C23.6391 8.65313 24.0047 8.10938 24.0047 7.5V1.5C24.0047 0.670312 23.3344 0 22.5047 0H16.5ZM3.75 1.5C1.67812 1.5 0 3.17812 0 5.25V20.25C0 22.3219 1.67812 24 3.75 24H18.75C20.8219 24 22.5 22.3219 22.5 20.25V15C22.5 14.1703 21.8297 13.5 21 13.5C20.1703 13.5 19.5 14.1703 19.5 15V20.25C19.5 20.6625 19.1625 21 18.75 21H3.75C3.3375 21 3 20.6625 3 20.25V5.25C3 4.8375 3.3375 4.5 3.75 4.5H9C9.82969 4.5 10.5 3.82969 10.5 3C10.5 2.17031 9.82969 1.5 9 1.5H3.75Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_329_693">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='shadow-2xl relative rounded-3xl before:content-[""] before:h-full before:w-96 before:left-[-32px] before:bg-violet-700 before:absolute before:rounded-full before:blur-3xl before:scale-150 before:opacity-20 before:z-0'>
                <Link href={demo} target='_blank'>
                    <Image
                        className='rounded-3xl h-[400px] object-cover z-40 relative'
                        src={image}
                        width={600}
                        height={400}
                        alt={title}
                    />
                </Link>   
            </div>
        </div>
    )
}

export default Project