import About from "./About/About";
import Advance from "./Advance/Advance";
import Banner from "./Banner/Banner";
import Careers from "./Careers/Careers";
import Courses from "./Courses/Courses";
import Microsoft from "./Microsoft/Microsoft";
import Sponser from "./Sponser/Sponser";
import Testimonials from "./Testimonials/Testimonials";
import ThemeSection from "./ThemeSection/ThemeSection";
import UniqueSection from "./UniqueSection/UniqueSection";
import University from "./University/University";

const Home = () => {
  return (
    <>
      <Banner />
      <ThemeSection />
      <UniqueSection />
      <University />
      <Testimonials />
      <Careers />
      <Microsoft />
      <Sponser />
      <Advance />
      <Courses />
      <About />
      {/* <Map /> */}
    </>
  );
};

export default Home;
