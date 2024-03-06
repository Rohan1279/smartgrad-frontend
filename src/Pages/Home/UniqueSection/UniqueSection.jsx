// import UniversitiesIcon from "../../../assets/convocation-cap.png";
// import CareerIcon from "../../../assets/JobIcons/bag.png";
// import AptitudeIcon from "../../../assets/aptitude-icon.png";
// import Aptitude from "../../../assets/ThemeImages/aptitude-icon-fill.png";

// import Aptitude from "../../../assets/ThemeImages/aptitude-icon-fill.png";
// import Career from "../../../assets/ThemeImages/job-icon-fill.png";
// import Network from "../../../assets/ThemeImages/network-icon-fill.png";
// import University from "../../../assets/ThemeImages/university-icon-fill.png";

import background from "../../../assets/Hero-Banner-Bg.png";
import AptitudeIcon from "../../../assets/ThemeIcons/AptitudeIcon";
import CareerIcon from "../../../assets/ThemeIcons/CareerIcon";
import NetworkIcon from "../../../assets/ThemeIcons/NetworkIcon";
import UniversityIcon from "../../../assets/ThemeIcons/UniversityIcon";
import FeatureCard from "../../../components/ui/FeatureCard";
import "./UniqueSection.css";

const data = {
  title: "Why is smartgrad for you",
  subtitle:
    "SmartGrad stands out by offering access to global universities, direct organizational connections, skill development led by Oxford alumni, and comprehensive career guidance.",
  features: [
    {
      icon: <UniversityIcon className="w-14 stroke-primary fill-primary" />,
      title: "university",
      description:
        "Use AI and Oxford expertise for a smooth university application process.",
    },
    {
      icon: <CareerIcon className="w-14 stroke-primary fill-none" />,
      title: "career",
      description:
        "Direct links to leading organizations & Never manually update your CV again.",
    },
    {
      icon: <AptitudeIcon className="w-14 stroke-primary fill-none" />,
      title: "aptitude",
      description:
        "Boost your abilities with customized courses aimed at achieving success.",
    },
    {
      icon: <NetworkIcon className="w-14 stroke-primary fill-none" />,
      title: "network",
      description:
        "Get sector expert advice from global industry professionals and consultants.",
    },
  ],
  videoSrc: "https://www.youtube.com/embed/_TPzFym3rVU?si=kumwgu10teIduJml",
};

const UniqueSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="text-primary py-32 px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <div>
              <h2 className="text-4xl font-bold">
                Why is <span className="text-[#09D5D7]">smart</span>
                <span className="text-[#595959]">grad</span> for you
              </h2>
              <p className="text-base max-w-xl mt-4">{data?.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lsm:grid-cols-2 gap-x-8">
          <div className="order-2 mmd:order-1 col-span-1">
            <div className="flex flex-col items-start features-column">
              {data?.features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          <div className="order-1 mmd:order-2 flex items-center justify-center relative ">
            <div className="md:w-[560px] h-full my-10 sm:my-0">
              <iframe
                width={"100%"}
                height={315}
                src={data?.videoSrc}
                title="Smartgrad"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl shadow-2xl w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
