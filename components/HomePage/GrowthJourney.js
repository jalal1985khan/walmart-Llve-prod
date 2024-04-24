import React from 'react'
import Image from 'next/image'

function GrowthJourney() {
    return (
        <section class="bg-gray-100">
            <div class="py-1 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
                <h2 class="mb-4 text-2xl font-boglebold text-w-blue tracking-tight leading-none md:text-5xl lg:text-5xl dark:text-white leading-7">Your growth journey with Walmart Vriddhi</h2>
                <div class="flex justify-center items-center">
                    <Image src="/images/line-svg.png" width={100} height={100} className='w-20' alt="walmart vriddhi" />
                </div>
            </div>

            <div class="grid grid-cols-3 ">
                <div class="content-end">
                    <div class="flex justify-end items-center">
                        <Image src="/images/flipkart.png" className='w-full p-6' width={300} height={300} alt="walmart vriddhi" />
                    </div>

                    <div className='bg-w-blue p-6 h-28'>
                        <h5 class="mb-2 text-xl font-bogleregular text-white tracking-tight text-gray-900 dark:text-white">Grow domestically with<br />
                            Flipkart incubation support</h5>
                    </div>
                </div>

                <div class="content-end">
                    <div class="flex justify-end items-center">
                        <Image src="/images/India-Image.png" className='w-full p-6' width={300} height={300} alt="walmart vriddhi" />
                    </div>

                    <div className='bg-w-blue p-10 h-40'>
                        <h5 class="mb-2 text-xl font-bogleregular tracking-tight text-white text-gray-900 dark:text-white">Enterprise-specific<br />
                            Personalized Mentoring support</h5></div>
                </div>

                <div class="content-end">
                    <div class="flex justify-end items-center">
                        <Image src="/images/exports-with-Walmart.png" className='w-full p-6' alt="walmart vriddhi" width={300} height={300} />
                    </div>

                    <div className='bg-w-blue p-6 h-52'>
                        <h5 class="mb-2 text-xl font-bogleregular text-white tracking-tight text-gray-900 dark:text-white">Grow your Network<br /> with Walmart Vriddhi</h5>
                    </div>
                </div>



            </div>


        </section>
    )
}

export default GrowthJourney
