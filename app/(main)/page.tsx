import AboutUs from "../_components/main/AboutUs";
import Blogs from "../_components/main/Blogs";
import Companies from "../_components/main/Companies";
import ContactUs from "../_components/main/ContactUs";
import FAQ from "../_components/main/FAQ";
import MainSection from "../_components/main/MainSection";
import Services from "../_components/main/Services";
import TestimonialsSection from "../_components/main/Testimonials";

export const revalidate = 0

export default function Home() {
  return (
    <main className=" ">
      <div className="mt-24">
        <MainSection />
      </div>
      <div className="mt-24">
        <AboutUs />
      </div>
      <div className="mt-24">
        <Services />
      </div>
      <div className="mt-24">
        <Companies />
      </div>
      <div className="mt-24">
        <Blogs />
      </div>
      {/* <div className="mt-24">
        <TestimonialsSection />
      </div> */}
      <div className="mt-24">
        <FAQ />
      </div>
      <div className="mt-24">
        <ContactUs />
      </div>
    </main>
  );
}
