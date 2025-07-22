import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "TED TALKS AT UCF COLLEGE OF EDUCATION",
    date: "30 July",
    time: "9AM",
    location: "Melbourne",
    image: "/upcoming.jpg",
  },
  {
    id: 2,
    title: "IMPORTANCES OF RESEARCH SEMINAR 2021",
    date: "30 July",
    time: "9AM",
    location: "Melbourne",
    image: "/upcoming.jpg",
  },
  {
    id: 3,
    title: "NEWLY SUMMER COURSE STARTS FROM JUNE",
    date: "30 July",
    time: "9AM",
    location: "Melbourne",
    image: "/upcoming.jpg",
  },
];

const differentPoints = [
  {
    title: "Not just a quiz",
    description: "A strategic simulation of real legal scenarios",
    icon: "🧩",
  },
  {
    title: "Not just prizes",
    description: "Personalized guidance, recognition, and opportunities",
    icon: "🎁",
  },
  {
    title: "Not just one event",
    description:
      "A hybrid model spanning campus, regional, and national levels",
    icon: "🌐",
  },
  {
    title: "Not just rankings",
    description: "A map to your ideal legal future",
    icon: "🗺️",
  },
];

const benefitsPoints = [
  {
    title: "Clarity in Specialization",
    description: "Know your top-performing domains",
    icon: "🔎",
  },
  {
    title: "Skill Development",
    description: "Legal reasoning, argument drafting, policy writing",
    icon: "📝",
  },
  {
    title: "Networking",
    description: "With mentors, firms, legal startups & bar associations",
    icon: "🤝",
  },
  {
    title: "Career Launchpad",
    description: "Internships, scholarships, and early exposure",
    icon: "🚀",
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* What Makes the Legal Olympiad Different? */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
            What Makes the Legal Olympiad Different?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentPoints.map((item) => (
              <div
                key={item.title}
                className="bg-black border border-orange-800 rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-orange-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-base opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Benefits to Participants */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
            Benefits to Participants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsPoints.map((item) => (
              <div
                key={item.title}
                className="bg-black border border-orange-800 rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-orange-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-base opacity-90">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Existing events/competitions content follows here */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-lg mb-4">Our Events</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy">
            UPCOMING <span className="text-brand-cyan">EVENTS</span> &{" "}
            <span className="text-brand-cyan">COMPETITIONS</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group fade-in-up stagger-${
                index + 1
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-cyan transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="space-y-3 text-sm text-brand-cyan">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
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

export default EventsSection;
