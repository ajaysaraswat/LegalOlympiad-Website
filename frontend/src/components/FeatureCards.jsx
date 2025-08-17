import { Award, Users, Gavel, FileText } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Why LegalO",
    description:
      "India's first national-level Legal Olympiad bridging the gap between theory and practice, empowering students with real-world legal skills and career direction.",
    bgColor: "bg-gradient-to-br from-orange-800 to-orange-600",
  },
  {
    icon: Users,
    title: "Consulting Forum from Law Experts",
    description:
      "Gain direct mentorship from serving and retired judges, senior advocates, lawyers, and professors to guide your legal journey.",
    bgColor: "bg-gradient-to-br from-black to-gray-800",
  },
  {
    icon: Gavel,
    title: "Court Craft",
    description:
      "Practical training in courtroom skills, advocacy, and legal procedures through immersive simulations and workshops.",
    bgColor: "bg-gradient-to-br from-orange-800 to-orange-600",
  },
  {
    icon: FileText,
    title: "Judgement Appreciation",
    description:
      "Deepen your legal reasoning by critically analyzing landmark judgments and understanding their real-world impact.",
    bgColor: "bg-gradient-to-br from-black to-gray-800",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${
                  feature.bgColor
                } text-white p-6 sm:p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up stagger-${
                  index + 1
                }`}
              >
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <IconComponent
                    size={36}
                    className="sm:w-12 sm:h-12 text-white"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
