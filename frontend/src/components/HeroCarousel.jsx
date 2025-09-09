import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/hero1.jpg",
      mobileImage: "/hero1Mobile.jpg",
      title: "LEGAL OLYMPIAD: DISCOVER YOUR LEGAL CALLING",
      subtitle: "Your Path to Legal Success Starts Here.",
      description:
        "India doesn't just need more lawyers it needs bold, visionary legal minds.",
    },
    {
      id: 2,
      image: "/hero2.jpg",
      mobileImage: "/hero2.jpg",
      title: "MASTER THE ART OF LEGAL EXCELLENCE",
      subtitle: "Comprehensive Legal Education Platform.",
      description:
        "Join thousands of students in mastering legal concepts and courtroom skills.",
    },
    {
      id: 3,
      image: "/hero3.jpg",
      mobileImage: "/hero3.jpg",
      title: "BUILD YOUR LEGAL CAREER",
      subtitle: "From Learning to Leading.",
      description:
        "Transform your legal knowledge into a successful career with expert guidance.",
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${
              isMobile ? slide.mobileImage : slide.image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="text-white max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl slide-in-left">
              <p className="text-[#C6930A] text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-4">
                {slide.subtitle}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed opacity-90">
                {slide.description}
              </p>
              <div className="flex flex-row gap-3 sm:gap-4">
                <Button
                  size="sm"
                  className="bg-[#C6930A] hover:bg-orange-800/90 text-white text-xs sm:text-sm w-32 sm:w-auto px-4 sm:px-6"
                  onClick={() => navigate("/courses")}
                >
                  REGISTER NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#C6930A] scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
