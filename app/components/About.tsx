import React from 'react'

const About = () => {
    return (
        <section id='about' className='flex flex-col bg-white dark:bg-dark-blue items-center py-24 md:py-48'>
            <div className='mb-12 md:mb-24'>
                <h2 className='text-blue-600 dark:text-blue-400 font-medium text-4xl'>About Me</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-8 container justify-center items-center'>
                <div className='bg-light-gray dark:bg-darker-blue w-full md:w-96 h-60 md:h-96 rounded-2xl flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="340" height="187" viewBox="0 0 878.63037 483" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M294.7164,621.20348c-19.51084,14.54436-25.04043,40.13465-25.04043,40.13465s26.10369,2.00928,45.61453-12.53511,25.04043-40.13465,25.04043-40.13465S314.22725,606.65916,294.7164,621.20348Z" transform="translate(-160.68481 -208.5)" fill="#f1f1f1"/><path d="M302.84375,628.03207c-9.37708,22.45621-32.86178,34.02822-32.86178,34.02822s-8.28141-24.83665,1.09568-47.29286,32.86172-34.02822,32.86172-34.02822S312.22084,605.57587,302.84375,628.03207Z" transform="translate(-160.68481 -208.5)" fill="#f1f1f1"/><path d="M864.18723,563.11405h0a194.65688,194.65688,0,0,1-1.63336-42.19544l1.63336-23.307h0c-9.00016,17.90831-6.96615,41.47881,0,65.50242Z" transform="translate(-160.68481 -208.5)" fill="#cacaca"/><path d="M871.20535,567.013h0a143.0906,143.0906,0,0,1-.78588-25.11633l.78588-13.87323h0C866.87509,538.68318,867.85373,552.71319,871.20535,567.013Z" transform="translate(-160.68481 -208.5)" fill="#cacaca"/><path d="M902.40062,584.17028v7.79791a2.3515,2.3515,0,0,1-2.33937,2.33937h-3.899a.777.777,0,0,0-.77979.77979v63.94288a2.35149,2.35149,0,0,1-2.33937,2.33937H845.47587a2.34116,2.34116,0,0,1-2.33938-2.33937V595.08735a.78216.78216,0,0,0-.77979-.77979H837.678a2.34117,2.34117,0,0,1-2.33937-2.33937v-7.79791a2.33615,2.33615,0,0,1,2.33937-2.33938h62.3833A2.3464,2.3464,0,0,1,902.40062,584.17028Z" transform="translate(-160.68481 -208.5)" fill="#f2f2f2"/><rect x="682.52174" y="387.4451" width="52.24601" height="2.33937" fill="#e6e6e6"/><path d="M895.3825,630.36884c-17.48271,7.23486-35.15611,7.31459-53.0258,0v-16.481a83.27378,83.27378,0,0,1,53.0258,0Z" transform="translate(-160.68481 -208.5)" fill="#e6e6e6"/><circle id="fff0188c-9915-4c0d-8339-9317a77083e8" data-name="Ellipse 276" cx="441.8526" cy="99.21067" r="70.6659" fill="#feb8b8"/><path id="ac220ed6-7c3f-4d1e-8d82-3295770c496a-466" data-name="Path 1461" d="M668.54008,246.746a81.61376,81.61376,0,0,0-46.43-35.49166l-8.6754,6.33079v-8.22035a75.12281,75.12281,0,0,0-14.03207-.81741l-7.48468,6.7722V209.11a80.83444,80.83444,0,0,0-55.76328,33.16889c-16.25407,23.43225-18.99783,56.03165-3.01076,79.65191,4.38811-13.48715,9.71486-26.14193,14.1043-39.62775a39.91571,39.91571,0,0,0,10.39873.05039l5.339-12.45857,1.49177,11.93136c16.54971-1.44138,41.0963-4.60742,56.785-7.50784l-1.52581-9.15355,9.12769,7.606c4.80635-1.10624,7.66041-2.11028,7.42476-2.87726,11.66844,18.81119,25.94847,30.82566,37.61558,49.63682C678.33663,293.0056,683.43725,270.95065,668.54008,246.746Z" transform="translate(-160.68481 -208.5)" fill="#2f2e41"/><path d="M754.51974,489.43043c-2.43-14.61929-4.93649-29.51921-11.73089-42.68893-4.46552-8.62629-11.55394-16.84664-21.1096-18.55231a20.4215,20.4215,0,0,1-5.49659-1.27245c-2.79985-1.34871-40.42516-22.82733-46.40535-26.56828-5.13471-3.21152-13.24023-9.158-17.32725-9.158-4.11163-.09038-19.87765,3.579-81.41374-1.23129,0,0-16.90485,6.66319-29.98543,14.74285-.19823-.13063-63.869,34.06031-66.261,33.97034-4.53005-.19075-8.74079,2.70971-11.33775,6.36219-2.5963,3.65239-3.81429,8.174-5.08948,12.54576,13.90677,30.97,26.6308,61.97961,40.5389,92.94963a7.93068,7.93068,0,0,1,1.00579,3.81454,9.30964,9.30964,0,0,1-1.7302,3.81453c-6.82034,10.95592-6.60348,24.736-5.85845,37.61284.74569,12.87686,1.66766,26.47839-4.087,38.02019-1.56523,3.16878-3.60075,6.06924-5.08948,9.238-3.48634,7.17681-4.74624,30.13086-2.71,37.84166l255.12065,7.30869C730.06748,673.1021,754.51974,489.43043,754.51974,489.43043Z" transform="translate(-160.68481 -208.5)" fill="#1d4ed8"/><path id="bb46eb08-8e3e-4ac5-913b-26d221d967b9-467" data-name="Path 1421" d="M436.31023,551.90313a45.04293,45.04293,0,0,0-.15258,11.10851l3.65653,52.51275c.34331,4.94938.68117,9.88653,1.14573,14.82359.87734,9.58136,2.18792,19.08639,3.81455,28.57778a5.08966,5.08966,0,0,0,5.21639,4.94937c16.096,3.40585,32.72612,3.26965,49.15321,2.34185,25.067-1.39909,89.1978-4.0461,93.11589-9.13583s1.63483-13.32231-3.474-17.43793-89.73865-14.14932-89.73865-14.14932c.82693-6.55285,3.32139-12.72429,5.68777-18.946,4.25049-11.03491,8.22035-22.43228,8.29664-34.2533s-4.37719-24.24962-14.0607-31.02182c-7.9656-5.5597-18.22129-6.591-27.928-6.3621-7.06238.203-19.26485-1.48907-25.71553,1.27245C440.22288,538.431,437.26387,546.90479,436.31023,551.90313Z" transform="translate(-160.68481 -208.5)" fill="#fbbebe"/><path id="efe93a1e-ccdd-49fd-af5f-e26394aa0937-468" data-name="Path 1430" d="M457.62676,458.523a13.16962,13.16962,0,0,0-2.82413,4.51753A213.58786,213.58786,0,0,0,436.862,536.35613a7.32926,7.32926,0,0,1-.82693,3.55028,15.53466,15.53466,0,0,1-1.87049,2.023,7.02422,7.02422,0,0,0,.84,9.89817q.17346.1463.35609.28121c2.09937-3.95082,7.125-5.24231,11.59215-5.58556,21.38872-1.692,42.28155,8.25852,63.73432,7.50784-1.51355-5.23-3.69057-10.25571-4.92486-15.54841-5.4589-23.50169,8.15632-49.08916-.19073-71.72579-1.6675-4.52979-4.45348-8.98325-8.84294-10.96818a23.55527,23.55527,0,0,0-5.66189-1.49858c-5.42075-.97952-16.21183-5.166-21.45275-3.48622-1.93452.624-2.69742,2.44268-4.3009,3.54209C462.87722,455.90186,459.64576,456.474,457.62676,458.523Z" transform="translate(-160.68481 -208.5)" fill="#1d4ed8"/><path id="a38c3c09-000b-42b7-8619-0229d8aff5e9-469" data-name="Path 1421" d="M754.67242,536.1831c-6.45068-2.76152-18.65315-1.06948-25.71553-1.27245-9.70666-.22892-19.96235.8024-27.928,6.3621-9.68351,6.7722-14.137,19.2008-14.0607,31.02182s4.04615,23.21839,8.29664,34.2533c2.36638,6.22174,4.86084,12.39318,5.68777,18.946,0,0-84.62988,10.0337-89.73865,14.14932s-7.39205,12.34819-3.474,17.43793,126.17305,10.19983,142.2691,6.794a5.08966,5.08966,0,0,0,5.21639-4.94937c1.62663-9.49139,2.93721-18.99642,3.81455-28.57778.46456-4.93706.80242-9.87421,1.14573-14.82359l3.65653-52.51275a45.04293,45.04293,0,0,0-.15258-11.10851C762.73613,546.90479,759.77712,538.431,754.67242,536.1831Z" transform="translate(-160.68481 -208.5)" fill="#fbbebe"/><path id="bd3879bf-5d05-49be-b690-c4d97e29a2ab-470" data-name="Path 1430" d="M734.68691,454.346c-1.60348-1.09941-2.36638-2.91813-4.3009-3.54209-5.24092-1.67976-16.032,2.5067-21.45275,3.48622a23.55527,23.55527,0,0,0-5.66189,1.49858c-4.38946,1.98493-7.17544,6.43839-8.84294,10.96818-8.34705,22.63663,5.26817,48.2241-.19073,71.72579-1.23429,5.2927-3.41131,10.3184-4.92486,15.54841,21.45277.75068,42.3456-9.19987,63.73432-7.50784,4.46712.34325,9.49278,1.63474,11.59215,5.58556q.18253-.13482.35609-.28121a7.02422,7.02422,0,0,0,.84005-9.89817,15.53466,15.53466,0,0,1-1.87049-2.023,7.32926,7.32926,0,0,1-.82693-3.55028,213.58786,213.58786,0,0,0-17.94066-73.31562,13.16962,13.16962,0,0,0-2.82413-4.51753C740.35424,456.474,737.12278,455.90186,734.68691,454.346Z" transform="translate(-160.68481 -208.5)" fill="#1d4ed8"/><circle cx="420.92361" cy="438.81028" r="19.07275" fill="#fbbebe"/><circle cx="463.15612" cy="438.81028" r="19.07275" fill="#fbbebe"/><path d="M741.57233,690.28819H479.54154a11.55237,11.55237,0,0,1-11.53931-11.53864V519.78292a11.55237,11.55237,0,0,1,11.53931-11.53864H741.57233a11.55237,11.55237,0,0,1,11.5393,11.53864V678.74955A11.55237,11.55237,0,0,1,741.57233,690.28819Z" transform="translate(-160.68481 -208.5)" fill="#3f3d56"/><circle id="bf1cdf42-3b4f-4239-91c9-f6802a29e918" data-name="Ellipse 263" cx="449.2365" cy="390.76627" r="7.63455" fill="#fff"/><polygon points="878.63 449.724 0 449.724 0 476.724 51.97 476.724 51.97 483 826.68 483 826.68 476.724 878.63 476.724 878.63 449.724" fill="#f1f1f1"/><path d="M537.55552,334.04923h0c-11.3546,0-20.55934-9.95244-20.55934-22.22945h0V300.705c0-12.277,9.20473-22.22945,20.55933-22.22945h0v55.57369Z" transform="translate(-160.68481 -208.5)" fill="#1d4ed8"/><path d="M668.77923,278.47558h0c11.35461,0,20.55935,9.95245,20.55935,22.22943v11.11477c0,12.277-9.20472,22.22945-20.55935,22.22945h0V278.47558Z" transform="translate(-160.68481 -208.5)" fill="#1d4ed8"/><path d="M679.55259,302.45164h-3.262c0-44.73-33.65638-81.12069-75.026-81.12069-41.36939,0-75.02605,36.3907-75.02605,81.12069h-3.262c0-46.6749,35.11988-84.64766,78.288-84.64766C644.433,217.804,679.55259,255.77677,679.55259,302.45164Z" transform="translate(-160.68481 -208.5)" fill="#1d4ed8"/></svg>
                </div>
                <div className='flex flex-col justify-between gap-8 md:gap-10'>
                    <div className='md:max-w-lg flex flex-col gap-6'>
                        <p className='text-dark-gray dark:text-gray text-base'>
                            I&apos;m an <strong className='font-semibold text-black dark:text-white'>experienced</strong> Full-Stack Developer with over <strong className='font-semibold text-black dark:text-white'>2 years</strong> of expertise using technologies like React, Node.js, MongoDB, Tailwind CSS, Next.js, and TypeScript. 
                        </p>
                        <p className='text-dark-gray dark:text-gray text-base'>
                            Skilled in both frontend and backend development, I create adaptable solutions for user needs. Currently I am majoring in <strong className='font-semibold text-black dark:text-white'>Information Systems</strong> at IFBA.
                        </p>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className="w-1/3 flex flex-col gap-4 bg-light-gray dark:bg-darker-blue px-4 py-8 rounded-lg">
                            <div>
                                <svg className='fill-black dark:fill-gray' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_305_770)">
                                    <path d="M1.77778 0C0.797222 0 0 0.797222 0 1.77778V9.77778C0 10.7583 0.797222 11.5556 1.77778 11.5556H6.66667L6.36944 12.4444H4.44444C3.95278 12.4444 3.55556 12.8417 3.55556 13.3333C3.55556 13.825 3.95278 14.2222 4.44444 14.2222H11.5556C12.0472 14.2222 12.4444 13.825 12.4444 13.3333C12.4444 12.8417 12.0472 12.4444 11.5556 12.4444H9.63056L9.33333 11.5556H14.2222C15.2028 11.5556 16 10.7583 16 9.77778V1.77778C16 0.797222 15.2028 0 14.2222 0H1.77778ZM14.2222 1.77778V9.77778H1.77778V1.77778H14.2222Z"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_305_770">
                                    <rect width="16" height="14.2222" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className='text-black dark:text-gray text-xs md:text-sm'>Web<br/>Development</span>
                        </div>
                        <div className="w-1/3 flex flex-col gap-4 bg-light-gray dark:bg-darker-blue px-4 py-8 rounded-lg">
                            <div>
                                <svg className='fill-black dark:fill-gray' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_305_768)">
                                    <path d="M13.7813 1.84065L14.1594 2.21877C14.4531 2.51252 14.4531 2.98752 14.1594 3.27815L13.25 4.19065L11.8094 2.75002L12.7188 1.84065C13.0125 1.5469 13.4875 1.5469 13.7781 1.84065H13.7813ZM6.55625 8.00628L10.75 3.8094L12.1906 5.25002L7.99375 9.44378C7.90313 9.5344 7.79063 9.60003 7.66875 9.6344L5.84063 10.1563L6.3625 8.32815C6.39688 8.20628 6.4625 8.09378 6.55313 8.00315L6.55625 8.00628ZM11.6594 0.781275L5.49375 6.94378C5.22188 7.21565 5.025 7.55003 4.92188 7.91565L4.02813 11.0407C3.95313 11.3032 4.025 11.5844 4.21875 11.7782C4.4125 11.9719 4.69375 12.0438 4.95625 11.9688L8.08125 11.075C8.45 10.9688 8.78438 10.7719 9.05313 10.5032L15.2188 4.34065C16.0969 3.46252 16.0969 2.03752 15.2188 1.1594L14.8406 0.781275C13.9625 -0.0968506 12.5375 -0.0968506 11.6594 0.781275ZM2.75 2.00002C1.23125 2.00002 0 3.23127 0 4.75002V13.25C0 14.7688 1.23125 16 2.75 16H11.25C12.7688 16 14 14.7688 14 13.25V9.75003C14 9.3344 13.6656 9.00003 13.25 9.00003C12.8344 9.00003 12.5 9.3344 12.5 9.75003V13.25C12.5 13.9407 11.9406 14.5 11.25 14.5H2.75C2.05938 14.5 1.5 13.9407 1.5 13.25V4.75002C1.5 4.0594 2.05938 3.50002 2.75 3.50002H6.25C6.66563 3.50002 7 3.16565 7 2.75002C7 2.3344 6.66563 2.00002 6.25 2.00002H2.75Z"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_305_768">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className='text-black dark:text-gray text-xs md:text-sm font-medium'>UX/UI<br/>Design</span>
                        </div>
                        <div className="w-1/3 flex flex-col gap-4 bg-light-gray dark:bg-darker-blue px-4 py-8 rounded-lg">
                            <div>
                                <svg className='fill-black dark:fill-gray' width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_305_772)">
                                    <path d="M0.5 2C0.5 0.896875 1.39688 0 2.5 0H9.5C10.6031 0 11.5 0.896875 11.5 2V14C11.5 15.1031 10.6031 16 9.5 16H2.5C1.39688 16 0.5 15.1031 0.5 14V2ZM7 14C7 13.7348 6.89464 13.4804 6.70711 13.2929C6.51957 13.1054 6.26522 13 6 13C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15C6.26522 15 6.51957 14.8946 6.70711 14.7071C6.89464 14.5196 7 14.2652 7 14ZM9.5 2H2.5V12H9.5V2Z"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_305_772">
                                    <rect width="12" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className='text-black dark:text-gray text-xs md:text-sm font-medium'>Mobile<br/>Development</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About