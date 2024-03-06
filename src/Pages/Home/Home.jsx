import About from "./About/About";
import Advance from "./Advance/Advance";
import Banner from "./Banner/Banner";
import Careers from "./Careers/Careers";
import Courses from "./Courses/Courses";
import Microsoft from "./Microsoft/Microsoft";
import Network from "./Network/Network";
import Sponser from "./Sponser/Sponser";
import Testimonials from "./Testimonials/Testimonials";
import ThemeSection from "./ThemeSection/ThemeSection";
import UniqueSection from "./UniqueSection/UniqueSection";
import University from "./University/University";

import company1 from "../../assets/CompanyLogos/company 1.png";
import company2 from "../../assets/CompanyLogos/company 2.png";
import company3 from "../../assets/CompanyLogos/company 3.png";
import company4 from "../../assets/CompanyLogos/company 4.png";
import company5 from "../../assets/CompanyLogos/company 5.png";

import cambridge from "../../assets/UniversityLogos/cambridge.jpg";
import gu from "../../assets/UniversityLogos/gu.jpg";
import Harvard from "../../assets/UniversityLogos/Harvard.jpg";
import insead from "../../assets/UniversityLogos/insead.png";
import massachusetts from "../../assets/UniversityLogos/massachusetts.png";
import nyu from "../../assets/UniversityLogos/nyu.jpg";
import oxford from "../../assets/UniversityLogos/oxford.jpg";
import Queens from "../../assets/UniversityLogos/Queens.jpg";
import rmit from "../../assets/UniversityLogos/rmit.jpg";
import toronto from "../../assets/UniversityLogos/toronto.jpg";

const Home = () => {
  const data = {
    careers: [
      {
        logo: company1,
        company: "Microsoft",
        role: "Software Engineer",
        location: "Chittagong, Bangladesh",
        jobType: "(Remote Job)",
        rating: "",
        deadline: "6 January, 2024",
        description:
          "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
      },
      {
        logo: company2,
        company: "Alter Sense",
        role: "UI/UX Designer",
        location: "Dhaka, Bangladesh",
        jobType: "(On-Site Job)",
        rating: "",
        deadline: "12 January, 2024",
        description:
          "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
      },
      {
        logo: company3,
        company: "SATV",
        role: "Mechanical Engineer",
        location: "Chittagong, Bangladesh",
        jobType: "(Remote Job)",
        rating: "",
        deadline: "21 January, 2024",
        description:
          "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
      },
      {
        logo: company4,
        role: "NYBSYS",
        location: "Dhaka, Bangladesh",
        jobType: "(On-Site Job)",
        rating: "",
        deadline: "10 January, 2024",
        isFeatured: true,
        description:
          "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
      },
    ],
    aptitudes: [
      {
        heading: "Standardized Test Prep",
        content:
          "Prepare for exams like IELTS, GMAT, and GRE with tailored courses and practice materials. Expert instructors and adaptive learning methods ensure an effective and personalized study experience.",
        image: "https://i.ibb.co/ctzDMGv/post-6.jpg",
      },
      {
        heading: "Soft Skills Development",
        content:
          "Hone essential soft skills such as presentation and negotiation to excel in your professional interactions. Interactive workshops and practical exercises empower you to communicate effectively and navigate diverse situations.",
        image: "https://i.ibb.co/Jj3Vf4V/post-8.jpg",
      },
      {
        heading: "Well-Being Counseling",
        content:
          "Prioritize your mental health with our well-being counseling services. Qualified counselors provide support and guidance to help you navigate life's challenges and enhance your overall emotional wellness.",
        image: "https://i.ibb.co/ZLgzW7j/post-12.jpg",
      },
      {
        heading: "Business Skills Enhancement",
        content:
          "Elevate your business acumen with courses in project management, financial modeling, and valuation. Learn from industry professionals and gain practical insights to excel in the dynamic world of business. Explore our diverse offerings and embark on a journey of continuous improvement across academics, interpersonal skills, mental well-being, and professional competence. Your success starts here.",
        image: "https://i.ibb.co/6BmBNxS/unique-section-placeholder.png",
      },
    ],
    university: {
      carouselItems: [
        {
          name: "Oxford University",
          image: oxford,
          link: "www.ox.ac.uk",
        },
        {
          name: "Cambridge University",
          image: cambridge,
          link: "www.cam.ac.uk",
        },
        {
          name: "New York University",
          image: nyu,
          link: "www.nyu.edu",
        },
        {
          name: "INSEAD",
          image: insead,
          link: "www.insead.edu",
        },
        {
          name: "Georgetown University",
          image: gu,
          link: "www.georgetown.edu",
        },
        {
          name: "University of Toronto",
          image: toronto,
          link: "https://www.utoronto.ca/",
        },
        {
          name: "Queen's University",
          image: Queens,
          link: "www.queensu.ca",
        },
        {
          name: "University of Windsor",
          image: massachusetts,
          link: "www.uwindsor.ca",
        },
        {
          name: "Harvard University",
          image: Harvard,
          link: "www.harvard.edu",
        },
        {
          name: "RMIT University",
          image: rmit,
          link: "www.rmit.edu.au",
        },
      ],
    },
  };

  // pass api datas
  // ** unique section ✅
  // ** university
  // ** testimonials (fixed numbers)
  // ** careers (is_featured) ✅
  // ** aptitudes ✅

  return (
    <>
      <Banner />
      <ThemeSection />
      <UniqueSection />
      <University university={data?.university} />
      <Testimonials />
      <Careers careers={data?.careers} />
      <Microsoft />
      <Sponser />
      <Advance aptitudes={data?.aptitudes} />
      <Courses />
      <Network />
      <About />
    </>
  );
};

export default Home;
