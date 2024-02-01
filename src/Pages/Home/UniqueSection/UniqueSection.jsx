import background from "../../../assets/unique-section.png";
import placeholder from "../../../assets/unique-section-placeholder.png";
import connection from "../../../assets/UniqueSectionIcons/connection.png";
import empower from "../../../assets/UniqueSectionIcons/empower.png";
import solution from "../../../assets/UniqueSectionIcons/solution.png";
import tech from "../../../assets/UniqueSectionIcons/tech.png";

// import UniversitiesIcon from "../../../assets/convocation-cap.png";
// import CareerIcon from "../../../assets/JobIcons/bag.png";
// import AptitudeIcon from "../../../assets/aptitude-icon.png";
// import Aptitude from "../../../assets/ThemeImages/aptitude-icon-fill.png";

import University from "../../../assets/ThemeImages/university-icon-fill.png";
import Career from "../../../assets/ThemeImages/job-icon-fill.png";
import Aptitude from "../../../assets/ThemeImages/aptitude-icon-fill.png";
import Network from "../../../assets/ThemeImages/network-icon-fill.png";

import NetworkIcon from "../../../assets/network-icon.svg";

import "./UniqueSection.css";
const UniqueSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white py-24 mb-[100px] px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <div>
              <h2 className="text-3xl font-bold">Why is smartgrad for you</h2>
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
              <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20 w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
                <img src={University} alt="" className="w-[25px]" />
                <p>AI feed about edu and career tailored to your needs</p>
              </div>
              <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
                <img src={Career} alt="" className="w-[25px]" />
                <p>Direct links to leading organizations</p>
              </div>
              <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
                <img src={Aptitude} alt="" className="w-[25px]" />
                <p>Never manually update your cv again</p>
              </div>
              <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
                <img src={Network} alt="" className="w-[25px]" />
                <p>
                  Get sector expert advice from global industry professionals
                  and consultants
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 mmd:order-2 flex items-center justify-center lsm:justify-end pt-0 mmd:pt-8 pb-8 mmd:pb-0">
            <div>
              <img src={placeholder} alt="" className="w-[408px] h-[408px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
