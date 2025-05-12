"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/app/data/services";

type TabItem = {
  icon?: string;
  range: string;
  content: string;
};

type Tab = {
  label: string;
  items: TabItem[];
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="py-4">
      {/* Breadcrumb */}
      <div className="text-sm px-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>{" "}
        / <span className="capitalize">{params.slug.replace("-", " ")}</span>
      </div>

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

      {/* Two-Column Section */}
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

      {/* Tabs Section */}
      <Tabs tabs={service.tabs || []} />
    </div>
  );
}

// Tabs Component
function Tabs({ tabs }: { tabs: Tab[] }) {
  const [activeMain, setActiveMain] = useState(0);
  const currentItems = tabs[activeMain]?.items || [];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0 mt-12">
      {/* Main Tabs */}
      <div className="flex space-x-4 overflow-x-auto mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-t-md border-b-2 whitespace-nowrap cursor-pointer ${
              i === activeMain
                ? "border-[#1E3375] text-white bg-[#1E3375]"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setActiveMain(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Items Below */}
      <div className="space-y-6">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-sm bg-white flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap"
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <Image
                  src={item.icon}
                  alt="icon"
                  width={40}
                  height={40}
                />
              )}
              <p className="text-gray-800 font-medium">{item.range}</p>
            </div>
            <p className="text-gray-800 text-center">{item.content}</p>
            <button className="px-4 py-2 bg-[#1E3375] text-white rounded-2xl hover:bg-[#162753]">
              Download Brochure
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
