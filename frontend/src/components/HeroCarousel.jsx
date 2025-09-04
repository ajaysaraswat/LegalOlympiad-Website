import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${
            isMobile ? "/hero1Mobile.jpg" : "/hero1.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl slide-in-left">
            <p className="text-[#ea4820] text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-4">
              Your Path to Legal Success Starts Here.
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              LEGAL OLYMPIAD: DISCOVER YOUR LEGAL CALLING
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed opacity-90">
              India doesn't just need more lawyers it needs bold, visionary
              legal minds.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4">
              <Button
                size="sm"
                className="bg-orange-800 hover:bg-orange-800/90 text-white text-xs sm:text-sm w-32 sm:w-auto px-4 sm:px-6"
                onClick={() => navigate("/courses")}
              >
                REGISTER NOW
              </Button>
              {/* <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:text-[#ea4820] hover:bg-white text-xs sm:text-sm w-32 sm:w-auto px-4 sm:px-6"
                onClick={() => navigate("/register")}
              >
                GET STARTED
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
