import React from "react";

function OurImpact() {
  return (
    <section className="bg-[#E9EBF1] py-12 px-4 md:px-12">
      <div className="flex flex-col w-full gap-10 items-center">
      <div className="flex flex-col md:flex-row w-full gap-6">
  {/* Heading - Left Half */}
  <div className="w-full md:w-1/2">
    <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
      Our Impact: Delivering <br />
      Reliable Power Solutions <br />
      for Over a Decade
    </h2>
  </div>

  {/* Description and Stats - Right Half */}
  <div className="w-full md:w-1/2 space-y-6">
    <p className="text-gray-700">
      With over 10 years of experience, we have successfully served more
      than 500 clients. Our commitment to providing uninterrupted power
      has made us a trusted partner in the industry.
    </p>

    <div className="flex gap-8">
      <div>
        <h3 className="text-3xl font-extrabold text-black">500+</h3>
        <p className="text-gray-700 text-sm">
          Clients served across industries and sectors
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-black">10+</h3>
        <p className="text-gray-700 text-sm">
          Years of experience in generator rental services
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src="/img/impact.png"
            alt="Factory Power Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default OurImpact;
