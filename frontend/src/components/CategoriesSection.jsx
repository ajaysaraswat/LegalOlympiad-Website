import { BarChart3, Video, Settings, Palette, Lightbulb } from "lucide-react";

const whyParticipate = [
  {
    title: "Bridge Knowledge & Passion",
    description: "Step beyond books into real-life legal decision-making",
    icon: "📚",
  },
  {
    title: "Discover Your Niche",
    description:
      "Explore multiple domains—Criminal, IP, Corporate, Cyber, Environmental, and more",
    icon: "🔍",
  },
  {
    title: "Personalized Scorecards",
    description: "See where your strengths lie with domain-wise insights",
    icon: "📊",
  },
  {
    title: "Mentor Clinics",
    description: "Post-test mentorship from senior advocates and legal experts",
    icon: "🎓",
  },
  {
    title: "Recognition Beyond Trophies",
    description:
      "Scholarships, internships, and publishing opportunities in the Young Jurist compendium",
    icon: "🏆",
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
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Why Participate?
            </h2>
            <div className="w-24 h-1 bg-[#ea4820] mx-auto mt-4"></div>
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
              {whyParticipate.map((item, index) => (
                <div
                  key={`first-${item.title}`}
                  className="flex-shrink-0 w-80 mx-4 bg-[#ea4820]/5 border border-[#ea4820] rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#ea4820] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black text-base opacity-90">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* Duplicate set for seamless infinite scroll */}
              {whyParticipate.map((item, index) => (
                <div
                  key={`second-${item.title}`}
                  className="flex-shrink-0 w-80 mx-4 bg-[#ea4820]/5 border border-[#ea4820] rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#ea4820] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black text-base opacity-90">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
