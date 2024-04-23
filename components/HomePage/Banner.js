import React from 'react'

function Banner() {

    const Banner = [
        { 'id': 1, 'image': '/images/HomeBanner-1.jpeg' },
        { 'id': 2, 'image': '/images/HomeBanner-2.jpeg' },
        { 'id': 3, 'image': '/images/HomeBanner-3.jpeg' },
        { 'id': 4, 'image': '/images/HomeBanner-4.jpeg' },
        { 'id': 5, 'image': '/images/HomeBanner-5.jpeg' },
    ]


    return (



        <div id="default-carousel" class="relative w-full" data-carousel="slide">

            <div class="relative  overflow-hidden h-[80vh]">
                {
                    Banner.map((items, index) => (
                        <div key={index} class="duration-700 ease-in-out h-fit" data-carousel-item >
                            <img src={items.image} class="absolute block w-full" alt="..." />
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
