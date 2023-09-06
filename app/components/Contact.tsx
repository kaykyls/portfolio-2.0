import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='bg-light-gray dark:bg-darker-blue py-12 md:py-24 flex flex-col items-center'>
            <div className='mb-12 md:mb-24 flex flex-col items-center gap-2'>
                <h2 className='text-blue-600 dark:text-blue-400 font-medium text-4xl'>Contact</h2>
                <p className='text-dark-gray dark:text-gray text-base'>Any questions? Get in touch!</p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className='flex flex-col gap-8 mb-12 md:mb-0 text-center md:text-left'>
                    <div className='flex flex-col'>
                        <h4 className='text-black dark:text-white font-semibold text-3xl mb-4'>Socials</h4>
                        <Link href={"https://instagram.com/dev.kayky"} target='_blank' className='text-dark-gray dark:text-gray text-base'>Instagram</Link>
                        <Link href={"https://linkedin.com/in/devkayky"} target='_blank' className='text-dark-gray dark:text-gray text-base'>LinkedIn</Link>
                        <Link href={"https://github.com/kaykyls"} target='_blank' className='text-dark-gray dark:text-gray text-base'>GitHub</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-black dark:text-white font-semibold text-3xl mb-4'>Email</h4>
                        <Link href={"mailto:dev.kayky@gmail.com"} className='text-dark-gray dark:text-gray text-base'>dev.kayky@gmail.com</Link>
                    </div>
                </div>
                <div className='flex md:w-[560px] min'>
                    <form target='_blank' action="https://formsubmit.co/dev.kayky@gmail.com" method="post" className='flex flex-col w-full gap-4 text-dark-gray'>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black dark:text-white font-medium' htmlFor="#name">Name</label>
                            <input required className='p-2 border border-gray dark:border-black' id='name' placeholder='Name' type="text" />
                        </div>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black dark:text-white font-medium' htmlFor="#email">Email</label>
                            <input required className='p-2 border border-gray dark:border-black' id='email' placeholder='Email' type="email" />
                        </div>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black dark:text-white font-medium' htmlFor="#subject">Subject</label>
                            <input required className='p-2 border border-gray dark:border-black' id='subject' placeholder='Subject' type="text" />
                        </div>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black dark:text-white font-medium' htmlFor="#message">Message</label>
                            <textarea required className='p-2 border border-gray dark:border-black' id='message' rows={5} placeholder='Message'></textarea>
                        </div>
                        <button className='text-white py-4 bg-gradient-to-r text-base from-gradient-light-blue to-gradient-dark-blue dark:from-darker-gradient-light-blue dark:to-darker-gradient-dark-blue hover:from-darker-gradient-light-blue hover:to-darker-gradient-dark-blue dark:hover:from-gradient-light-blue dark:hover:to-gradient-dark-blue transition hover:transition' type='submit'>Contact Me</button>
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default Contact