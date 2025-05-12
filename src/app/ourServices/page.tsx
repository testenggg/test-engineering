import React from 'react'
import OurServices from '../components/OurServices'
import Image from 'next/image'

function OurService() {
  return (
    <section className="">
          <div className="relative h-[200px] md:h-[300px] w-full">
            <Image
              src="/img/factory5.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold"> Our Services</h1>
              </div>
            </div>
          </div>
      <OurServices/>
      </section>
  )
}

export default OurService

