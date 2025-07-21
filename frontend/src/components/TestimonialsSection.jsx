import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Adam Cheis",
    role: "Graphic Designer",
    content:
      "I am slide content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    avatar: "/lovable-uploads/3762b4fe-4758-4c46-8857-21480c79d2a5.png",
    rating: 5,
    roleColor: "text-brand-orange",
  },
  {
    id: 2,
    name: "Amanda Lee",
    role: "CEO & Founder Crfx",
    content:
      "I am slide content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    avatar: "/lovable-uploads/3762b4fe-4758-4c46-8857-21480c79d2a5.png",
    rating: 5,
    roleColor: "text-brand-orange",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "The courses here transformed my career completely. The instructors are top-notch and the content is always up-to-date with industry standards.",
    avatar: "/lovable-uploads/3762b4fe-4758-4c46-8857-21480c79d2a5.png",
    rating: 5,
    roleColor: "text-brand-orange",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Software Developer",
    content:
      "Amazing learning platform! The interactive approach and practical projects helped me land my dream job in tech.",
    avatar: "/lovable-uploads/3762b4fe-4758-4c46-8857-21480c79d2a5.png",
    rating: 4,
    roleColor: "text-brand-orange",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy">
            WHAT PEOPLE <span className="text-brand-cyan">SAY</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials
              .slice(currentTestimonial, currentTestimonial + 2)
              .map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-gray-50 rounded-lg p-8 relative ${
                    index === 0 ? "slide-in-left" : "slide-in-right"
                  }`}
                >
                  {/* Quote Mark */}
                  <div className="absolute top-4 right-6 text-6xl text-brand-light font-serif">
                    "
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm ${testimonial.roleColor}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index * 2)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentTestimonial / 2) === index
                      ? "bg-brand-cyan scale-125"
                      : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
