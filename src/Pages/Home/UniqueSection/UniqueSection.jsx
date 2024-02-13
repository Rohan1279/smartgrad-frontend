import background from "../../../assets/Hero-Banner-Bg.png";

// import UniversitiesIcon from "../../../assets/convocation-cap.png";
// import CareerIcon from "../../../assets/JobIcons/bag.png";
// import AptitudeIcon from "../../../assets/aptitude-icon.png";
// import Aptitude from "../../../assets/ThemeImages/aptitude-icon-fill.png";

import Aptitude from "../../../assets/ThemeImages/aptitude-icon-fill.png";
import Career from "../../../assets/ThemeImages/job-icon-fill.png";
import Network from "../../../assets/ThemeImages/network-icon-fill.png";
import University from "../../../assets/ThemeImages/university-icon-fill.png";


import "./UniqueSection.css";
const UniqueSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="text-primary py-32 mb-[100px] px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <div>
              <h2 className="text-4xl font-bold">Why is smartgrad for you</h2>
              <p className="text-base max-w-xl mt-4">
                SmartGrad stands out by offering access to global universities,
                direct organizational connections, skill development led by
                Oxford alumni, and comprehensive career guidance.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lsm:grid-cols-2 gap-x-8">
          <div className="order-2 mmd:order-1 col-span-1">
            <div className="flex flex-col items-start features-column">
              <div className="flex justify-start items-center space-x-3 hover:bg-primary/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9] w-full lsm:w-[25rem] h-[70px] rounded-xl my-2">
                <img src={University} alt="" className="w-[25px]" />
                <p>
                  Use AI and Oxford expertise for a smooth university
                  application process.
                </p>
              </div>
              <div className="flex justify-start items-center space-x-3 hover:bg-primary/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
                <img src={Career} alt="" className="w-[25px]" />
                <p>
                  Direct links to leading organizations & Never manually update
                  your cv again
                </p>
              </div>
              <div className="flex justify-start items-center space-x-3 hover:bg-primary/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
                <img src={Aptitude} alt="" className="w-[25px]" />
                <p>
                  Boost your abilities with customized courses aimed at
                  achieving success.
                </p>
              </div>
              <div className="flex justify-start items-center space-x-3 hover:bg-primary/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
                <img src={Network} alt="" className="w-[25px]" />
                <p>
                  Get sector expert advice from global industry professionals
                  and consultants
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 mmd:order-2 flex items-center justify-center relative -top-20 -right-20">
            <iframe width="560" height="315" className="rounded-xl shadow-2xl" src="https://www.youtube.com/embed/_TPzFym3rVU?si=kumwgu10teIduJml" title="Smartgrad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
