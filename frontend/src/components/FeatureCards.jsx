import { User, BookOpen, Globe, Home } from "lucide-react";

const features = [
  {
    icon: User,
    title: "SKILLED LECTURERS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    bgColor: "bg-gradient-to-br from-purple-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "BOOK LIBRARY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    bgColor: "bg-gradient-to-br from-brand-cyan to-blue-500",
  },
  {
    icon: Globe,
    title: "ONLINE CLASSES",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Home,
    title: "HOME PROJECTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    bgColor: "bg-gradient-to-br from-gray-600 to-gray-700",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${
                  feature.bgColor
                } text-white p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up stagger-${
                  index + 1
                }`}
              >
                <div className="mb-6 flex justify-center">
                  <IconComponent size={48} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
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
