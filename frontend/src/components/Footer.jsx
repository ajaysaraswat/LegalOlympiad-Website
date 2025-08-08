import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="slide-in-left">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-800 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold">
                LegalOlympiad
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Transform your future with our comprehensive online learning
              platform. Learn from industry experts and advance your career.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <Facebook
                size={18}
                className="sm:w-5 sm:h-5 hover:text-orange-800 cursor-pointer transition-colors"
              />
              <Instagram
                size={18}
                className="sm:w-5 sm:h-5 hover:text-orange-800 cursor-pointer transition-colors"
              />
              <Twitter
                size={18}
                className="sm:w-5 sm:h-5 hover:text-orange-800 cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-in-left stagger-1">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="slide-in-right stagger-2">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Popular Courses
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Business Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Data Science
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin
                  size={16}
                  className="sm:w-5 sm:h-5 text-orange-800 mt-1 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  24th street, California, United States
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone
                  size={16}
                  className="sm:w-5 sm:h-5 text-orange-800 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  +1 974 8845246937
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail
                  size={16}
                  className="sm:w-5 sm:h-5 text-orange-800 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  info@legalolympiad.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
            © 2024 LegalOlympiad. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-0">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-300 hover:text-orange-800 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-300 hover:text-orange-800 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-300 hover:text-orange-800 transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-orange-800 hover:bg-orange-800/90 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={16} className="sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
};

export default Footer;
