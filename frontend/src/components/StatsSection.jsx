const stats = [
  {
    number: "233+",
    label: "COURSES & VIDEOS",
    color: "text-brand-orange",
  },
  {
    number: "410+",
    label: "EXPERT TEACHERS",
    color: "text-brand-orange",
  },
  {
    number: "2299+",
    label: "TOTAL STUDENTS",
    color: "text-brand-orange",
  },
  {
    number: "368+",
    label: "CLASSES COMPLETE",
    color: "text-brand-orange",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center fade-in-up stagger-${index + 1}`}
            >
              <div
                className={`text-4xl md:text-5xl lg:text-6xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-700 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
