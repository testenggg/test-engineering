import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "../../data/services";

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div className="p-10 max-w-5xl mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <Image
        src={service.img}
        alt={service.title}
        width={900}
        height={500}
        className="rounded-lg mb-6"
      />
      <p className="text-lg leading-7 text-gray-700">{service.description}</p>
    </div>
  );
}
