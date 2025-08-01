const instructors = [
  {
    id: 1,
    name: "William Smith",
    role: "CEO / Founder",
    image: "/lawyer_photo.jpg",
    roleColor: "text-orange-800",
  },
  {
    id: 2,
    name: "Nicole Kiyl",
    role: "Project Manager",
    image: "/lawyer_photo.jpg",
    roleColor: "text-orange-800",
  },
  {
    id: 3,
    name: "John Melton",
    role: "Instructor",
    image: "/lawyer_photo.jpg",
    roleColor: "text-orange-800",
  },
  {
    id: 4,
    name: "Ketti Helson",
    role: "Business Analyst",
    image: "/judge.jpg",
    roleColor: "text-orange-800",
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            The Team Behind the Olympiad
          </h2>
          <p className="text-lg text-black max-w-5xl mx-auto">
            The Legal Olympiad is curated by a panel of distinguished legal
            professionals and academicians, collectively contributing over 200
            years of legal wisdom. Their mission is to mentor, guide, and shape
            future legal leaders who don’t just serve the system but transform
            it.
          </p>
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
                <div className="absolute inset-0 bg-orange-800/0 group-hover:bg-orange-800/10 transition-colors duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-orange-800 transition-colors duration-300">
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
