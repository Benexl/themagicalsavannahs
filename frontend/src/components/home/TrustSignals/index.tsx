import Image from "next/image";
import { CreditCard, ShieldCheck } from "lucide-react"; // Using lucide-react

// Placeholder logos - replace with actual paths or components
const trustLogos = [
  {
    src: "https://via.placeholder.com/150x80?text=Travel+Safe",
    alt: "Travel Safe Certified",
  },
  {
    src: "https://via.placeholder.com/150x80?text=Eco+Tourism",
    alt: "Eco Tourism Certified",
  },
  {
    src: "https://via.placeholder.com/150x80?text=Kenya+Tourism",
    alt: "Kenya Tourism Board",
  },
  {
    src: "https://via.placeholder.com/150x80?text=5-Star",
    alt: "5-Star Rated",
  },
];

// Placeholder payment icons - replace or enhance as needed
const paymentOptions = [
  {
    name: "Visa",
    icon: <CreditCard className="mr-2 h-6 w-6 text-blue-800" />,
  },
  {
    name: "Mastercard",
    icon: <CreditCard className="mr-2 h-6 w-6 text-red-600" />,
  },
  {
    name: "PayPal",
    icon: <CreditCard className="mr-2 h-6 w-6 text-blue-600" />,
  },
  {
    name: "M-Pesa",
    icon: (
      <Image
        src="https://via.placeholder.com/30x20?text=M-Pesa"
        alt="M-Pesa"
        width={30}
        height={20}
        className="mr-2"
      />
    ),
  },
];

export default function TrustSignals() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hunter-green mb-4">
          You're In Good Hands
        </h2>
      </div>

      {/* Certification Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-12">
        {trustLogos.map((logo, index) => (
          <div key={index} className="relative h-12 mx-auto">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {/* Secure Payment Options */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-xl font-bold text-center text-hunter-green mb-6">
          Secure Payment Options
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {paymentOptions.map((option, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-3 rounded-lg shadow-sm"
            >
              {option.icon}
              <span className="font-medium text-gray-700">{option.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
