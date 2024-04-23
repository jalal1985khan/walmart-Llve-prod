import React from 'react'
import Image from 'next/image'

function LearningPrograme() {
  return (
    <section class="bg-white dark:bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
        <h1 class="mb-4 text-2xl font-boglebold text-w-blue tracking-tight leading-none md:text-5xl lg:text-5xl dark:text-white leading-7">Grow your business with<br />the Walmart Vriddhi Learning Program</h1>
        <div class="flex justify-center items-center">
          <Image src="/images/line-svg.png" width={100} height={100} className='w-20' alt="walmart vriddhi" />
        </div>
        <p class="mb-8 text-lg font-bogleregular font-normal text-black lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Walmart Vriddhi is a supplier development program that aims to work with 50,000 Micro, Small and Medium Enterprises (MSMEs) in India to expand their domestic capabilities.</p>
        <div class="flex flex-col content-between gap-x-44 sm:flex-row sm:justify-center sm:space-y-0">
          <div class="block p-6 ">
            <h5 class="mb-2 text-4xl font-boglebold tracking-tight text-w-blue">DEVELOP</h5>
            <p class="text-xl font-bogleregular">On-Demand Learning &<br />Personalized Mentoring for MSMEs</p>
          </div>
          <div class="inline-block h-[150px] min-h-[1em] w-0.5 self-stretch bg-gray-200"></div>
          <div class="block p-6">
            <h5 class="mb-2 text-4xl font-boglebold tracking-tight text-w-green">CONNECT</h5>
            <p class="text-xl font-bogleregular">Market Access & Onboarding<br />Support with Flipkart Marketplace</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningPrograme
