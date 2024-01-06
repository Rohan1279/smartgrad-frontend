import BannerButton from "../../../components/BannerButton/BannerButton";
import BannerImg from "../../../assets/banner-img.svg";
import UniversityIcon from "../../../assets/university-icon.svg";
import NetworkIcon from "../../../assets/network-icon.svg";
import CoursesIcon from "../../../assets/courses-icon.svg";
import CareerIcon from "../../../assets/career-icon.svg";

const Banner = () => {
  return (
    <header className=" ">
      <div className="max-w-7xl mx-auto h-[80vh] flex justify-between items-center ">
        <section className="text-3xl text-[#595959] leading-normal">
          <div>
            <span className="block">Explore</span>{" "}
            <span className="text-[#00D4D6]">All The Possibilities</span> That
            The
            <span className="block">Technology Has To Offer.</span> It’s{" "}
            <span className="text-[#00D4D6]">Never Too Late To Start.</span>
          </div>
          <div className="flex space-x-6 mt-3">
            <BannerButton icon={UniversityIcon} text={"University"} />
            <BannerButton icon={NetworkIcon} text={"Networking"} />
            <BannerButton icon={CoursesIcon} text={"Courses"} />
            <BannerButton icon={CareerIcon} text={"Career"} />
          </div>
        </section>
        <img src={BannerImg} alt="smartgrad icon" className="" />
      </div>
    </header>
  );
};

export default Banner;
