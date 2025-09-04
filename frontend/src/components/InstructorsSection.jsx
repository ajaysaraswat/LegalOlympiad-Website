const instructors = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/Vineet.webp",
    roleColor: "text-[#ea4820]",
    description: "Leading the vision and strategic direction of Legal Olympiad",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Co-Founder",
    image: "/sanjanO.webp",
    roleColor: "text-[#ea4820]",
    description: "Driving innovation in legal education and mentorship",
  },
  {
    id: 3,
    name: "Siraj Abbasi",
    role: "Co-Founder",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
    description: "Expert in legal practice and curriculum development",
  },
  {
    id: 4,
    name: "XXXX",
    role: "XXXX",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
    description: "Specializing in legal technology and digital transformation",
  },
  {
    id: 5,
    name: "Praveen Sharma",
    role: "Co-Founder",
    image: "/judge.jpg",
    roleColor: "text-[#ea4820]",
    description: "Bringing judicial expertise and legal insights",
  },
  {
    id: 6,
    name: "Vikas Gogne",
    role: "Co-Founder",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
    description: "Leading corporate law and business development",
  },
  {
    id: 7,
    name: "Satyam Chaturvedi",
    role: "Co-Founder",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#ea4820]",
    description: "Expert in constitutional law and public policy",
  },
  {
    id: 8,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/tithika.webp",
    roleColor: "text-[#ea4820]",
    description: "Orchestrating technology integration and digital platforms",
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center">
            Meet Our <span className="text-orange-600">Leadership Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
            The Legal Olympiad is led by a dedicated team of legal
            professionals, educators, and innovators committed to transforming
            legal education. Together, we bring diverse expertise to create
            India's premier legal career development platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="group relative h-full mx-4 sm:mx-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 sm:h-44 md:h-52 lg:h-64 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Role Badge */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                      {instructor.role}
                    </span>
                  </div>

                  {/* Hover Info - Hidden on mobile, shown on hover for desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 hidden sm:block">
                    <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {instructor.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-4 lg:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 flex-1 min-w-0">
                        {instructor.name}
                      </h3>
                      {/* LinkedIn Icon - Always Visible */}
                      <button className="w-7 h-7 sm:w-7 sm:h-7 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                        <svg
                          className="w-4 h-4 sm:w-4 sm:h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                    </div>
                    <p
                      className={`${instructor.roleColor} font-semibold text-sm sm:text-sm mb-3 sm:mb-3`}
                    >
                      {instructor.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-2 bg-orange-50 px-4 sm:px-6 py-3 rounded-full">
            <span className="text-orange-600 font-semibold text-sm sm:text-base">
              Ready to learn from our experts?
            </span>
            <button className="bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300 font-medium text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default InstructorsSection;
