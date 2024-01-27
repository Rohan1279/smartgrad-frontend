import background from "../../../assets/unique-section.png";
import placeholder from "../../../assets/unique-section-placeholder.png";
import connection from "../../../assets/UniqueSectionIcons/connection.png";
import empower from "../../../assets/UniqueSectionIcons/empower.png";
import solution from "../../../assets/UniqueSectionIcons/solution.png";
import tech from "../../../assets/UniqueSectionIcons/tech.png";
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lsm:grid-cols-2">
        <div className="col-span-1">
          <h2 className="font-bold text-[40px]">why is smartgrad for you</h2>
          <p className="text-base  mb-7">
            SmartGrad stands out by offering access to global universities,
            direct organizational connections, skill development led by Oxford
            alumni, and comprehensive career guidance.
          </p>

          <div className="flex flex-col items-start features-column">
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20 w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
              <img src={connection} alt="" />
              <p>AI feed about edu and career tailored to your needs</p>
            </div>
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
              <img src={solution} alt="" />
              <p>Direct links to leading organizations</p>
            </div>
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
              <img src={empower} alt="" />
              <p>Never manually update your cv again</p>
            </div>
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
              <img src={tech} alt="" />
              <p>
                Get sector expert advice from global industry professionals and
                consultants
              </p>
            </div>
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer  transition-all duration-500 px-5 py-3 bg-[#D9D9D9]/20  w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ">
              <img src={tech} alt="" />
              <p>Manage all applications in one place</p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center lsm:justify-end pt-8 md:pt-auto">
          <div>
            <img src={placeholder} alt="" className="w-[408px] h-[408px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
