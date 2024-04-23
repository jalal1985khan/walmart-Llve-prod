import React from 'react'
import Image from 'next/image'

function ProgramBenefits() {

    const Benefits = [
        {
            'id': 1,
            'name': 'Business Development Assistance to Go Digital',
            'image': '/images/benefits-step-1.webp',
            'color': 'bg-w-orange'
        },
        {
            'id': 2,
            'name': 'Exclusive Pre-Launch Support to Grow on Flipkart',
            'image': '/images/benefits-step-2.webp',
            'color': 'bg-w-yellow'
        },
        {
            'id': 3,
            'name': 'New Domestic Markets',
            'image': '/images/benefits-step-3.webp',
            'color': 'bg-w-green'
        },
        {
            'id': 4,
            'name': 'Collaborate and Grow your MSME Network',
            'image': '/images/benefits-step-4.webp',
            'color': 'bg-w-bluelight'
        },
        {
            'id': 5,
            'name': 'Personalized Mentoring Support with Industry Experts',
            'image': '/images/benefits-step-5.webp',
            'color': 'bg-w-blue'
        },


    ]

    return (
        <section class="bg-gray-100">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h2 class="mb-4 text-2xl font-boglebold text-w-blue tracking-tight leading-none md:text-5xl lg:text-5xl dark:text-white leading-7">Program benefits</h2>
                <div class="flex justify-center items-center">
                    <Image src="/images/line-svg.png" width={100} height={100} className='w-20' alt="walmart vriddhi"/>
                </div>

                <div className='grid grid-cols-5 pt-12 gap-1'>

                    {
                        Benefits.map((items, index) => (
                            <div class={`max-w-sm p-6 h-80 hover:shadow cursor-pointer py-6
                                transform transition duration-500 
                                hover:scale-110 hover:z-50 z-0 ${items.color}`} key={index}>
                                <div class="flex justify-center items-center">
                                    <Image src={items.image} width={100} height={100} className='w-20' alt={items.name} />
                                </div>
                                <hr class="mt-12 mb-3 h-px bg-gray-100" />
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-white font-bogleregular">{items.name}</h5>
                            </div>

                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default ProgramBenefits
