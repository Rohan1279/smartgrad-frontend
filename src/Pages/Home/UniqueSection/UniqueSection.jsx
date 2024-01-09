import background from "../../../assets/Doodle.png";
import connection from "../../../assets/UniqueSectionIcons/connection.png";
import empower from "../../../assets/UniqueSectionIcons/empower.png";
import solution from "../../../assets/UniqueSectionIcons/solution.png";
import tech from "../../../assets/UniqueSectionIcons/tech.png";
const UniqueSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white py-24 bg-black opacity-80 mb-[100px]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2">
        <div className="col-span-1">
          <h2 className="font-bold text-[40px]">
            What Makes smart<span className="text-[#09D5D7]">grad</span> Unique
          </h2>
          <p className="text-base  mb-7">
            SmartGrad stands out by offering access to global universities,
            direct organizational connections, skill development led by Oxford
            alumni, and comprehensive career guidance.
          </p>
          <div className="flex flex-col items-start">
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer [&_img]:hover:scale-105 transition-all px-5 py-3 bg-[#D9D9D9]/50  w-96 rounded-xl my-2">
              <img src={connection} alt="" />
              <p>Global access to top universities</p>
            </div>
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer [&_img]:hover:scale-105 transition-all px-5 py-3 bg-[#D9D9D9]/50  w-96 rounded-xl my-2">
              <img src={solution} alt="" />
              <p>Direct links to leading organizations</p>
            </div>
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer [&_img]:hover:scale-105 transition-all px-5 py-3 bg-[#D9D9D9]/50  w-96 rounded-xl my-2">
              <img src={empower} alt="" />
              <p>Empowering with job-ready skills</p>
            </div>
            <div className="flex justify-start items-center space-x-3 hover:bg-[#00D4D6]/50 cursor-pointer [&_img]:hover:scale-105 transition-all px-5 py-3 bg-[#D9D9D9]/50  w-96 rounded-xl my-2">
              <img src={tech} alt="" />
              <p>Connect globally, grow professionally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
