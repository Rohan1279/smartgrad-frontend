import About from "./About/About";
import Advance from "./Advance/Advance";
import Banner from "./Banner/Banner";
import Careers from "./Careers/Careers";
import Courses from "./Courses/Courses";
import Team from "./Team/Team";
import Testimonials from "./Testimonials/Testimonials";
import ThemeSection from "./ThemeSection/ThemeSection";
import UniqueSection from "./UniqueSection/UniqueSection";
import University from "./University/University";

const Home = () => {
  return (
    <>
      <Banner />
      <ThemeSection />
      <University />
      <Testimonials />
      <Careers />
      <UniqueSection />
      <Advance />
      <Courses />
      <About />
      <Team />
    </>
  );
};

export default Home;
