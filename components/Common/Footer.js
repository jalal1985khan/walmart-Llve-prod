import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

function Footer() {
  return (
<footer class="bg-w-footer dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
        <div>
                      <h2 class="mb-6 text-2xl font-semibold text-white font-boglebold uppercase dark:text-white">Sitemap</h2>
                      <hr className='h-px border-t w-9/12 border-gray-400 pb-4'/>
            <ul class="text-white dark:text-white text-xl font-bogleregular">
                <li class="mb-4">
                    <a href="#" class=" hover:text-w-yellow">About us</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">MSME growth journey</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Success Stories</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Alumni Profiles</a>
                          </li>
                          <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Webinars</a>
                          </li>
                          <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Newsroom</a>
                          </li>
                          <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Marketplace</a>
                          </li>
                          <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">MSME Summit 2024</a>
                          </li>
                          <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Contact us</a>
                </li>
            </ul>
        </div>
        <div>
                      <h2 class="mb-6 text-2xl font-semibold text-white font-boglebold uppercase dark:text-white">Privacy Policy</h2>
                      <hr className='h-px border-t w-9/12 border-gray-400 pb-4'/>
            <ul class="text-white dark:text-white text-xl font-bogleregular">
                <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Privacy policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:text-w-yellow">Terms of use</a>
                </li>
               
            </ul>
        </div>
        <div>
                      <h2 class="mb-6 text-2xl font-semibold text-white font-boglebold uppercase dark:text-white">Contact Us</h2>
                      <hr className='h-px border-t w-9/12 border-gray-400 pb-4'/>
            <ul class="text-white dark:text-white text-xl font-bogleregular">
                <li class="mb-4">
                    <p class="">For more information, contact us:</p>
                </li>
                <li class="mb-4">
                              <a href="#" class="hover:text-w-yellow flex">
                              <FaRegEnvelope size={35} className='rounded-full border-2 p-1 fill-w-yellow border-w-yellow' />
                                   <span className='px-4'>contactus@walmartvriddhi.org</span></a>
                </li>
                <li class="mb-4">
                              <a href="#" class="hover:text-w-yellow flex">
                                  <FaPhoneAlt size={35} className='rounded-full border-2 p-1 fill-w-yellow border-w-yellow' />
                                   <span className='px-4'>+91 6361 056 533</span></a>
                </li>
            </ul>
        </div>
      
    </div>
    <div class="px-4 py-6 md:flex md:items-center md:justify-between border-t border-gray-400">
        <span class="text-sm text-white dark:text-gray-300 sm:text-center font-bogleregular">© 2024 Walmart Vriddhi. All Rights Reserved.
        </span>
        
      </div>
    </div>
</footer>

  )
}

export default Footer
