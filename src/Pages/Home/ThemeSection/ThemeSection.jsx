import ThemeCard from "../../../components/ThemeCard/ThemeCard";
import University from "../../../assets/ThemeIcons/University.jpg";
import Career from "../../../assets/ThemeIcons/Career.jpg";
import Aptitude from "../../../assets/ThemeIcons/Aptitude.jpg";
import Network from "../../../assets/ThemeIcons/Network.jpg";
import background from "../../../assets/Doodle.png";
import "./ThemeSection.css";
const ThemeSection = () => {
  return (
    <section
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
      className=" bg-white text-primary mmd:h-[511px]  relative"
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 justify-between py-[100px] px-4 md:px-auto  ">
        <p className="absolute -top-14 right-0 bg-white text-3xl px-10 pt-4 pb-2 rounded-t-2xl text-primary">
          with <span className="text-primary">smart</span>grad,{" "}
          <span className="font-bold">UCAN</span>
        </p>
        <div className="w-full md:w-52 flex flex-col mx-auto space-y-4 pb-8 md:pb-auto text-primary transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Universities
          </h3>
          {/* <University className="mx-auto my-auto fill-[#FFC24D] stroke-[#FFC24D] w-[130px] bg-white border border-[#FFC24D] rounded-2xl  hover:shadow-inner-custom transition-all" /> */}
          <img
            src={University}
            alt=""
            className="mx-auto my-auto  w-[130px]  rounded-2xl "
          />

          <p className="text-center">
            Find the right institutions, get the right advice, manage all
            applications in one place
          </p>
        </div>
        <div className="w-full md:w-52 flex flex-col mx-auto space-y-4 pb-8 md:pb-auto text-primary transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Careers
          </h3>

          {/* <Career className="mx-auto my-auto fill-none stroke-[#F1662A] w-[130px] bg-white border border-[#F1662A] rounded-2xl  hover:shadow-inner-custom transition-all" /> */}
          <img
            src={Career}
            alt=""
            className="mx-auto my-auto  w-[130px]  rounded-2xl "
          />
          <p className="text-center">
            Find the right jobs, manage all applications in one place and never
          </p>
        </div>
        <div className="w-full md:w-52 flex flex-col mx-auto space-y-4 pb-8 md:pb-auto text-primary transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Aptitude
          </h3>

          {/* <Aptitude
            className={
              "mx-auto my-auto fill-none stroke-[#09D5D7] w-[130px] bg-white border border-[#09D5D7] rounded-2xl  hover:shadow-inner-custom transition-all"
            }
          /> */}
          <img
            src={Aptitude}
            alt=""
            className="mx-auto my-auto  w-[130px]  rounded-2xl "
          />

          <p className="text-center">
            Acquire the right skills, make yourself more eligible, gain
            visibility
          </p>
        </div>
        <div className="w-full md:w-52 flex flex-col mx-auto  space-y-4 pb-8 md:pb-auto text-primary transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Network
          </h3>

          {/* <Network className="mx-auto my-auto fill-none stroke-[#FF90D9] w-[130px] bg-white border border-[#FF90D9] rounded-2xl  hover:shadow-inner-custom transition-all" /> */}
          <img
            src={Network}
            alt=""
            className="mx-auto my-auto  w-[130px]  rounded-2xl "
          />

          <p className="text-center">
            Find the right expert or mentor, grow your network
          </p>
        </div>
        {/* <ThemeCard
          img={University}
          heading={"University"}
          text={
            "Getting a degree it’s not that hard anymore. Through us break the barrier and live up to your dreams"
          }
        />
        <ThemeCard
          img={Career}
          heading={"Career"}
          text={
            "Look for the best career that suits you and level up your expertise. It’s now or never."
          }
        />
        <ThemeCard
          img={Skill}
          heading={"A Skill"}
          text={
            "Skills are not reserved for anyone particularly. Get set and keep on learning. You could be the next big face."
          }
        />
        <ThemeCard
          img={Network}
          heading={"Network"}
          text={
            "Networking is important to adapt to the modern era. Why not get into the community and let people sense your presence."
          }
        /> */}
      </div>
      <div className="absolute w-full h-20 bg-transparent -bottom-10 backdrop-blur-md"></div>
    </section>
  );
};

export default ThemeSection;
