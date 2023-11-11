"use client"

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import waving from '/public/images/waving.svg'
import Image from 'next/image'
import Link from 'next/link'
import lightBg from '/public/images/lightBg.png'
import darkBg from '/public/images/darkBg.png'
import { useSearchParams } from 'next/navigation'

const Hero = () => {
    const theme = useSelector((state:any) => state.theme)
    const [currentTheme, setCurrentTheme] = useState<string>('light')

    const searchParams = useSearchParams()
    const currentLanguage = searchParams.get('lang')

    useEffect(() => {
        setCurrentTheme(theme.value)
    }, [theme])

    const backgroundImage = currentTheme === 'light' ? lightBg : darkBg

    return (
        <main id='home' style={{backgroundImage: `url(${backgroundImage.src})`}} className='h-screen bg-cover bg-light-gray dark:bg-darker-blue bg-center md:bg-center'>
            <div className="container mx-auto flex flex-col h-full">
                <div className='flex flex-col justify-center h-full gap-4'>
                    <div className='flex gap-4 items-end'>
                        <Link href={"https://github.com/kaykyls"} target='_blank' className='cursor-pointer group'>
                            <svg className='fill-dark-gray dark:fill-gray group-hover:fill-blue-600 transition' width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3408 29.5808C11.3408 29.7122 11.1836 29.8173 10.9854 29.8173C10.7598 29.8371 10.6025 29.7319 10.6025 29.5808C10.6025 29.4495 10.7598 29.3444 10.958 29.3444C11.1631 29.3246 11.3408 29.4298 11.3408 29.5808ZM9.21484 29.2852C9.16699 29.4166 9.30371 29.5677 9.50879 29.6071C9.68652 29.6728 9.8916 29.6071 9.93262 29.4757C9.97363 29.3444 9.84375 29.1933 9.63867 29.1341C9.46094 29.0882 9.2627 29.1538 9.21484 29.2852ZM12.2363 29.1736C12.0381 29.2195 11.9014 29.3444 11.9219 29.4954C11.9424 29.6268 12.1201 29.7122 12.3252 29.6663C12.5234 29.6203 12.6602 29.4954 12.6396 29.3641C12.6191 29.2392 12.4346 29.1538 12.2363 29.1736ZM16.7344 4C7.25293 4 0 10.9175 0 20.0291C0 27.3144 4.77148 33.5487 11.5869 35.7429C12.4619 35.8939 12.7695 35.375 12.7695 34.948C12.7695 34.5407 12.749 32.294 12.749 30.9144C12.749 30.9144 7.96387 31.8998 6.95898 28.9568C6.95898 28.9568 6.17969 27.0451 5.05859 26.5524C5.05859 26.5524 3.49316 25.521 5.16797 25.5407C5.16797 25.5407 6.87012 25.6721 7.80664 27.2356C9.30371 29.7714 11.8125 29.0422 12.79 28.6086C12.9473 27.5575 13.3916 26.8283 13.8838 26.3947C10.0625 25.9874 6.20703 25.4553 6.20703 19.1357C6.20703 17.3291 6.72656 16.4225 7.82031 15.2663C7.64258 14.8393 7.06152 13.0788 7.99805 10.8058C9.42676 10.3788 12.7148 12.5795 12.7148 12.5795C14.082 12.2116 15.5518 12.0211 17.0078 12.0211C18.4639 12.0211 19.9336 12.2116 21.3008 12.5795C21.3008 12.5795 24.5889 10.3722 26.0176 10.8058C26.9541 13.0853 26.373 14.8393 26.1953 15.2663C27.2891 16.4291 27.959 17.3357 27.959 19.1357C27.959 25.475 23.9326 25.9809 20.1113 26.3947C20.7402 26.9137 21.2734 27.8991 21.2734 29.4429C21.2734 31.6567 21.2529 34.3961 21.2529 34.9348C21.2529 35.3618 21.5674 35.8808 22.4355 35.7297C29.2715 33.5487 33.9062 27.3144 33.9062 20.0291C33.9062 10.9175 26.2158 4 16.7344 4ZM6.64453 26.6575C6.55566 26.7232 6.57617 26.8743 6.69238 26.9991C6.80176 27.1042 6.95898 27.1502 7.04785 27.0648C7.13672 26.9991 7.11621 26.848 7 26.7232C6.89062 26.6181 6.7334 26.5721 6.64453 26.6575ZM5.90625 26.1254C5.8584 26.2108 5.92676 26.3159 6.06348 26.3816C6.17285 26.4473 6.30957 26.4276 6.35742 26.3356C6.40527 26.2502 6.33691 26.1451 6.2002 26.0794C6.06348 26.04 5.9541 26.0597 5.90625 26.1254ZM8.12109 28.4641C8.01172 28.5495 8.05273 28.7465 8.20996 28.8714C8.36719 29.0225 8.56543 29.0422 8.6543 28.9371C8.74316 28.8517 8.70215 28.6546 8.56543 28.5298C8.41504 28.3787 8.20996 28.359 8.12109 28.4641ZM7.3418 27.4984C7.23242 27.5641 7.23242 27.7349 7.3418 27.886C7.45117 28.0371 7.63574 28.1028 7.72461 28.0371C7.83398 27.9517 7.83398 27.7809 7.72461 27.6298C7.62891 27.4787 7.45117 27.413 7.3418 27.4984Z"/>
                            </svg> 
                        </Link>
                        <Link href={"https://www.linkedin.com/in/devkayky"} target='_blank' className='cursor-pointer group'>
                            <svg className='fill-dark-gray dark:fill-gray group-hover:fill-blue-600 transition' width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.4375 0.537598H2.18066C0.977539 0.537598 0 1.49015 0 2.65948V27.8462C0 29.0155 0.977539 29.9681 2.18066 29.9681H28.4375C29.6406 29.9681 30.625 29.0155 30.625 27.8462V2.65948C30.625 1.49015 29.6406 0.537598 28.4375 0.537598ZM9.25586 25.7637H4.7168V11.7185H9.2627V25.7637H9.25586ZM6.98633 9.80031C5.53027 9.80031 4.35449 8.66382 4.35449 7.27113C4.35449 5.87844 5.53027 4.74195 6.98633 4.74195C8.43555 4.74195 9.61816 5.87844 9.61816 7.27113C9.61816 8.67039 8.44238 9.80031 6.98633 9.80031ZM26.2705 25.7637H21.7314V18.9316C21.7314 17.3024 21.6973 15.2068 19.373 15.2068C17.0078 15.2068 16.6455 16.9806 16.6455 18.8134V25.7637H12.1064V11.7185H16.4609V13.6368H16.5225C17.1309 12.5331 18.6143 11.3704 20.8223 11.3704C25.416 11.3704 26.2705 14.2806 26.2705 18.0645V25.7637Z"/>
                            </svg>
                        </Link>
                    </div>

                    <div>
                        <div className='flex'>
                            <h1 className='flex flex-col lg:flex-row text-4xl md:text-6xl text-slate-900 dark:text-white font-semibold w-min md:w-auto'>
                                {currentLanguage === "pt-br" ? "Desenvolvedor" : "Full-Stack"}
                                &nbsp;
                                <span className='flex gap-4 items-end'>
                                    {currentLanguage === "pt-br" ? "Full-Stack" : "Developer"}
                                    <Image
                                        className='w-10 h-10 md:w-14 md:h-14'
                                        src={waving.src}
                                        width={64}
                                        height={64}
                                        alt='waving hand'
                                    />
                                </span> 
                            </h1>
                            
                        </div>
                    </div>

                    <div className='max-w-md'>
                        {currentLanguage === 'pt-br' ? (<p className='text-dark-gray dark:text-gray text-base font-medium'>
                            Olá, meu nome é <strong className='text-black dark:text-white font-medium'>Kayky</strong>, eu sou um desenvolvedor Full-Stack com mais de 2 anos de experiência.
                        </p>)  : (<p className='text-dark-gray dark:text-gray text-base font-medium'>
                            Hi, my name is <strong className='text-black dark:text-white font-medium'>Kayky</strong>, I am a Full-Stack developer with 2+ years experience.
                        </p>)}
                    </div>

                    <div className='flex'>
                        <Link href={"#contact"} className='cursor-pointer px-6 py-3 bg-gradient-to-r from-gradient-light-blue to-gradient-dark-blue dark:from-darker-gradient-light-blue dark:to-darker-gradient-dark-blue hover:from-darker-gradient-light-blue hover:to-darker-gradient-dark-blue dark:hover:from-gradient-light-blue dark:hover:to-gradient-dark-blue transition hover:transition'>
                            <span className='text-base text-white'>
                                {currentLanguage === 'pt-br' ? 'Me Contate' : 'Contact me'}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero