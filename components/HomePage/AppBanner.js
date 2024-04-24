import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AppBanner() {
  return (
    <div class="grid grid-cols-2 gap-1 py-12 w-10/12 mx-auto">
          <div className='flex justify-center items-center'>
              <Image src="/images/app_banner.png" className='w-3/5' width={200} height={200}/>
        </div>
    
          <div className=''>
              <div>
                  <h2 className='font-boglebold text-5xl text-w-blue'>Download the<br/>
                      Walmart Vriddhi App</h2>
                  <p className='text-xl font-bogleregular py-4'>#GrowKaro with one of the best learning programs for MSMEs in the country!</p>
                  <div class="grid grid-cols-2 gap-4">
                  <div>
                          <Link href="https://play.google.com/store/search?q=Walmart%20vriddhi&c=apps">
                              <Image src="/images/google-play-badge.png" className='w-96' width={300} height={200} /></Link>
                      </div>
                      <div>
                          <Link href="https://apps.apple.com/in/app/walmart-vriddhi/id1631093898">
                              <Image src="/images/apple-store-badge.png" className='w-96' width={200} height={200} /></Link>
                      </div>
                      
                      
                  </div>
                  <hr class="mt-6 mb-3 h-px bg-gray-100" />
                      <p className='text-xl font-bogleregular'>Download the App to begin your Walmart Vriddhi FREE learning program. The app provides access to learning modules in English, Hindi and Tamil.</p>
              </div>

    </div>
  </div>
  )
}

export default AppBanner
