import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import NavActions from "./NavActions";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <DesktopMenu />
          </div>

          {/* Right side icons & Actions (Hidden on mobile) */}
          <div className="hidden md:flex items-center">
            <NavActions />
          </div>

          {/* Mobile menu button & Sheet (Hidden on desktop) */}
          <div className="flex items-center md:hidden">
             <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
