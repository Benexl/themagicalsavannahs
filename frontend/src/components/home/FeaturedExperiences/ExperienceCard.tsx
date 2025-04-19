import Image from 'next/image';
import Link from 'next/link';

interface ExperienceCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  linkUrl: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageUrl,
  altText,
  title,
  description,
  linkUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden experience-card transition duration-300 hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-hunter-green mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={linkUrl} className="text-moonstone font-medium hover:underline">
          Explore →
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
