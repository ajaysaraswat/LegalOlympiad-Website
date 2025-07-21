const instructors = [
  {
    id: 1,
    name: "William Smith",
    role: "CEO / Founder",
    image: "/lovable-uploads/18bd7cf3-5069-4990-85d3-7419513df8ca.png",
    roleColor: "text-brand-orange",
  },
  {
    id: 2,
    name: "Nicole Kiyl",
    role: "Project Manager",
    image: "/lovable-uploads/18bd7cf3-5069-4990-85d3-7419513df8ca.png",
    roleColor: "text-brand-orange",
  },
  {
    id: 3,
    name: "John Melton",
    role: "Instructor",
    image: "/lovable-uploads/18bd7cf3-5069-4990-85d3-7419513df8ca.png",
    roleColor: "text-brand-orange",
  },
  {
    id: 4,
    name: "Ketti Helson",
    role: "Business Analyst",
    image: "/lovable-uploads/18bd7cf3-5069-4990-85d3-7419513df8ca.png",
    roleColor: "text-brand-orange",
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-lg mb-4">Meet Our Instructors</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy">
            LEARN FROM EXPERT{" "}
            <span className="text-brand-cyan">INSTRUCTORS</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className={`text-center group cursor-pointer fade-in-up stagger-${
                index + 1
              }`}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand-cyan/0 group-hover:bg-brand-cyan/10 transition-colors duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                {instructor.name}
              </h3>
              <p className={`${instructor.roleColor} font-semibold`}>
                {instructor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
