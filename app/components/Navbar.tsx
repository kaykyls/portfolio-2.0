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
                        <button onClick={handleChangeTheme} type='button'>
                            {currentTheme.value === 'dark' ? (
                                    <svg className="w-6 h-6 stroke-dark-gray dark:stroke-gray text-dark-gray dark:text-gray" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_407_235)">
                                        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 1V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 21V23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.21997 4.22L5.63997 5.64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18.3601 18.36L19.7801 19.78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 12H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M21 12H23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.21997 19.78L5.63997 18.36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18.3601 5.64L19.7801 4.22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_407_235">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>                                    
                                ) : (
                                    <svg className="w-6 h-6 stroke-dark-gray dark:stroke-gray text-dark-gray dark:text-gray" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.9999 12.79C20.8426 14.4922 20.2038 16.1144 19.1581 17.4668C18.1125 18.8192 16.7034 19.8458 15.0956 20.4265C13.4878 21.0073 11.7479 21.1181 10.0794 20.7461C8.41092 20.3741 6.8829 19.5345 5.67413 18.3258C4.46536 17.117 3.62584 15.589 3.25381 13.9205C2.88178 12.252 2.99262 10.5121 3.57336 8.9043C4.15411 7.29651 5.18073 5.88737 6.53311 4.84175C7.8855 3.79614 9.5077 3.15731 11.2099 3C10.2133 4.34827 9.73375 6.00945 9.85843 7.68141C9.98312 9.35338 10.7038 10.9251 11.8893 12.1106C13.0748 13.2961 14.6465 14.0168 16.3185 14.1415C17.9905 14.2662 19.6516 13.7866 20.9999 12.79Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                        <svg className="w-6 h-6 stroke-dark-gray dark:stroke-gray text-black dark:text-gray" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 6H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 18H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar