import React from 'react'
import Image from 'next/image'

function Banner() {

    const Banner = [
        {
            'id': '1',
            'feedback': `“Walmart Vriddhi is a complete growth package for ambitious MSMEs. Its innovative learning and growth approach has been a source of inspiration for us to get through the pandemic.”`,
            'name': 'Umesh Nanda',
            'bussiness': 'Owner, Soumya International, Panipat - Haryana',
            'desktopImage': '/images/testimonials/desktop-Umesh-Nanda.png',
            'mobileImage': '/images/testimonials/mobile-Umesh-Nanda.png',
        },
        {
            'id': '2',
            'feedback': `"Walmart, through the Vriddhi program, has helped me understand what all possible options can be explored during this crisis. It is important for a supplier like me to not stop or give up, even during a pandemic, and Vriddhi has helped me push the pedal here. Even mentorship and advice on financial schemes, and government programs, has helped me navigate through the impact of COVID-19."`,
            'name': 'Babita Gupta',
            'bussiness': 'Founder, Sarangi Creations, Sonipat - Haryana',
            'desktopImage': '/images/testimonials/desktop-Babita-Gupta.png',
            'mobileImage': '/images/testimonials/mobile-Babita-Gupta.png',
        },
        {
            'id': '3',
            'feedback': `“From business theory to practical measures, from maximizing product quality to minimizing wastage, I’ve quickly applied everything I learned during the first two levels of Walmart Vriddhi. At the same time, I’ve maintained my original business strategy: the end-to-end production of exclusive, never-seen-before designs.”`,
            'name': 'Milan Makwana',
            'bussiness': 'Founder, Maha Rudra Enterprise, Surat - Gujarat',
            'desktopImage': '/images/testimonials/desktop-Milan-Makwana.png',
            'mobileImage': '/images/testimonials/mobile-Milan-Makwana.png',
        },
        {
            'id': '4',
            'feedback': `“There is a lot to learn when you begin selling digitally, especially with an eye on markets. But with Vriddhi helping us gain the practical know-how of building the business, I am positive that we will be able to tap more markets in the long run.”`,
            'name': 'Mohit Mehta',
            'bussiness': 'Founder, Maha Rudra Enterprise, Surat - Gujarat',
            'desktopImage': '/images/testimonials/desktop-Mohit-Mehta.png',
            'mobileImage': '/images/testimonials/mobile-Mohit-Mehta.png',
        },
        {
            'id': '5',
            'feedback': `“Through Vriddhi, I’ve learnt a lot about different aspects of modern business, including digital sales and developing products for consumer markets. As a result, we are expanding our existing portfolio to include consumer goods and targeting online sales as our main growth channel.”`,
            'name': 'Harpreet Singh',
            'bussiness': 'Owner, Shalimar Rubber & Plastic Industries, Kundli - Haryana',
            'desktopImage': '/images/testimonials/desktop-Harpreet-Singh.png',
            'mobileImage': '/images/testimonials/mobile-Harpreet-Singh.png',
        },
        {
            'id': '6',
            'feedback': `“The clarity of purpose and the guidance that we received from Vriddhi at this crucial time benefited our internal operations as well as sales. It helped us set an example for others. We have aligned our systems with Walmart’s, and we can now focus on innovation.”`,
            'name': 'Sagar Kalra',
            'bussiness': 'Owner, Arch Fab, Panipat - Haryana',
            'desktopImage': '/images/testimonials/desktop-sagar-kalar.png',
            'mobileImage': '/images/testimonials/mobile-sagar-kalar.png',
        },
        {
            'id': '7',
            'feedback': `“Walmart’s Vriddhi program has been that guiding light for many MSME owners like me. As a wholesale supplier for the company, I had the good fortune of signing up with the program, which was launched late last year, to train and prepare us to participate in the domestic supply chains.”`,
            'name': 'Shivani Agarwal',
            'bussiness': 'Founder, Scraft Products Pvt. Ltd., Pitampura - Delhi ',
            'desktopImage': '/images/testimonials/desktop-Shivani-Agarwal.png',
            'mobileImage': '/images/testimonials/mobile-Shivani-Agarwal.png',
        }
    ]


    return (

        <div className='bg-w-yellow py-10'>
        <div class="py-1 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
            <h2 class="mb-4 text-2xl font-boglebold text-black tracking-tight leading-none md:text-5xl lg:text-5xl dark:text-white leading-7">Proud owners who keep adding to the India story</h2>
            <div class="flex justify-center items-center">
                <Image src="/images/line-svg.png" width={100} height={100} className='w-20' alt="walmart vriddhi"/>
            </div>
        </div>

        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            <div class="relative  overflow-hidden w-4/5 mx-auto">
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
                                        <Image class="w-svw h-96" src={items.desktopImage} alt={items.name} width={200} height={200} />
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
</div>
    )
}

export default Banner
