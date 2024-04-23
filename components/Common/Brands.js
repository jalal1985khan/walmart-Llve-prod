import React from 'react'

function Brands() {
    return (
        <div className='flex bg-gray-50 border-b py-4 sm:px-10 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
                <img src="/images/brand-flipkart.png" alt="logo" className='w-96' />
                <div className="flex gap-x-6 gap-y-4 ml-auto">
                    <div className='flex items-center space-x-8'>
                        <img src="/images/brand-swasti.png" alt="logo" className='w-96' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
