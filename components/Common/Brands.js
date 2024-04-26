import React from 'react'
import Image from 'next/image'

function Brands() {
    return (
        <div className='flex bg-gray-50 border-b py-4 sm:px-10 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
                <Image src="/images/brand-flipkart.png" alt="flipkart" className='w-80 h-12' width={200} height={60} />
                <div className="flex gap-x-6 gap-y-4 ml-auto">
                    <div className='flex items-center space-x-8'>
                        <Image src="/images/brand-swasti.png" alt="swasti" className='w-80 h-10' width={200} height={60} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
