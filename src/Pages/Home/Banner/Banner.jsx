import BannerButton from "../../../components/BannerButton/BannerButton";
import UniversityIcon from "../../../assets/university-icon.svg";
import NetworkIcon from "../../../assets/network-icon.svg";
import Accelerate from "../../../assets/bookmark1x.png";
import CareerIcon from "../../../assets/career-icon.svg";
import background from "../../../assets/background-shapes.png";
import bannerCover from "../../../assets/banner-cover.png";

const Banner = () => {
  return (
    <header className="mb-2">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="max-w-7xl mx-auto h-[80vh] grid grid-cols-2  items- text-[#595959]"
      >
        <div className="  col-span-full grid grid-cols-3 items-center w-full  text-center justify-between ">
          <hr className="border border-t-black  w-full"></hr>
          <div className="lowercase leading-8">
            <p className="text-3xl">Welcome To</p>
            <p className="text-[40px] font-bold ">
              <span className="text-[#00D4D6]">Smart</span>Grad
            </p>
          </div>
          <hr className="border border-t-black w-full"></hr>
        </div>
        <div className=" col-span-full grid grid-cols-2 relative">
          <section className="text-4xl text-[#595959]  leading-tight ">
            <div className="text-[40px]">
              <p>Your Education & Career</p>
              <p>
                Advisor,{" "}
                <span className="font-bold text-[#FFC24D]">For Life</span>
              </p>
            </div>
            <div className="flex space-x-6 mt-3">
              <BannerButton icon={UniversityIcon} text={"University"} />
              <BannerButton icon={CareerIcon} text={"Career"} />
              <BannerButton icon={Accelerate} text={"Accelerate"} />
              <BannerButton icon={NetworkIcon} text={"Network"} />
            </div>
          </section>
          <img
            src={bannerCover}
            alt="smartgrad icon"
            className="absolute w-1/2 right-0 -bottom-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
