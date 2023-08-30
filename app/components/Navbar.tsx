"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 128) {
          setIsTop(false);
        } else {
          setIsTop(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleHamburgerMenu = () => {
        setHamburgerIsOpen(!hamburgerIsOpen)
    }

    return (
        <div className={`${isTop ? "bg-none" : "bg-white shadow"} fixed top-0 flex w-full transition z-40`}>
            <div className='flex justify-between py-6 container mx-auto'>
                <Link href={"/"} className='cursor-pointer'>
                    <svg width="129" height="30" viewBox="0 0 129 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.196023 30V0.90909H4.58523V14.8011H4.94034L17.142 0.90909H22.6676L10.9347 14.0057L22.7102 30H17.4261L8.02273 17.0028L4.58523 20.9517V30H0.196023ZM29.2159 30H24.5568L35.0256 0.90909H40.0966L50.5653 30H45.9062L37.6818 6.19318H37.4545L29.2159 30ZM29.9972 18.608H45.1108V22.3011H29.9972V18.608ZM49.5533 0.90909H54.5391L62.1385 14.1335H62.451L70.0504 0.90909H75.0362L64.4822 18.5795V30H60.1072V18.5795L49.5533 0.90909ZM79.1804 30V0.90909H83.5696V14.8011H83.9247L96.1264 0.90909H101.652L89.919 14.0057L101.695 30H96.4105L87.0071 17.0028L83.5696 20.9517V30H79.1804ZM103.499 0.90909H108.484L116.084 14.1335H116.396L123.996 0.90909H128.982L118.428 18.5795V30H114.053V18.5795L103.499 0.90909Z" fill="black"/>
                    </svg>
                </Link>
                <div>
                    <ul className={`${!hamburgerIsOpen ? "hidden md:flex" : "flex flex-col fixed w-screen h-screen left-0 top-0 bg-white items-center justify-center" } md:bg-transparent md:flex-row md:relative md:w-auto md:h-auto gap-14 text-dark-gray text-base font-medium`}>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Skills</li>
                        <li className='cursor-pointer'>Projects</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='hidden md:flex gap-4'>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.752 15.002C20.5633 15.4975 19.2879 15.7518 18 15.75C12.615 15.75 8.25 11.385 8.25 6.00005C8.25 4.67005 8.516 3.40305 8.998 2.24805C7.22147 2.98916 5.70397 4.2394 4.63663 5.8413C3.56928 7.44321 2.99984 9.32513 3 11.25C3 16.635 7.365 21 12.75 21C14.6749 21.0002 16.5568 20.4308 18.1587 19.3634C19.7606 18.2961 21.0109 16.7786 21.752 15.002Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C13.995 20.9999 15.9335 20.3372 17.511 19.116C19.0886 17.8948 20.2159 16.1843 20.716 14.253M12 21C10.005 20.9999 8.06654 20.3372 6.48898 19.116C4.91141 17.8948 3.78408 16.1843 3.284 14.253M12 21C14.485 21 16.5 16.97 16.5 12C16.5 7.03 14.485 3 12 3M12 21C9.515 21 7.5 16.97 7.5 12C7.5 7.03 9.515 3 12 3M20.716 14.253C20.901 13.533 21 12.778 21 12C21.0025 10.4521 20.6039 8.92999 19.843 7.582M20.716 14.253C18.0492 15.7314 15.0492 16.5048 12 16.5C8.838 16.5 5.867 15.685 3.284 14.253M3.284 14.253C3.09475 13.517 2.99933 12.76 3 12C3 10.395 3.42 8.887 4.157 7.582M12 3C13.5962 2.99933 15.1639 3.42336 16.5422 4.22856C17.9205 5.03377 19.0597 6.19117 19.843 7.582M12 3C10.4038 2.99933 8.83608 3.42336 7.45781 4.22856C6.07954 5.03377 4.94031 6.19117 4.157 7.582M19.843 7.582C17.6657 9.46793 14.8805 10.5041 12 10.5C9.002 10.5 6.26 9.4 4.157 7.582" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <span onClick={handleHamburgerMenu} className='md:hidden'>
                {hamburgerIsOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black fixed right-4 top-4 z-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
                </span>
            </div>
        </div>
    )
}

export default Navbar