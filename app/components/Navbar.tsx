"use client"

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/themeSlice'
import { useSearchParams } from 'next/navigation'
// import { setLanguage } from '../redux/languageSlice'

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const [languageMenuIsOpen, setLanguageMenuIsOpen] = useState(false);
    
    const languageMenuRef = useRef<any>(null);

    const currentTheme = useSelector((state:any) => state.theme)

    const searchParams = useSearchParams()
    const currentLanguage = searchParams.get('lang')

    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (currentLanguage) {
    //         dispatch(setLanguage(currentLanguage))
    //     } else {
    //         dispatch(setLanguage('en-us'))
    //     }
    // }, [currentLanguage])

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

    return (
        <div className={`${isTop ? "bg-none" : "bg-white dark:bg-dark-blue shadow"} fixed top-0 flex w-full transition z-40`}>
            <div className='flex justify-between py-6 container mx-auto'>
                <Link href={currentLanguage === "pt-br" ? "/?lang=pt-br" : "/"} className='cursor-pointer flex items-center'>
                    {/* <svg className='fill-black dark:fill-white' width="71" height="16" viewBox="0 0 129 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.196023 30V0.90909H4.58523V14.8011H4.94034L17.142 0.90909H22.6676L10.9347 14.0057L22.7102 30H17.4261L8.02273 17.0028L4.58523 20.9517V30H0.196023ZM29.2159 30H24.5568L35.0256 0.90909H40.0966L50.5653 30H45.9062L37.6818 6.19318H37.4545L29.2159 30ZM29.9972 18.608H45.1108V22.3011H29.9972V18.608ZM49.5533 0.90909H54.5391L62.1385 14.1335H62.451L70.0504 0.90909H75.0362L64.4822 18.5795V30H60.1072V18.5795L49.5533 0.90909ZM79.1804 30V0.90909H83.5696V14.8011H83.9247L96.1264 0.90909H101.652L89.919 14.0057L101.695 30H96.4105L87.0071 17.0028L83.5696 20.9517V30H79.1804ZM103.499 0.90909H108.484L116.084 14.1335H116.396L123.996 0.90909H128.982L118.428 18.5795V30H114.053V18.5795L103.499 0.90909Z"/>
                    </svg> */}
                    <svg className='fill-black dark:fill-white' width="69" height="23" viewBox="0 0 69 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.917614 18V0.545454H3.55114V8.88068H3.7642L11.0852 0.545454H14.4006L7.3608 8.40341L14.4261 18H11.2557L5.61364 10.2017L3.55114 12.571V18H0.917614ZM20.4602 18.2898C19.6307 18.2898 18.8807 18.1364 18.2102 17.8295C17.5398 17.517 17.0085 17.0653 16.6165 16.4744C16.2301 15.8835 16.0369 15.1591 16.0369 14.3011C16.0369 13.5625 16.179 12.9545 16.4631 12.4773C16.7472 12 17.1307 11.6222 17.6136 11.3438C18.0966 11.0653 18.6364 10.8551 19.233 10.7131C19.8295 10.571 20.4375 10.4631 21.0568 10.3892C21.8409 10.2983 22.4773 10.2244 22.9659 10.1676C23.4545 10.1051 23.8097 10.0057 24.0312 9.86932C24.2528 9.73295 24.3636 9.51136 24.3636 9.20455V9.14489C24.3636 8.40057 24.1534 7.82386 23.733 7.41477C23.3182 7.00568 22.6989 6.80114 21.875 6.80114C21.017 6.80114 20.3409 6.99148 19.8466 7.37216C19.358 7.74716 19.0199 8.16477 18.8324 8.625L16.4375 8.07955C16.7216 7.28409 17.1364 6.64205 17.6818 6.15341C18.233 5.65909 18.8665 5.30114 19.5824 5.07954C20.2983 4.85227 21.0511 4.73864 21.8409 4.73864C22.3636 4.73864 22.9176 4.80114 23.5028 4.92614C24.0938 5.04545 24.6449 5.26705 25.1562 5.59091C25.6733 5.91477 26.0966 6.37784 26.4261 6.98011C26.7557 7.5767 26.9205 8.35227 26.9205 9.30682V18H24.4318V16.2102H24.3295C24.1648 16.5398 23.9176 16.8636 23.5881 17.1818C23.2585 17.5 22.8352 17.7642 22.3182 17.9744C21.8011 18.1847 21.1818 18.2898 20.4602 18.2898ZM21.0142 16.2443C21.7188 16.2443 22.321 16.1051 22.821 15.8267C23.3267 15.5483 23.7102 15.1847 23.9716 14.7358C24.2386 14.2812 24.3722 13.7955 24.3722 13.2784V11.5909C24.2813 11.6818 24.1051 11.767 23.8438 11.8466C23.5881 11.9205 23.2955 11.9858 22.9659 12.0426C22.6364 12.0937 22.3153 12.142 22.0028 12.1875C21.6903 12.2273 21.429 12.2614 21.2188 12.2898C20.7244 12.3523 20.2727 12.4574 19.8636 12.6051C19.4602 12.7528 19.1364 12.9659 18.892 13.2443C18.6534 13.517 18.5341 13.8807 18.5341 14.3352C18.5341 14.9659 18.767 15.4432 19.233 15.767C19.6989 16.0852 20.2926 16.2443 21.0142 16.2443ZM31.4567 22.9091C31.076 22.9091 30.7294 22.8778 30.4169 22.8153C30.1044 22.7585 29.8714 22.696 29.718 22.6278L30.3317 20.5398C30.7976 20.6648 31.2124 20.7188 31.576 20.7017C31.9396 20.6847 32.2607 20.5483 32.5391 20.2926C32.8232 20.0369 33.0732 19.6193 33.2891 19.0398L33.6044 18.1705L28.8146 4.90909H31.5419L34.8572 15.0682H34.9936L38.3089 4.90909H41.0447L35.6499 19.7472C35.3999 20.429 35.0817 21.0057 34.6953 21.4773C34.3089 21.9545 33.8487 22.3125 33.3146 22.5511C32.7805 22.7898 32.1612 22.9091 31.4567 22.9091ZM45.7834 13.5597L45.7663 10.4489H46.2095L51.4254 4.90909H54.4766L48.5277 11.2159H48.1271L45.7834 13.5597ZM43.4396 18V0.545454H45.9879V18H43.4396ZM51.7067 18L47.0192 11.7784L48.7749 9.99716L54.8345 18H51.7067ZM58.4801 22.9091C58.0994 22.9091 57.7528 22.8778 57.4403 22.8153C57.1278 22.7585 56.8949 22.696 56.7415 22.6278L57.3551 20.5398C57.821 20.6648 58.2358 20.7188 58.5994 20.7017C58.9631 20.6847 59.2841 20.5483 59.5625 20.2926C59.8466 20.0369 60.0966 19.6193 60.3125 19.0398L60.6278 18.1705L55.8381 4.90909H58.5653L61.8807 15.0682H62.017L65.3324 4.90909H68.0682L62.6733 19.7472C62.4233 20.429 62.1051 21.0057 61.7188 21.4773C61.3324 21.9545 60.8722 22.3125 60.3381 22.5511C59.804 22.7898 59.1847 22.9091 58.4801 22.9091Z"/>
                    </svg>
                </Link>
                <div>
                    <ul className={`${!hamburgerIsOpen ? "md:flex -translate-x-full md:-translate-x-0" : "flex flex-col w-screen h-screen bg-white dark:bg-dark-blue items-center justify-center transition-transform duration-300 ease-in-out" } transform fixed left-0 top-0 md:bg-transparent dark:md:bg-transparent md:flex-row md:relative md:w-auto md:h-auto gap-14 text-dark-gray dark:text-gray text-base font-medium z-50`}>
                        <Link onClick={handleHamburgerMenu} href={"#home"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>{currentLanguage === "pt-br" ? "Início" : "Home"}</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#about"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>{currentLanguage === "pt-br" ? "Sobre" : "About"}</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#skills"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>{currentLanguage === "pt-br" ? "Habilidades" : "Skills"}</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#projects"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>{currentLanguage === "pt-br" ? "Projetos" : "Projects"}</li></Link>
                        <Link onClick={handleHamburgerMenu} href={"#contact"}><li className='cursor-pointer hover:text-blue-600 dark:hover:text-blue-400'>{currentLanguage === "pt-br" ? "Contato" : "Contact"}</li></Link>
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
                            <div className='absolute top-6 left-[-20px] md:left-auto md:right-0 bg-white dark:bg-dark-blue text-dark-gray dark:text-light-gray rounded-lg shadow'>
                                <Link href={"?lang=pt-br"} className=' border-b border-light-gray dark:border-darker-blue relative block'>
                                    {currentLanguage === "pt-br" && <span className='w-2 h-2 bg-blue-600 absolute top-[50%] left-4 md:left-3 translate-x-[-50%] translate-y-[-50%] rounded-full'></span>}
                                    <p className='px-6 py-2 whitespace-nowrap md:hidden'>PT - BR</p>
                                    <p className='px-6 py-2 whitespace-nowrap hidden md:block'>Português - BR</p>
                                </Link>
                                <Link href={"/"} className='relative block'>
                                    {currentLanguage !== "pt-br" && <span className='w-2 h-2 bg-blue-600 absolute top-[50%] left-4 md:left-3 translate-x-[-50%] translate-y-[-50%] rounded-full'></span>}
                                    <p className='px-6 py-2 whitespace-nowrap md:hidden'>EN - US</p>
                                    <p className='px-6 py-2 whitespace-nowrap hidden md:block'>English - US</p>
                                </Link>
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
