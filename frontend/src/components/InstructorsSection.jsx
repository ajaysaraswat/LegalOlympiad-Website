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
    name: "Adnan Abbasi",
    role: "Co-Founder",
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
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
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-orange-600">Leadership Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Legal Olympiad is led by a dedicated team of legal
            professionals, educators, and innovators committed to transforming
            legal education. Together, we bring diverse expertise to create
            India's premier legal career development platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="group relative h-full mx-2 sm:mx-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Role Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                      {instructor.role}
                    </span>
                  </div>

                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {instructor.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {instructor.name}
                    </h3>
                    <p
                      className={`${instructor.roleColor} font-semibold text-xs sm:text-sm mb-3`}
                    >
                      {instructor.role}
                    </p>
                  </div>

                  {/* Social Links (Optional) */}
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <button className="w-8 h-8 bg-gray-100 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-orange-100 rounded-full flex items-center justify-center transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 px-6 py-3 rounded-full">
            <span className="text-orange-600 font-semibold">
              Ready to learn from our experts?
            </span>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
