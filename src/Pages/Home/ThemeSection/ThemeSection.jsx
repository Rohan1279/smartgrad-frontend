import ThemeCard from "../../../components/ThemeCard/ThemeCard";
import University from "../../../assets/ThemeImages/theme-university.svg";
import Career from "../../../assets/ThemeImages/theme-career.svg";
import Aptitude from "../../../assets/ThemeImages/theme-accelerate.svg";
import Network from "../../../assets/ThemeImages/theme-network.svg";
import background from "../../../assets/Doodle.png";

const ThemeSection = () => {
  return (
    <section
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
      className=" bg-[#F9F9F9] text-[#595959] "
    >
      <div className="relative max-w-7xl mx-auto  flex justify-between py-[100px]">
        <p className="absolute -top-14 bg-[#F9F9F9] text-3xl px-10 pt-4 pb-2 rounded-t-2xl text-[#595959]">
          with <span className="text-[#00D4D6]">smart</span>grad,{" "}
          <span className="font-bold">
            U<span className="ml-1">CAN</span>
          </span>
        </p>
        <div className="w-52 flex-col space-y-4 text-[#595959]">
          <h3 className="text-center text-xl">
            <span className="font-extrabold">
              {"Universities"?.slice(0, 1)}
            </span>
            <span>{"Universities"?.slice(1)}</span>
          </h3>
          <div className="h-36 w-36 mx-auto border border-[#FFC24D] rounded-2xl shadow-lg hover:shadow-inner-custom transition-all">
            <img
              src={University}
              alt={"Universities"}
              className="mx-auto my-auto h-full w-1/2"
            />
          </div>
          <p className="text-center">
            Find the right institutions, get the right advice, manage all
            applications in one place
          </p>
        </div>
        <div className="w-52 flex-col space-y-4 text-[#595959]">
          <h3 className="text-center text-xl">
            <span className="font-extrabold">{"Careers"?.slice(0, 1)}</span>
            <span>{"Careers"?.slice(1)}</span>
          </h3>
          <div className="h-36 w-36 mx-auto border border-[#F1662A] rounded-2xl shadow-lg hover:shadow-inner-custom transition-all">
            <img
              src={Career}
              alt={"Careers"}
              className="mx-auto my-auto h-full w-1/2"
            />
          </div>
          <p className="text-center">
            Find the right jobs, manage all applications in one place and never
          </p>
        </div>
        <div className="w-52 flex-col space-y-4 text-[#595959]">
          <h3 className="text-center text-xl">
            <span className="font-extrabold">{"Aptitude"?.slice(0, 1)}</span>
            <span>{"Aptitude"?.slice(1)}</span>
          </h3>
          <div className="h-36 w-36 mx-auto border border-[#00D4D6] rounded-2xl shadow-lg hover:shadow-inner-custom transition-all">
            <img
              src={Aptitude}
              alt={"Aptitude"}
              className="mx-auto my-auto h-full w-1/2"
            />
          </div>
          <p className="text-center">
            Acquire the right skills, make yourself more eligible, gain
            visibility
          </p>
        </div>
        <div className="w-52 flex-col space-y-4 text-[#595959]">
          <h3 className="text-center text-xl">
            <span className="font-extrabold">{"Network"?.slice(0, 1)}</span>
            <span>{"Network"?.slice(1)}</span>
          </h3>
          <div className="h-36 w-36 mx-auto border border-[#FF90D9] rounded-2xl shadow-lg hover:shadow-inner-custom transition-all">
            <img
              src={Network}
              alt={"Network"}
              className="mx-auto my-auto h-full w-1/2"
            />
          </div>
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
