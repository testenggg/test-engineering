import React from 'react'
import AboutUs from '../components/about'
import Image from 'next/image'
import OurImpact from '../components/OurImpact'

function About() {
  return (
  <section className="">
      <div className="relative h-[200px] md:h-[300px] w-full">
        <Image
          src="/img/factory.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
      <AboutUs/>
      <OurImpact/>
    </section>
  )
}

export default About
