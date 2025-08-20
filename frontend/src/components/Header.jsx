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
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalODropdownOpen, setIsLegalODropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "LEGAL-O", href: "/courses", hasDropdown: true },
    { name: "UPCOMING EVENTS", href: "/events" },
    { name: "SUBSCRIPTION", href: "/register" },
    // { name: "PAGES", href: "/pages" },
    // { name: "BLOG", href: "/blog" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const legalOServices = [
    { name: "Olympiad", href: "/legal-o/olympiad" },
    { name: "AI Tools", href: "/legal-o/ai-tools" },
    { name: "Podcasts", href: "/legal-o/podcasts" },
    { name: "Find a Mentor", href: "/legal-o/find-mentor" },
    { name: "Subjects for Tomorrow", href: "/legal-o/subjects" },
    { name: "Mentoring Sessions", href: "/legal-o/mentoring" },
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

            <div className="flex-shrink-0 cursor-pointer">
              <img
                src="/legelLogo.png"
                alt="Instrek Logo"
                className="h-20 w-25 pl-4 lg:pl-0.5 object-contain"
                loading="eager"
                width="100"
                height="80"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group flex items-center"
                >
                  {item.hasDropdown ? (
                    <>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <span className="text-xs xl:text-sm font-medium transition-colors duration-200 text-white group-hover:text-orange-800">
                          {item.name}
                        </span>
                        <ChevronDown
                          size={14}
                          className="text-white group-hover:text-[#ea4820] transition-colors duration-200"
                        />
                      </div>
                      {/* Desktop Dropdown */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                        <div className="py-2">
                          {legalOServices.map((service, index) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className={`block px-4 py-3 text-sm text-white hover:bg-[#ea4820] hover:text-white transition-colors duration-200 ${
                                index === 0 ? "rounded-t-lg" : ""
                              } ${
                                index === legalOServices.length - 1
                                  ? "rounded-b-lg"
                                  : ""
                              }`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-xs xl:text-sm font-medium transition-colors duration-200 text-white hover:text-orange-800 flex items-center`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#ea4820] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-[#ea4820] bg-black absolute left-0 right-0 top-full shadow-lg">
              <nav className="flex flex-col p-4">
                {navigation.map((item, index) => (
                  <div key={item.name} className="mb-2">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="w-full text-left text-sm font-medium transition-colors text-white hover:text-orange-800 py-4 px-4 border-b border-grey-700 flex items-center justify-between"
                          onClick={() =>
                            setIsLegalODropdownOpen(!isLegalODropdownOpen)
                          }
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              isLegalODropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {/* Mobile Dropdown */}
                        {isLegalODropdownOpen && (
                          <div className="bg-black border-l-2 border-orange-800">
                            {legalOServices.map((service, serviceIndex) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-sm text-white hover:text-[#ea4820] py-3 px-8 border-b border-white/30 last:border-b-0 transition-colors duration-200"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsLegalODropdownOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-sm font-medium transition-colors text-white hover:text-[#ea4820] py-4 px-4 border-b border-white block`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
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
