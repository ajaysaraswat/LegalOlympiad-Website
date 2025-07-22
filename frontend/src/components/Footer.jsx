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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="slide-in-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-800 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold">LegalOlympiad</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transform your future with our comprehensive online learning
              platform. Learn from industry experts and advance your career.
            </p>
            <div className="flex gap-4">
              <Facebook
                size={20}
                className="hover:text-orange-800 cursor-pointer transition-colors"
              />
              <Instagram
                size={20}
                className="hover:text-orange-800 cursor-pointer transition-colors"
              />
              <Twitter
                size={20}
                className="hover:text-orange-800 cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-in-left stagger-1">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="slide-in-right stagger-2">
            <h3 className="text-lg font-bold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Business Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-800 transition-colors"
                >
                  Data Science
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right">
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-orange-800 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  24th street, California, United States
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-orange-800 flex-shrink-0" />
                <span className="text-gray-300">+1 974 8845246937</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-orange-800 flex-shrink-0" />
                <span className="text-gray-300">info@legalolympiad.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 LegalOlympiad. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-orange-800 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-800 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-800 text-sm transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-orange-800 hover:bg-orange-800/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
