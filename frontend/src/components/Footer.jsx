import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = () => {
    // If we're already on the same page, scroll to top
    if (location.pathname === window.location.pathname) {
      scrollToTop();
    }
    // If navigating to a different page, scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="slide-in-left">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ea4820] rounded-full flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold">
                LegalOlympiad
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              India's first national-level Legal Olympiad bridging the gap
              between theory and practice, empowering students with real-world
              legal skills and career direction.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={18}
                  className="sm:w-5 sm:h-5 hover:text-[#ea4820] cursor-pointer transition-colors"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={18}
                  className="sm:w-5 sm:h-5 hover:text-[#ea4820] cursor-pointer transition-colors"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  size={18}
                  className="sm:w-5 sm:h-5 hover:text-[#ea4820] cursor-pointer transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={18}
                  className="sm:w-5 sm:h-5 hover:text-[#ea4820] cursor-pointer transition-colors"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube
                  size={18}
                  className="sm:w-5 sm:h-5 hover:text-[#ea4820] cursor-pointer transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-in-left stagger-1">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Legal-O Services
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Subscription
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal-O Services */}
          <div className="slide-in-right stagger-2">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Legal-O Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/legal-o/olympiad"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Legal Olympiad
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-o/ai-tools"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-o/podcasts"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Legal Podcasts
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-o/find-mentor"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-o/subjects"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Subjects for Tomorrow
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-o/mentoring"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Mentoring Sessions
                </Link>
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
                  className="sm:w-5 sm:h-5 text-[#ea4820] mt-1 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  24th street, California, United States
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#ea4820] flex-shrink-0"
                />
                <a
                  href="tel:+19748845246937"
                  className="text-xs sm:text-sm text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  +1 974 8845246937
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#ea4820] flex-shrink-0"
                />
                <a
                  href="mailto:info@legalolympiad.com"
                  className="text-xs sm:text-sm text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  info@legalolympiad.com
                </a>
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
              href="/privacy-policy"
              className="text-xs sm:text-sm text-gray-300 hover:text-[#ea4820] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-xs sm:text-sm text-gray-300 hover:text-[#ea4820] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/support"
              className="text-xs sm:text-sm text-gray-300 hover:text-[#ea4820] transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-[#ea4820] hover:bg-[#ea4820]/90 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={16} className="sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
};

export default Footer;
