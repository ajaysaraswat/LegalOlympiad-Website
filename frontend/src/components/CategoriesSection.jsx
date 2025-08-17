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
    title: "Bridge Knowledge & Passion",
    description:
      "Bridge knowledge & passion through real legal problem-solving.",
    icon: Scale,
    color: "text-blue-600",
  },
  {
    title: "Discover Your Niche",
    description:
      "Discover your niche in criminal, corporate, IP, cyber, and environmental law.",
    icon: Search,
    color: "text-green-600",
  },
  {
    title: "Personalized Scorecards",
    description: "Receive personalized scorecards highlighting your strengths.",
    icon: BarChart3,
    color: "text-purple-600",
  },
  {
    title: "Mentor Clinics",
    description: "Access post-test mentor clinics with senior legal experts.",
    icon: GraduationCap,
    color: "text-orange-600",
  },
  {
    title: "Recognition Beyond Trophies",
    description:
      "Win recognition through scholarships, internships, and publications.",
    icon: Trophy,
    color: "text-red-600",
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
        `}
      </style>
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
              Why Participate?
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#ea4820] mx-auto mt-3 sm:mt-4"></div>
          </div>

          {/* Infinite scrolling container */}
          <div className="relative overflow-hidden">
            <div
              className="flex"
              style={{
                animation: "scroll 30s linear infinite",
                width: "fit-content",
              }}
            >
              {/* First set of cards */}
              {whyParticipate.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`first-${item.title}`}
                    className="flex-shrink-0 w-64 sm:w-80 mx-2 sm:mx-4 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-[#ea4820]/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 group hover:border-[#ea4820]/50 hover:scale-105"
                  >
                    <div
                      className={`mb-4 sm:mb-6 p-4 rounded-full bg-gradient-to-br from-[#ea4820]/10 to-[#ea4820]/5 group-hover:from-[#ea4820]/20 group-hover:to-[#ea4820]/10 transition-all duration-300`}
                    >
                      <IconComponent
                        size={40}
                        className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#ea4820] mb-3 group-hover:text-[#ea4820]/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}

              {/* Duplicate set for seamless infinite scroll */}
              {whyParticipate.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`second-${item.title}`}
                    className="flex-shrink-0 w-64 sm:w-80 mx-2 sm:mx-4 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-[#ea4820]/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 group hover:border-[#ea4820]/50 hover:scale-105"
                  >
                    <div
                      className={`mb-4 sm:mb-6 p-4 rounded-full bg-gradient-to-br from-[#ea4820]/10 to-[#ea4820]/5 group-hover:from-[#ea4820]/20 group-hover:to-[#ea4820]/10 transition-all duration-300`}
                    >
                      <IconComponent
                        size={40}
                        className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#ea4820] mb-3 group-hover:text-[#ea4820]/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
