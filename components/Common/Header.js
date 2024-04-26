import React from 'react'
import Image from 'next/image'

function Header() {
  return (

      <header className='flex bg-white border-b py-4 sm:px-10 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50 drop-shadow-md'>
    <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
        <a href="javascript:void(0)"><Image src="/images/Walmart-Vriddhi-logo.svg" alt="logo" className='w-36' width={100} height={100} />
      </a>
      <div className="flex gap-x-6 gap-y-4 ml-auto">
      <div
          className='flex border-2 focus-within:border-gray-400 rounded-full px-10 py-3 overflow-hidden max-lg:hidden'>
          <input type='text' placeholder='Search something...' className='w-56 text-sm bg-transparent outline-none pr-2' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
            className="cursor-pointer fill-gray-600">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </div>
  
        <div className='flex items-center space-x-8'>   
          <button
            className='px-10 py-3 text-1xl rounded-full text-white border-2 border-w-blue bg-w-blue hover:bg-white hover:text-w-blue font-bogleregular'>Register</button>
  <button id="toggleSidebar" aria-expanded="true" aria-controls="sidebar" className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h14M1 6h14M1 11h7"/> </svg>
              </button>
              <button aria-expanded="true" aria-controls="sidebar" className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/></svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
        </div>
      </div>
    </div>
  </header>
    
  )
}

export default Header
