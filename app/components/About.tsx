import React from 'react'

const About = () => {
    return (
        <section className='flex flex-col items-center py-24'>
            <div className='mb-24'>
                <h2 className='text-blue-600 font-medium text-5xl'>About Me</h2>
            </div>
            <div className='flex gap-8'>
                <div className='bg-blue-600 w-96 h-96 shadow-2xl shadow-blue-900'>

                </div>
                <div className='flex flex-col justify-between'>
                    <div className='max-w-lg flex flex-col gap-6'>
                        <p className='text-dark-gray font-medium text-xl'>
                            I&apos;m an <strong className='font-semibold text-black'>experienced</strong> Full Stack Developer with over <strong className='font-semibold text-black'>2 years</strong> of expertise using technologies like React, Node.js, MongoDB, Tailwind CSS, Next.js, and TypeScript. 
                        </p>
                        <p className='text-dark-gray font-medium text-xl'>
                            Skilled in both frontend and backend development, I create adaptable solutions for user needs. Currently I am majoring in <strong className='font-semibold text-black'>Information Systems</strong> at IFBA.
                        </p>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="w-full flex flex-col gap-4 bg-light-gray px-4 py-8 rounded-lg">
                            <div>
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_305_770)">
                                    <path d="M1.77778 0C0.797222 0 0 0.797222 0 1.77778V9.77778C0 10.7583 0.797222 11.5556 1.77778 11.5556H6.66667L6.36944 12.4444H4.44444C3.95278 12.4444 3.55556 12.8417 3.55556 13.3333C3.55556 13.825 3.95278 14.2222 4.44444 14.2222H11.5556C12.0472 14.2222 12.4444 13.825 12.4444 13.3333C12.4444 12.8417 12.0472 12.4444 11.5556 12.4444H9.63056L9.33333 11.5556H14.2222C15.2028 11.5556 16 10.7583 16 9.77778V1.77778C16 0.797222 15.2028 0 14.2222 0H1.77778ZM14.2222 1.77778V9.77778H1.77778V1.77778H14.2222Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_305_770">
                                    <rect width="16" height="14.2222" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className='text-black text-lg font-medium'>Web<br/>Development</span>
                        </div>
                        <div className="w-full flex flex-col gap-4 bg-light-gray px-4 py-8 rounded-lg">
                            <div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_305_768)">
                                    <path d="M13.7813 1.84065L14.1594 2.21877C14.4531 2.51252 14.4531 2.98752 14.1594 3.27815L13.25 4.19065L11.8094 2.75002L12.7188 1.84065C13.0125 1.5469 13.4875 1.5469 13.7781 1.84065H13.7813ZM6.55625 8.00628L10.75 3.8094L12.1906 5.25002L7.99375 9.44378C7.90313 9.5344 7.79063 9.60003 7.66875 9.6344L5.84063 10.1563L6.3625 8.32815C6.39688 8.20628 6.4625 8.09378 6.55313 8.00315L6.55625 8.00628ZM11.6594 0.781275L5.49375 6.94378C5.22188 7.21565 5.025 7.55003 4.92188 7.91565L4.02813 11.0407C3.95313 11.3032 4.025 11.5844 4.21875 11.7782C4.4125 11.9719 4.69375 12.0438 4.95625 11.9688L8.08125 11.075C8.45 10.9688 8.78438 10.7719 9.05313 10.5032L15.2188 4.34065C16.0969 3.46252 16.0969 2.03752 15.2188 1.1594L14.8406 0.781275C13.9625 -0.0968506 12.5375 -0.0968506 11.6594 0.781275ZM2.75 2.00002C1.23125 2.00002 0 3.23127 0 4.75002V13.25C0 14.7688 1.23125 16 2.75 16H11.25C12.7688 16 14 14.7688 14 13.25V9.75003C14 9.3344 13.6656 9.00003 13.25 9.00003C12.8344 9.00003 12.5 9.3344 12.5 9.75003V13.25C12.5 13.9407 11.9406 14.5 11.25 14.5H2.75C2.05938 14.5 1.5 13.9407 1.5 13.25V4.75002C1.5 4.0594 2.05938 3.50002 2.75 3.50002H6.25C6.66563 3.50002 7 3.16565 7 2.75002C7 2.3344 6.66563 2.00002 6.25 2.00002H2.75Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_305_768">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className='text-black text-lg font-medium'>UX/UI<br/>Design</span>
                        </div>
                        <div className="w-full flex flex-col gap-4 bg-light-gray px-4 py-8 rounded-lg">
                            <div>
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_305_772)">
                                    <path d="M0.5 2C0.5 0.896875 1.39688 0 2.5 0H9.5C10.6031 0 11.5 0.896875 11.5 2V14C11.5 15.1031 10.6031 16 9.5 16H2.5C1.39688 16 0.5 15.1031 0.5 14V2ZM7 14C7 13.7348 6.89464 13.4804 6.70711 13.2929C6.51957 13.1054 6.26522 13 6 13C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15C6.26522 15 6.51957 14.8946 6.70711 14.7071C6.89464 14.5196 7 14.2652 7 14ZM9.5 2H2.5V12H9.5V2Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_305_772">
                                    <rect width="12" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className='text-black text-lg font-medium'>Mobile<br/>Development</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About