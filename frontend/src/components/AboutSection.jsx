import { Button } from "../components/ui/Button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content: Text */}
          <div className="slide-in-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              About the Legal Olympiad
            </h2>
            <div className="w-16 h-1 bg-orange-800 mb-8"></div>
            <p className="text-black mb-6">
              The Legal Olympiad is India’s launchpad for bold, visionary legal
              minds. More than an exam, it’s a battlefield of ideas and a
              launchpad for changemakers. Through real-world simulations and
              mentorship, we help students discover where they truly belong in
              the legal landscape.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-orange-800 mb-2">
                Mission Statement
              </h3>
              <p className="text-black">
                To transform India’s legal education system into a dynamic,
                accessible, and future-ready ecosystem that cultivates critical
                thinking, ethical practice, and purpose-driven leadership.
              </p>
            </div>
            {/* <div className="bg-orange-800 text-white p-8 rounded-lg text-center flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Join the Movement</h3>
              <p className="mb-2">
                The Legal Olympiad isn’t just a competition. It’s your legal
                compass. Registrations Opening Soon – Stay Tuned!
              </p>
            </div> */}
          </div>
          {/* Right Content: Image */}
          <div className="slide-in-right order-1 lg:order-2 flex justify-center">
            <img
              src="/hero2.jpg"
              alt="Legal Olympiad"
              className="w-full max-w-md h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
