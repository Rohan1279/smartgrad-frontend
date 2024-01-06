import ThemeCard from "../../../components/ThemeCard/ThemeCard";
import University from "../../../assets/ThemeImages/theme-university.svg";
import Career from "../../../assets/ThemeImages/theme-career.svg";
import Skill from "../../../assets/ThemeImages/theme-skill.svg";
import Network from "../../../assets/ThemeImages/theme-network.svg";
const ThemeSection = () => {
  return (
    <section className=" bg-[#F9F9F9]">
      <div className="relative max-w-7xl mx-auto  flex justify-between py-28">
        <p className="absolute -top-14 bg-[#F9F9F9] text-3xl px-10 pt-4 pb-2 rounded-t-2xl text-[#595959]">
          With <span className="text-[#00D4D6]">SmartGrad</span>, You Can
        </p>
        <ThemeCard
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
        />
      </div>
    </section>
  );
};

export default ThemeSection;
