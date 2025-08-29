import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    tagline: "BECOME WARRIORS OF JUSTICE – CHOOSE YOUR OWN PATH IN LAW",
    title: "LEGAL OLYMPIAD: DISCOVER YOUR LEGAL CALLING",
    description:
      "India doesn't just need more lawyers it needs bold, visionary legal minds. ",
    image: {
      mobile: "/hero1Mobile.jpg",
      desktop: "/hero1.jpg",
    },
    cta: "Join the Movement",
  },
  {
    id: 2,
    tagline: "UNLOCK YOUR POTENTIAL",
    title: "TRANSFORM YOUR CAREER WITH EXPERT GUIDANCE",
    description:
      "The Legal Olympiad isn’t just an exam it’s a journey to discover your purpose, sharpen your skills, and unlock the lawyer within you",
    image: {
      mobile: "/studentlaw.png",
      desktop: "/studentlaw.png",
    },
  },
  {
    id: 3,
    tagline: "LEARN FROM THE BEST",
    title: "INDUSTRY EXPERTS AT YOUR FINGERTIPS",
    description:
      " It's a battlefield of ideas, a crucible of conviction, and a launchpad for changemakers.",
    image: {
      mobile: "/heroImg.jpg",
      desktop: "/heroImg.jpg",
    },
  },
];

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      console.log("Screen size check:", {
        width: window.innerWidth,
        isMobile: mobile,
      });
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${
              isMobile ? slide.image.mobile : slide.image.desktop
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onLoad={() => {
            console.log("Slide loaded:", {
              slideId: slide.id,
              isMobile,
              imageUrl: isMobile ? slide.image.mobile : slide.image.desktop,
            });
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl slide-in-left">
              <p className="text-[#ea4820] text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-4">
                {slide.tagline}
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
                  className="bg-orange-800 hover:bg-orange-800/90 text-white text-xs sm:text-sm w-32 sm:w-auto px-4 sm:px-6"
                  onClick={() => navigate("/courses")}
                >
                  VIEW COURSE
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white text-white hover:text-[#ea4820] hover:bg-white text-xs sm:text-sm w-32 sm:w-auto px-4 sm:px-6"
                  onClick={() => navigate("/register")}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 10000);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-800 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
