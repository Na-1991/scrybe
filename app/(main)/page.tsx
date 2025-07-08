import AboutUs from "../_components/main/AboutUs";
import Blogs from "../_components/main/Blogs";
import Companies from "../_components/main/Companies";
import ContactUs from "../_components/main/ContactUs";
import FAQ from "../_components/main/FAQ";
import MainSection from "../_components/main/MainSection";
import Services from "../_components/main/Services";
import TestimonialsSection from "../_components/main/Testimonials";

export default function Home() {
  return (
    <main className=" ">
      <div className="mt-12">
        <MainSection />
      </div>
      <div className="mt-12">
        <AboutUs />
      </div>
      <div className="mt-12">
        <Services />
      </div>
      <div className="mt-12">
        <Companies />
      </div>
      <div className="mt-12">
        <Blogs />
      </div>
      <div className="mt-12">
        <TestimonialsSection />
      </div>
      <div className="mt-12">
        <FAQ />
      </div>
      <div className="mt-12">
        <ContactUs />
      </div>
    </main>
  );
}
