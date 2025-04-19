import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react"; // Using lucide-react
import { Button } from "@/components/ui/button"; // Using Shadcn Button

export default function BusinessSection() {
  return (
    <section className="py-16 bg-moonstone text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For Businesses & Teams
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Corporate travel planning made magical
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Transform Your Team Through Travel
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>
                  Custom retreats designed for team building and strategy sessions
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Unique venues from beachfront to bush lodges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Wellness activities to recharge your employees</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>CSR opportunities with local communities</span>
              </li>
            </ul>
            {/* Using Shadcn Button for the link */}
            <Button
              asChild
              variant="secondary" // Or choose a variant that fits the design
              className="bg-white text-moonstone hover:bg-gray-100 font-bold py-3 px-8 rounded-full"
            >
              <Link href="#">Plan a team escape</Link>
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className="relative rounded-xl overflow-hidden h-80">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Corporate retreat team working together"
              fill
              style={{ objectFit: "cover" }}
              className="absolute block w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
