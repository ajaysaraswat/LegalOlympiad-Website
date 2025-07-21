import { BarChart3, Video, Settings, Palette, Lightbulb } from "lucide-react";

const categories = [
  {
    icon: BarChart3,
    title: "BUSINESS & MANAGEMENT",
    color: "text-brand-cyan",
  },
  {
    icon: Video,
    title: "MOVIE FILM MAKING",
    color: "text-brand-cyan",
  },
  {
    icon: Settings,
    title: "SOFTWARE TRAINING",
    color: "text-brand-cyan",
  },
  {
    icon: Palette,
    title: "GRAPHIC & WEB DESIGN",
    color: "text-brand-cyan",
  },
  {
    icon: Lightbulb,
    title: "LOGICAL THINKING",
    color: "text-brand-cyan",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-lg mb-4">Browse Categories</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy">
            BROWSE ONLINE COURSE{" "}
            <span className="text-brand-cyan">CATEGORIES</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`text-center p-8 rounded-lg hover:shadow-lg transition-all duration-300 group cursor-pointer fade-in-up stagger-${
                  index + 1
                }`}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-brand-light rounded-lg flex items-center justify-center group-hover:bg-brand-cyan transition-colors duration-300">
                    <IconComponent
                      size={32}
                      className={`${category.color} group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-cyan transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
