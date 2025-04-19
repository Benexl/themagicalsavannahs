import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added for potential search input later
import { Search, User } from "lucide-react";
import Link from "next/link";

const NavActions = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Search - Can be expanded later */}
      <Button variant="ghost" size="icon" className="text-gray-700 hover:text-hunter-green">
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      {/* Login/Sign Up */}
      <Link href="/auth" className="text-sm font-medium text-gray-700 hover:text-hunter-green">
        Login / Sign Up
      </Link>

      {/* Book Today */}
      <Button asChild className="bg-hunter-green text-white hover:bg-green-800 transition duration-300">
        <Link href="/booking">Book Today</Link>
      </Button>
    </div>
  );
};

export default NavActions;
