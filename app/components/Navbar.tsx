"use client"

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/themeSlice'

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const [languageMenuIsOpen, setLanguageMenuIsOpen] = useState(false);

    const currentTheme = useSelector((state:any) => state.theme)
    const dispatch = useDispatch()

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsTop(false);
        } else {
          setIsTop(true);
        }
      };
  
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        dispatch(setTheme('dark'))
      } else {
        document.documentElement.classList.remove('dark')
        dispatch(setTheme('light'))
      }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleHamburgerMenu = () => {
        setHamburgerIsOpen(!hamburgerIsOpen)
    }

    const handleChangeTheme = () => {
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
            dispatch(setTheme('light'))
        } else {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
            dispatch(setTheme('dark'))
        }
    }

    const handleLanguageMenu = () => {
        setLanguageMenuIsOpen(!languageMenuIsOpen)
    }

    const languageMenuRef = useRef<any>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
                setLanguageMenuIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${isTop ? "bg-none" : "bg-white dark:bg-dark-blue shadow"} fixed top-0 flex w-full transition z-40`}>
            <div className='flex justify-between py-6 container mx-auto'>
                <Link href={"/"} className='cursor-pointer flex items-center'>
                    <svg className='fill-black dark:fill-white' width="71" height="16" viewBox="0 0 129 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.196023 30V0.90909H4.58523V14.8011H4.94034L17.142 0.90909H22.6676L10.9347 14.0057L22.7102 30H17.4261L8.02273 17.0028L4.58523 20.9517V30H0.196023ZM29.2159 30H24.5568L35.0256 0.90909H40.0966L50.5653 30H45.9062L37.6818 6.19318H37.4545L29.2159 30ZM29.9972 18.608H45.1108V22.3011H29.9972V18.608ZM49.5533 0.90909H54.5391L62.1385 14.1335H62.451L70.0504 0.90909H75.0362L64.4822 18.5795V30H60.1072V18.5795L49.5533 0.90909ZM79.1804 30V0.90909H83.5696V14.8011H83.9247L96.1264 0.90909H101.652L89.919 14.0057L101.695 30H96.4105L87.0071 17.0028L83.5696 20.9517V30H79.1804ZM103.499 0.90909H108.484L116.084 14.1335H116.396L123.996 0.90909H128.982L118.428 18.5795V30H114.053V18.5795L103.499 0.90909Z"/>
                    </svg>
                </Link>
                <div>
                    <ul className={`${!hamburgerIsOpen ? "md:flex -translate-x-full md:-translate-x-0" : "flex flex-col w-screen h-screen bg-white dark:bg-dark-blue items-center justify-center transition-transform duration-300 ease-in-out" } transform fixed left-0 top-0 md:bg-transparent dark:md:bg-transparent md:flex-row md:relative md:w-auto md:h-auto gap-14 text-dark-gray dark:text-gray text-base font-medium`}>
                        <Link onClick={handleHamburgerMenu} href={"#home"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>Home</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#about"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>About</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#skills"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>Skills</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#projects"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>Projects</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#contact"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>Contact</li></Link>
                        {hamburgerIsOpen &&
                            <button onClick={handleHamburgerMenu} className='fixed md:hidden right-8 top-6 z-50'>
                                <svg className="w-6 h-6 stroke-dark-gray dark:stroke-gray text-dark-gray dark:text-gray" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button> 
                        }
                    </ul>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-4'>
                        <button onClick={handleLanguageMenu} className='relative' type='button' ref={languageMenuRef}>
                            <svg className="w-5 h-5 stroke-dark-gray dark:stroke-gray text-dark-gray dark:text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>
                            {languageMenuIsOpen &&
                            <div className='absolute top-6 left-[-20px] md:left-auto md:right-0 bg-white dark:bg-dark-blue text-dark-gray dark:text-light-gray rounded-lg border-gray dark:border-dark-gray border'>
                                <div className=' border-b border-gray dark:border-dark-gray relative'>
                                    {/* <span className='w-2 h-2 bg-blue-600 absolute top-[50%] left-4 md:left-2 translate-x-[-50%] translate-y-[-50%] rounded-full'></span> */}
                                    {/* <p className='px-6 py-2 whitespace-nowrap md:hidden'>PT - BR</p>
                                    <p className='px-6 py-2 whitespace-nowrap hidden md:block'>Português - BR</p> */}
                                    <p className='px-6 py-2 whitespace-nowrap md:hidden'>Em Breve</p>
                                    <p className='px-6 py-2 whitespace-nowrap hidden md:block'>Em Breve</p>
                                </div>
                                <div className='relative'>
                                    <span className='w-2 h-2 bg-blue-600 absolute top-[50%] left-4 md:left-3 translate-x-[-50%] translate-y-[-50%] rounded-full'></span>
                                    <p className='px-6 py-2 whitespace-nowrap md:hidden'>EN - US</p>
                                    <p className='px-6 py-2 whitespace-nowrap hidden md:block'>English - US</p>
                                </div>
                            </div>
                            }
                        </button>
                        <button onClick={handleChangeTheme} type='button'>
                            {currentTheme.value === 'dark' ? (
                                    <svg className="w-5 h-5 stroke-dark-gray dark:stroke-gray text-dark-gray dark:text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                                                    
                                ) : (
                                    <svg className="w-5 h-5 stroke-dark-gray dark:stroke-gray text-dark-gray dark:text-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <span onClick={handleHamburgerMenu} className='md:hidden'> 
                        <svg className="w-5 h-5 stroke-dark-gray dark:stroke-gray text-black dark:text-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" strokeWidth={0.3}>
                            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
