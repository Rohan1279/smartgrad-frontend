import BannerButton from "../../../components/BannerButton/BannerButton";
import UniversityIcon from "../../../assets/university-icon.svg";
import NetworkIcon from "../../../assets/network-icon.svg";
import Aptitude from "../../../assets/bookmark1x.png";
import CareerIcon from "../../../assets/career-icon.svg";
import background from "../../../assets/background-shapes.png";
import bannerCover from "../../../assets/banner-cover.png";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../components/ui/navigation-menu";
const Banner = () => {
  const { t } = useTranslation();
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
            <p className="text-[30px] md:text-[40px] font-bold ">
              <span className="text-[#00D4D6]">Smart</span>Grad
            </p>
          </div>
          <hr className="border border-t-black w-full"></hr>
        </div>
        <div className=" col-span-full grid grid-cols-1 md:grid-cols-2 relative">
          <section className="text-4xl text-[#595959] leading-tight flex md:block items-center justify-center flex-col md:flex-row">
            <div className="text-[30px]  md:text-[40px]">
              <p>{t("banner.heading_secondary.your_education_&_career")}</p>
              <p>
                {t("banner.heading_secondary.advisor")},{" "}
                <span className="font-bold text-[#FFC24D]">
                  {t("banner.heading_secondary.for_life")}
                </span>
              </p>
            </div>
            <NavigationMenu className="flex md:mt-3">
              <NavigationMenuList className="">
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className="relative w-16 h-16 rounded-xl  hover:bg-[#00D4D6] hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-[#595959] transition-all mr-2 lg:mr-6">
                    <BannerButton
                      icon={UniversityIcon}
                      text={t("navbar.universities")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="  lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-[#595959]">
                      {t("banner.banner_buttons.universities")}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className="relative w-16 h-16 rounded-xl  hover:bg-[#00D4D6] hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-[#595959] transition-all mr-2 lg:mr-6">
                    <BannerButton
                      icon={CareerIcon}
                      text={t("navbar.careers")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="  lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-[#595959]">
                      {t("banner.banner_buttons.careers")}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="mr-6">
                  <NavigationMenuTrigger className="relative w-16 h-16 rounded-xl  hover:bg-[#00D4D6] hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-[#595959] transition-all mr-2 lg:mr-6">
                    <BannerButton
                      icon={Aptitude}
                      text={t("navbar.aptitudes")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="  lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-[#595959]">
                      {t("banner.banner_buttons.aptitudes")}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className="relative w-16 h-16 rounded-xl  hover:bg-[#00D4D6] hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-[#595959] transition-all">
                    <BannerButton
                      icon={NetworkIcon}
                      text={t("navbar.networks")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="  lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-[#595959]">
                      {t("banner.banner_buttons.networks")}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>

              {/* <BannerButton icon={UniversityIcon} text={"University"} /> */}
              {/* <BannerButton icon={CareerIcon} text={"Career"} /> */}
              {/* <BannerButton icon={Aptitude} text={"Aptitude"} /> */}
              {/* <BannerButton icon={NetworkIcon} text={"Network"} /> */}
            </NavigationMenu>
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
