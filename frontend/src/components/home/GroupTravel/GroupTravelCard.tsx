import Image from "next/image";
import Link from "next/link";

interface GroupTravelCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  linkUrl: string;
  linkLabel?: string;
}

export function GroupTravelCard({
  imageUrl,
  altText,
  title,
  description,
  linkUrl,
  linkLabel = "Learn more",
}: GroupTravelCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          style={{ objectFit: "cover" }}
          className="absolute block w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-hunter-green mb-3 flex-grow">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={linkUrl}
          className="text-moonstone font-medium hover:underline mt-auto"
        >
          {linkLabel} →
        </Link>
      </div>
    </div>
  );
}
