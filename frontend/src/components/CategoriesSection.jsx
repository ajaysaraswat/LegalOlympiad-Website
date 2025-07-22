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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why Participate?
          </h2>
          <div className="w-24 h-1 bg-orange-800 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyParticipate.map((item, index) => (
            <div
              key={item.title}
              className="bg-orange-800/5 border border-orange-800 rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">
                {item.title}
              </h3>
              <p className="text-black text-base opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
