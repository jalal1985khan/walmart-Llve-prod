import React from 'react'
import Image from 'next/image'

function Banner() {

    const Banner = [
        {
            'id': 1,
            'image': '/images/testimonials/desktop-Umesh-Nanda.png',
            'feedback': `“Walmart Vriddhi is a complete growth package for ambitious MSMEs. Its innovative learning and growth approach has been a source of inspiration for us to get through the pandemic.”`,
            'name': 'Umesh Nanda',
            'bussiness': 'Owner, Soumya International, Panipat - Haryana',
        },
        {
            'id': 2,
            'image': '/images/testimonials/desktop-Umesh-Nanda.png',
            'feedback': `“Walmart Vriddhi is a complete growth package for ambitious MSMEs. Its innovative learning and growth approach has been a source of inspiration for us to get through the pandemic.”`,
            'name': 'Umesh Nanda',
            'bussiness': 'Owner, Soumya International, Panipat - Haryana',
        },
        { 'id': 3, 'image': '/images/testimonials/desktop-Umesh-Nanda.png' },
        { 'id': 4, 'image': '/images/testimonials/desktop-Umesh-Nanda.png' },
        { 'id': 5, 'image': '/images/testimonials/desktop-Umesh-Nanda.png' },
    ]


    return (



        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <div class="relative  overflow-hidden h-[80vh]">
                {
                    Banner.map((items, index) => (
                        <div key={index} class="duration-700 ease-in-out h-fit" data-carousel-item >
                             <div class="flex flex-row items-center bg-white">
                            <div class="flex flex-col text-start p-4 w-11/12">
                                        <p class="mb-2 text-2xl font-bogleitalic tracking-tight text-gray-900 dark:text-white">{items.feedback}</p>
                                        <p className='mb-2 text-3xl font-boglebold text-w-green'>{items.name}</p>
                                        <p class="mb-3 text-xl font-bogleregular ">{items.bussiness}</p>
                            </div>
                            <div className='flex item-end w-3/5'>
                                        <Image class="w-svw h-96" src={items.image} alt={items.name} width={200} height={200} />
                            </div>
                                </div>
                            
                        </div>

                    ))
                }
            </div>

            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {
                    Banner.map((items, index) => (
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label={`Slide ${items.id}`} data-carousel-slide-to={items.id} key={index}></button>

                    ))
                }


            </div>

            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}

export default Banner
