import { Button } from "../components/ui/Button";
import { Star, Users, Clock, Heart } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "DIGITAL MARKETING | SOCIAL MEDIA MARKETING BUSINESS",
    image: "/lawcoll.jpg",
    rating: 4.5,
    reviews: 21,
    students: "2k+",
    duration: "2h 45mins",
  },
  {
    id: 2,
    title: "BUILD BRAND INTO MARKETING: TACKLING NEW MARKETING",
    image: "/lawcoll.jpg",
    rating: 4.5,
    reviews: 21,
    students: "2k+",
    duration: "2h 45mins",
  },
  {
    id: 3,
    title: "CULTURE & STRATEGIES FOR A SUCCESSFUL BUSINESS",
    image: "/lawcoll.jpg",
    rating: 4.5,
    reviews: 21,
    students: "2k+",
    duration: "2h 45mins",
  },
  {
    id: 4,
    title: "GROW YOUR BUSINESS BY MASTERED IN SOME TECHNIQUE",
    image: "/lawcoll.jpg",
    rating: 4.5,
    reviews: 21,
    students: "2k+",
    duration: "2h 45mins",
  },
  {
    id: 5,
    title: "GROW UP AUDIENCE TO PROGRESS BUSINESS",
    image: "/lawcoll.jpg",
    rating: 4.5,
    reviews: 21,
    students: "2k+",
    duration: "2h 45mins",
  },
  {
    id: 6,
    title: "JAVA PROGRAMMING A-Z FULLY CLASSES WITH FULL TASK",
    image: "/lawcoll.jpg",
    rating: 4.5,
    reviews: 21,
    students: "2k+",
    duration: "2h 45mins",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ALL COURSES OF LEGAL-O
            </h2>
            <p className="text-gray-600 text-lg">
              Online learning offers a new way to explore subjects you're
              passionate about.
            </p>
          </div>
          <div className="slide-in-right mt-6 md:mt-0">
            <Button className="bg-[#ea4820] hover:bg-[#ea4820] text-white">
              Read More
            </Button>
          </div>
        </div>

        <div className="w-24 h-1 bg-orange-800 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group fade-in-up stagger-${
                (index % 3) + 1
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-300">
                  <Heart
                    size={16}
                    className="text-gray-600 hover:text-red-500"
                  />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-4 leading-tight group-hover:text-orange-800 transition-colors duration-300">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-600">
                    {course.reviews} Reviews
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(course.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-orange-800">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students} Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{course.rating} Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
