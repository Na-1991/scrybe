import FramerWrapper from "../_components/FramerWrapper";
import AboutUs from "../_components/main/AboutUs";
import Blogs from "../_components/main/Blogs";
import Companies from "../_components/main/Companies";
import ContactUs from "../_components/main/ContactUs";
import FAQ from "../_components/main/FAQ";
import MainSection from "../_components/main/MainSection";
import Services from "../_components/main/Services";
import TestimonialsSection from "../_components/main/Testimonials";

export const revalidate = 0;

export default function Home() {
  return (
    <main className=" ">
      <FramerWrapper>
        <div className="mt-24">
          <MainSection />
        </div>
      </FramerWrapper>

      <FramerWrapper>
        <div className="mt-24">
          <AboutUs />
        </div>
      </FramerWrapper>

      <FramerWrapper>
        <div className="mt-24">
          <Services />
        </div>
      </FramerWrapper>

      <FramerWrapper>
        <div className="mt-24">
          <Companies />
        </div>
      </FramerWrapper>
      <FramerWrapper>
        <div className="mt-24">
          <Blogs />
        </div>
      </FramerWrapper>

      {/* <div className="mt-24">
        <TestimonialsSection />
      </div> */}
      <FramerWrapper>
        <div className="mt-24">
          <FAQ />
        </div>
      </FramerWrapper>

      <FramerWrapper>
        <div className="mt-24">
          <ContactUs />
        </div>
      </FramerWrapper>
    </main>
  );
}
