import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  imageUrl: string;
  altText: string;
  tag: string;
  title: string;
  description: string;
  linkUrl: string;
  linkLabel: string;
}

export function DestinationCard({
  imageUrl,
  altText,
  tag,
  title,
  description,
  linkUrl,
  linkLabel,
}: DestinationCardProps) {
  return (
    <div className="relative h-96 overflow-hidden rounded-lg md:h-[600px]">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        style={{ objectFit: "cover" }}
        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute bottom-10 left-10 z-10 text-white max-w-lg p-4 rounded">
        <span className="bg-moonstone/80 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {tag}
        </span>
        <h3 className="text-3xl font-bold mt-2">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
        <Link
          href={linkUrl}
          className="mt-3 inline-block text-white font-semibold hover:underline focus:outline-none focus:ring-2 ring-white rounded"
        >
          {linkLabel} →
        </Link>
      </div>
    </div>
  );
}
