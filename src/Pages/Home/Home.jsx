import About from "./About/About";
import Advance from "./Advance/Advance";
import Banner from "./Banner/Banner";
import Careers from "./Careers/Careers";
import Courses from "./Courses/Courses";
import Microsoft from "./Microsoft/Microsoft";
import Sponser from "./Sponser/Sponser";
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
      <Microsoft />
      <Advance />
      <Courses />
      <Sponser />
      <About />
      <Team />
    </>
  );
};

export default Home;
