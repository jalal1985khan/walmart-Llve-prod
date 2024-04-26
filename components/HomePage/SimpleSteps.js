'use client'
import React, { useState } from 'react';
import Image from 'next/image'

function SimpleSteps() {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    return (
        <div className='bg-white py-12 pb-32'>
            <div class="py-1 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
                <h2 class="mb-4 text-2xl font-boglebold text-black tracking-tight leading-none md:text-5xl lg:text-5xl dark:text-white leading-7">Proud owners who keep adding to the India story</h2>
                <div class="flex justify-center items-center">
                    <Image src="/images/line-svg.png" width={100} height={100} className='w-20' alt="walmart vriddhi" />
                </div>
            </div>
            <div className='webkit-center'>
                <div className='w-full justify-center'>
                    <div className={`h-[5em] ${ isHovered && 'transition ease-in-out delay-150 -translate-y-5 scale-110'}`}>
                        {isHovered ? (
                            <>
                                <h2 className='font-boglebold text-2xl text-center text-a-bluelight'>Market Connect</h2>
                                <p className='font-bogleregular text-xl text-center'>On-board and transact on Flipkart Marketplace and Flipkart Wholesale</p>
                            </>
                        ) : (
                                <>
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <span class="sr-only">Loading...</span>
</div>
                                </>
                                
                        )}
                    </div>
                </div>
                <div class="grid grid-cols-1 grid-flow-col gap-0">
                    <div className="flex justify-center items-center z-20">
                        <div className='mt-[0em]'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img src="images/arc-1.png" className='hover:cursor-pointer
                                transform transition duration-500 hover:opacity-45'


                            /></div>
                    </div>
                </div>

                <div class="grid grid-cols-3 grid-flow-col h-min -mt-12 w-[88em]">
                    <div className="flex justify-end items-center">
                        <div className='w-full text-start'>
                            <div className={`h-[10em] w-[20em] ${ isHovered1 && 'transition ease-in-out delay-150 -translate-y-5 scale-110'}`}>
                                {isHovered1? (
                                    <>
                                        <h2 className='font-boglebold text-2xl text-center text-a-bluedark'>On-Demand Learning</h2>
                                        <p className='font-bogleregular text-xl text-center'>Self-learning (Business Fundamentals & Advanced)</p>
                                    </>):(
                                <>
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <span class="sr-only">Loading...</span>
</div>
                                </>
                                
                        )}
                                    </div>
                            <div className={`h-[10em] w-[20em] ${ isHovered2 && 'transition ease-in-out delay-150 -translate-y-5 scale-110'}`}>
                            {isHovered2 ? (
                                    <>
                                    <h2 className='font-boglebold text-2xl text-center text-a-purple'>Registration</h2>
                                <p className='font-bogleregular text-xl text-center'>Fill a few details and register with Walmart Vriddhi in under 2 minutes</p>
                                    </>) :
                                    (
                                        <>
        <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <span class="sr-only">Loading...</span>
        </div>
                                        </>
                                        
                                )
                                    }
                                
                            </div>
                        </div>
                        <div class="grid grid-row-2 grid-flow-row">

                            <div className='absolute -mt-[15em] -ml-[5.8em] z-40'
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            >

                                <img src="images/step_02.png" className='hover:cursor-pointer
                                transform transition duration-500 hover:opacity-45'/>
                            </div>

                            <div className='absolute -mt-[2.9em] -ml-[6.2em] z-50'
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                            >
                                <img src="images/step_01.png" className='hover:cursor-pointer
                                transform transition duration-500 hover:opacity-45' />
                            </div>

                        </div>


                    </div>

                    <div className="flex justify-center items-center justify-self-center mt-6 lg:w-[350px]">
                        <img src="images/circle_lady.png" className='' />
                    </div>
                    <div className="flex justify-start items-center">
                        <div class="grid grid-row-2 grid-flow-row">
                            <div className="absolute lg:-mt-[15.1em] lg:-ml-[6.5em]  z-10"
                            onMouseEnter={() => setIsHovered3(true)}
                            onMouseLeave={() => setIsHovered3(false)}
                            
                            >
                                <img src="images/step_05.png" className='hover:cursor-pointer
                                transform transition duration-500 hover:opacity-45'/>
                            </div>
                            <div className='absolute -mt-[2.9em] -ml-[3.8em] z-5'
                            onMouseEnter={() => setIsHovered4(true)}
                            onMouseLeave={() => setIsHovered4(false)}
                            >
                                <img src="images/step_06.png" className='hover:cursor-pointer
                                transform transition duration-500 hover:opacity-45'/></div>

                        </div>
                        <div className='w-full text-end'>
                            <div className={` h-[10em] ml-36  ${ isHovered3 && 'transition ease-in-out delay-150 -translate-y-5 scale-110'}`}>
                            {isHovered3? (
                            <>
                                <h2 className='font-boglebold text-2xl text-center text-a-greendark'>Personalized Mentoring</h2>
                                <p className='font-bogleregular text-xl text-center'>Engage with experts for customized strategic & operational solutions</p>
                            </>
                                ) :
                                (
                                    <>
    <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <span class="sr-only">Loading...</span>
    </div>
                                    </>
                                    
                            )
                        }
                                </div>
                            <div className={` h-[10em] ml-36  ${ isHovered4 && 'transition ease-in-out delay-150 -translate-y-10 scale-110'}`}
                            >
                            {isHovered4? (
                            <>
                                <h2 className='font-boglebold text-2xl text-center text-a-greenlight'>Network Support</h2>
                                <p className='font-bogleregular text-xl text-center'>Learn, share and connect with a wide network of MSMEs</p>
                            </>
                        ):(
                            <>
<div role="status" class="max-w-sm animate-pulse">
<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
<span class="sr-only">Loading...</span>
</div>
                            </>
                            
                    )}
                                
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default SimpleSteps
