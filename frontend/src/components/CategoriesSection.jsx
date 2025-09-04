import {
  BookOpen,
  Search,
  BarChart3,
  GraduationCap,
  Trophy,
  Scale,
  Target,
  FileText,
  Users,
  Star,
} from "lucide-react";

const whyParticipate = [
  {
    title: "Bridge Knowledge",
    description:
      "Bridge knowledge & passion through real legal problem-solving.",
    icon: Scale,
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
  },
  {
    title: "Discover Your Niche",
    description:
      "Discover your niche in criminal, corporate, IP, cyber, and environmental law.",
    icon: Search,
    color: "text-green-600",
    bgGradient: "from-green-50 to-green-100",
    borderColor: "border-green-200",
  },
  {
    title: "Performance Card",
    description: "Receive personalized scorecards highlighting your strengths.",
    icon: BarChart3,
    color: "text-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
  },
  {
    title: "Mentor Clinics",
    description: "Access post-test mentor clinics with senior legal experts.",
    icon: GraduationCap,
    color: "text-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
  },
  {
    title: "Recognition Trophies",
    description:
      "Win recognition through scholarships, internships, and publications.",
    icon: Trophy,
    color: "text-red-600",
    bgGradient: "from-red-50 to-red-100",
    borderColor: "border-red-200",
  },
];

const CategoriesSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .scroll-container {
            animation: scroll 40s linear infinite;
            width: fit-content;
          }
          
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 text-center">
              Why Choose Us?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Join the Legal Olympiad and unlock your potential in the legal
              world
            </p>
            <div className="w-16 sm:w-24 h-1 bg-[#ea4820] mx-auto mt-3 sm:mt-4"></div>
          </div>

          {/* Infinite scrolling container */}
          <div className="relative overflow-hidden">
            <div className="scroll-container flex">
              {/* First set of cards */}
              {whyParticipate.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`first-${item.title}`}
                    className={`flex-shrink-0 w-72 sm:w-80 mx-3 sm:mx-4 bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor} rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:border-opacity-60 backdrop-blur-sm`}
                  >
                    <div className="mb-6 flex justify-center">
                      <IconComponent
                        size={48}
                        className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-[#ea4820] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="mt-6 w-12 h-1 bg-gradient-to-r from-transparent via-[#ea4820] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                );
              })}

              {/* Duplicate set for seamless infinite scroll */}
              {whyParticipate.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`second-${item.title}`}
                    className={`flex-shrink-0 w-72 sm:w-80 mx-3 sm:mx-4 bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor} rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:border-opacity-60 backdrop-blur-sm`}
                  >
                    <div className="mb-6 flex justify-center">
                      <IconComponent
                        size={48}
                        className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-[#ea4820] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="mt-6 w-12 h-1 bg-gradient-to-r from-transparent via-[#ea4820] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll indicator */}
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
