"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/themeSlice'

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    const currentTheme = useSelector((state:any) => state.theme)
    const dispatch = useDispatch()

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 128) {
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black dark:text-gray">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button> 
                        }
                    </ul>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-4'>
                        <button onClick={handleChangeTheme} type='button'>
                            {currentTheme.value === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-dark-gray dark:text-gray">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-dark-gray dark:text-gray">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                )
                            }
                            
                        </button>
                        {/* <button type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black dark:text-gray">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </button> */}
                    </div>
                    <span onClick={handleHamburgerMenu} className='md:hidden'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black dark:text-gray">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar