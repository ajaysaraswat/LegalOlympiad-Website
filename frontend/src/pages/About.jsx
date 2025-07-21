import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import InstructorsSection from "@/components/InstructorsSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-brand-cyan to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About ePATHSALA
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our mission to transform education through innovative
              online learning experiences
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <StatsSection />
      <InstructorsSection />
      <Footer />
    </div>
  );
};

export default About;
