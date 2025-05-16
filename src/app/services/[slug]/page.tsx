"use client";

import Image from "next/image";
import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  if (!slug) {
    console.error("Slug parameter is missing");
    return notFound();
  }

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <div className="py-4">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[300px] w-full mt-4">
        <Image
          src={service.heroImg || service.img}
          alt="Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Image + Description */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-6 md:p-12">
        <div className="w-full h-[300px] relative">
          <Image
            src={service.img}
            alt={service.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
          <p className="text-gray-700 leading-7">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
