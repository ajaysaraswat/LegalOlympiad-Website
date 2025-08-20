const instructors = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/Vineet.webp",
    roleColor: "text-[#ea4820]",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Cheif Executive Officer",
    image: "/sanjanO.webp",
    roleColor: "text-[#ea4820]",
  },
  {
    id: 3,
    name: "Siraj Abbasi",
    role: "Head of Operations",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
  },
  {
    id: 4,
    name: "Adnan Abbasi",
    role: "Technology Lead",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
  },
  {
    id: 5,
    name: "Praveen Sharma",
    role: "Academic Coordinator",
    image: "/judge.jpg",
    roleColor: "text-[#ea4820]",
  },
  {
    id: 6,
    name: "Vikas Gogne",
    role: "Mentorship Director",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
  },
  {
    id: 7,
    name: "Satyam Chaturvedi",
    role: "Content & Curriculum Lead",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
  },
  {
    id: 8,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/tithika.webp",
    roleColor: "text-[#ea4820]",
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black max-w-5xl mx-auto">
            The Legal Olympiad is led by a dedicated team of legal
            professionals, educators, and innovators committed to transforming
            legal education. Together, we bring diverse expertise to create
            India's premier legal career development platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className={`text-center group cursor-pointer fade-in-up stagger-${
                index + 1
              }`}
            >
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-orange-800/0 group-hover:bg-orange-800/10 transition-colors duration-300"></div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-orange-800 transition-colors duration-300">
                {instructor.name}
              </h3>
              <p
                className={`${instructor.roleColor} font-semibold text-sm sm:text-base`}
              >
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
