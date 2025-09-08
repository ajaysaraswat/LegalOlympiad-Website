import { Award, Users, Gavel, FileText } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Why LegalO",
    description:
      "Top ten students in the Olympiad will be given assistance in gaining internships at top tier law firms and offices of Senior Advocates across the country.",
    bgColor: "bg-gradient-to-br from-white to-gray-100",
    textColor: "text-black",
  },
  {
    icon: Users,
    title: "Consulting Forum ",
    description:
      "Get mentorship from experienced judges, senior advocates, lawyers, and professors to guide your legal journey and career growth.",
    bgColor: "bg-gradient-to-br from-black to-gray-800",
    textColor: "text-white",
  },
  {
    icon: Gavel,
    title: "Court Craft",
    description:
      "Train in courtroom skills, advocacy techniques, and legal processes with immersive workshops and practice sessions.",
    bgColor: "bg-gradient-to-br from-white to-gray-100",
    textColor: "text-black",
  },
  {
    icon: FileText,
    title: "Judgement Appreciation",
    description:
      "Strengthen your legal reasoning by analyzing landmark judgments and their impact on law and society.",
    bgColor: "bg-gradient-to-br from-black to-gray-800",
    textColor: "text-white",
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
                className={`${feature.bgColor} ${
                  feature.textColor
                } p-6 text-center hover:scale-105 transition-transform duration-300 fade-in-up stagger-${
                  index + 1
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent size={40} className={`${feature.textColor}`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-center min-h-[3rem] flex items-center justify-center">
                  {feature.title}
                </h3>
                <p
                  className={`text-sm sm:text-base opacity-90 leading-tight text-center ${feature.textColor}`}
                >
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
