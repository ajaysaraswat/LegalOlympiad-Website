import { Button } from "../components/ui/Button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-in-left">
            <p className="text-brand-orange text-lg font-semibold mb-4">
              ABOUT EPATHSALA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 leading-tight">
              LEARN SOMETHING NEW, AND GROW YOUR{" "}
              <span className="text-brand-cyan">SKILL</span>
            </h2>
            <div className="w-16 h-1 bg-brand-orange mb-8"></div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Eum
                dignissimos, delenit adipisci ut inventore commodi iure
                explicabo excepturi cumque laudantium quis praesentium id
                nesciunt Soluta sunt obcaecati aspernatur nostrum ab.
              </p>
              <p>
                Using our single innovative platform you can remove all your
                communication dependencies and the messy rat's nest of email,
                calls, texts, wikis, and apps you currently have.
              </p>
            </div>

            <Button
              size="lg"
              className="mt-8 bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8"
            >
              View Course
            </Button>
          </div>

          {/* Right Image */}
          <div className="slide-in-right">
            <div className="relative">
              <div className="w-full h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/9cb5f725-ee1a-4cb2-91ec-5dccc8ae3eaa.png"
                  alt="Student learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-cyan rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
