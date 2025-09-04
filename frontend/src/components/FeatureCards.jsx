import { Award, Users, Gavel, FileText } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Why LegalO",
    description:
      "Top ten students in the Olympiad will be give assistance in gaining internships at top tier law firms/ offices of Senior Advocates.",
    bgColor: "bg-gradient-to-br from-white to-gray-100",
    textColor: "text-black",
  },
  {
    icon: Users,
    title: "Consulting Forum ",
    description:
      "Gain direct mentorship from serving and retired judges, senior advocates, lawyers, and professors to guide your legal journey.",
    bgColor: "bg-gradient-to-br from-black to-gray-800",
    textColor: "text-white",
  },
  {
    icon: Gavel,
    title: "Court Craft",
    description:
      "Practical training in courtroom skills, advocacy, and legal procedures through immersive simulations and workshops.",
    bgColor: "bg-gradient-to-br from-white to-gray-100",
    textColor: "text-black",
  },
  {
    icon: FileText,
    title: "Judgement Appreciation",
    description:
      "Deepen your legal reasoning by critically analyzing landmark judgments and understanding their real-world impact.",
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
                } p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up stagger-${
                  index + 1
                }`}
              >
                <div className="mb-6 flex justify-center">
                  <IconComponent size={48} className={`${feature.textColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">
                  {feature.title}
                </h3>
                <p
                  className={`text-sm sm:text-base opacity-90 leading-relaxed text-justify ${feature.textColor}`}
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
