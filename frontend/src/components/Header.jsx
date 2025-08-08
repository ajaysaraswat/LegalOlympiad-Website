import { useState } from "react";
import { Button } from "../components/ui/Button";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "COURSES", href: "/courses" },
    { name: "EVENTS", href: "/events" },
    { name: "REGISTER", href: "/register" },
    { name: "PAGES", href: "/pages" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">974 8845246937</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm hidden sm:inline">
                info@legalolympiad.com
              </span>
              <span className="text-xs sm:hidden">info@legalolympiad.com</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <MapPin size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm hidden sm:inline">
                24th street, California
              </span>
              <span className="text-xs sm:hidden">California</span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Facebook
              size={14}
              className="sm:w-4 sm:h-4 hover:scale-110 transition-transform cursor-pointer"
            />
            <Instagram
              size={14}
              className="sm:w-4 sm:h-4 hover:scale-110 transition-transform cursor-pointer"
            />
            <Twitter
              size={14}
              className="sm:w-4 sm:h-4 hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header className="bg-black shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-800 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">
                LegalOlympiad
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xs xl:text-sm font-medium transition-colors duration-200 text-white hover:text-orange-800`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-orange-800 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-700 bg-black absolute left-0 right-0 top-full shadow-lg">
              <nav className="flex flex-col space-y-0 p-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors text-white hover:text-orange-800 py-3 px-4 border-b border-gray-700 last:border-b-0`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
