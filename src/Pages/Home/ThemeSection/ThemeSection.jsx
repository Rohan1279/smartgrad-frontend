import ThemeCard from "../../../components/ThemeCard/ThemeCard";
import University from "../../../assets/ThemeImages/university-icon-fill.png";
import Career from "../../../assets/ThemeImages/job-icon-fill.png";
import Aptitude from "../../../assets/ThemeImages/aptitude-icon-fill.png";
import Network from "../../../assets/ThemeImages/network-icon-fill.png";
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
      className=" bg-[#F9F9F9] text-[#595959] group "
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 justify-between py-[100px] px-4 md:px-auto theme-gallery ">
        <p className="absolute -top-14 bg-[#F9F9F9] text-3xl px-10 pt-4 pb-2 rounded-t-2xl text-[#595959]">
          with <span className="text-primary">smart</span>grad,{" "}
          <span className="font-bold">
            U<span className="ml-1">CAN</span>
          </span>
        </p>
        <div className="w-full md:w-52 flex flex-col mx-auto space-y-4 pb-8 md:pb-auto text-[#595959] transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Universities
          </h3>

          <img
            src={University}
            alt={"Universities"}
            className="mx-auto my-auto h-40 w-40 sm:h-36 sm:w-36 p-7 border border-[#FFC24D] rounded-2xl shadow-lg hover:shadow-inner-custom transition-all"
          />

          <p className="text-center">
            Find the right institutions, get the right advice, manage all
            applications in one place
          </p>
        </div>
        <div className="w-full md:w-52 flex flex-col mx-auto space-y-4 pb-8 md:pb-auto text-[#595959] transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Careers
          </h3>

          <img
            src={Career}
            alt={"Careers"}
            className="mx-auto my-auto h-40 w-40 sm:h-36 sm:w-36 p-7 border border-[#F1662A] rounded-2xl shadow-lg hover:shadow-inner-custom transition-all"
          />

          <p className="text-center">
            Find the right jobs, manage all applications in one place and never
          </p>
        </div>
        <div className="w-full md:w-52 flex flex-col mx-auto space-y-4 pb-8 md:pb-auto text-[#595959] transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Aptitude
          </h3>

          <img
            src={Aptitude}
            alt={"Aptitude"}
            className="mx-auto my-auto  w-40 sm:h-36 sm:w-36 p-7 border border-primary rounded-2xl shadow-lg hover:shadow-inner-custom transition-all"
          />

          <p className="text-center">
            Acquire the right skills, make yourself more eligible, gain
            visibility
          </p>
        </div>
        <div className="w-full md:w-52 flex flex-col mx-auto  space-y-4 pb-8 md:pb-auto text-[#595959] transition-all duration-500 group-hover:scale-105 hover:saturate-150">
          <h3 className="text-center text-xl first-letter:font-extrabold">
            Network
          </h3>

          <img
            src={Network}
            alt={"Network"}
            className="mx-auto my-auto   h-36 w-36 p-7 border border-[#FF90D9] rounded-2xl shadow-lg hover:shadow-inner-custom transition-all"
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
    </section>
  );
};

export default ThemeSection;
