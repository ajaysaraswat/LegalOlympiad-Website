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
    { name: "PAGES", href: "/pages" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-cyan text-white py-2 px-4 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm ">
          <div className="flex flex-col md:flex-row gap-4 mb-2 md:mb-0 ">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>974 8845246937</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@epathsala.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>24th street, California</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Facebook
              size={16}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
            <Instagram
              size={16}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
            <Twitter
              size={16}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-cyan rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-white">ePATHSALA</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200
                    ${
                      location.pathname === item.href
                        ? "text-white"
                        : "text-white"
                    }
                    hover:text-orange-700`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white absolute left-0 right-0 top-full shadow-lg">
              <nav className="flex flex-col space-y-4 p-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-white ${
                      location.pathname === item.href
                        ? "text-white"
                        : "text-orange-800"
                    }`}
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
