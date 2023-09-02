import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='bg-light-gray py-24 flex flex-col items-center'>
            <div className='mb-24 flex flex-col items-center gap-2'>
                <h2 className='text-blue-600 font-medium text-4xl'>Contact</h2>
                <p className='text-dark-gray text-base'>Any questions? Get in touch!</p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col'>
                        <h4 className='text-black font-semibold text-3xl mb-4'>Socials</h4>
                        <Link href={"https://instagram.com/dev.kayky"} target='_blank' className='text-dark-gray text-base'>Instagram</Link>
                        <Link href={"https://linkedin.com/in/devkayky"} target='_blank' className='text-dark-gray text-base'>LinkedIn</Link>
                        <Link href={"https://github.com/kaykyls"} target='_blank' className='text-dark-gray text-base'>GitHub</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-black font-semibold text-3xl mb-4'>Email</h4>
                        <Link href={"mailto:dev.kayky@gmail.com"} className='text-dark-gray text-base'>dev.kayky@gmail.com</Link>
                    </div>
                </div>
                <div className='flex md:w-[560px] min'>
                    <form action="" className='flex flex-col w-full gap-4'>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black font-medium' htmlFor="#name">Name</label>
                            <input className='p-2 border' id='name' placeholder='Name' type="text" />
                        </div>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black font-medium' htmlFor="#email">Email</label>
                            <input className='p-2 border' id='email' placeholder='Email' type="email" />
                        </div>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black font-medium' htmlFor="#subject">Subject</label>
                            <input className='p-2 border' id='subject' placeholder='Subject' type="text" />
                        </div>
                        <div className='flex flex-col text-base gap-2'>
                            <label className='text-black font-medium' htmlFor="#message">Message</label>
                            <textarea className='p-2 border' id='message' rows={5} placeholder='Message'></textarea>
                        </div>
                        <button className='py-4 bg-gradient-to-r text-base from-gradient-light-blue to-gradient-dark-blue' type='submit'>Contact Me</button>
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default Contact