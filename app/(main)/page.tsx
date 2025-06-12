import AboutUs from "../_components/main/AboutUs";
import Blogs from "../_components/main/Blogs";
import ContactUs from "../_components/main/ContactUs";
import MainSection from "../_components/main/MainSection";
import Services from "../_components/main/Services";

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
        <Blogs />
      </div>
      <div className="mt-12">
        <ContactUs />
      </div>
    </main>
  );
}
