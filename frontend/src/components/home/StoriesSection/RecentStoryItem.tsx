import Link from "next/link";

interface RecentStoryItemProps {
  title: string;
  description: string;
  author: string;
  linkUrl: string;
}

export function RecentStoryItem({
  title,
  description,
  author,
  linkUrl,
}: RecentStoryItemProps) {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
      <h3 className="font-bold text-lg mb-2 text-hunter-green">{title}</h3>
      <p className="text-gray-700 mb-3 text-sm">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">By {author}</span>
        <Link
          href={linkUrl}
          className="text-moonstone font-semibold hover:underline text-sm"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
