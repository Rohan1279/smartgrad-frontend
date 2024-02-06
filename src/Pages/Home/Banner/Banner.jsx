import BannerButton from "../../../components/BannerButton/BannerButton";
import UniversityIcon from "../../../assets/ThemeIcons/UniversityIcon";
import UniversityHoverIcon from "../../../assets/ThemeIcons/White/University.svg";
import CareerIcon from "../../../assets/ThemeIcons/CareerIcon";
import CareerHoverIcon from "../../../assets/ThemeIcons/White/Career.svg";
import Aptitude from "../../../assets/ThemeIcons/AptitudeIcon";
import AptitudeHoverIcon from "../../../assets/ThemeIcons/White/Aptitude Icon.svg";
import NetworkIcon from "../../../assets/ThemeIcons/NetworkIcon";
import NetworkHoverIcon from "../../../assets/ThemeIcons/White/Network.svg";
import Background from "../../../assets/Background/background-primary.png";

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
import { useState } from "react";
const Banner = () => {
  const { t } = useTranslation();
  const [isTriggerHovering, setIsTriggerHovering] = useState(false);
  return (
    <header
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="mb-2"
    >
      <div className="max-w-7xl mx-auto h-[817px] grid grid-cols-2  items- text-primary">
        <div className="  col-span-full grid grid-cols-3 items-center w-full  text-center justify-between ">
          <hr className="border border-t-primary border-b-transparent h-[1px]  w-full"></hr>
          <div className="lowercase leading-8">
            <p className="text-3xl">Welcome To</p>
            <p className="text-[30px] md:text-[40px] font-bold ">
              <span className="text-[#09D5D7]">Smart</span>Grad
            </p>
          </div>
          <hr className="border border-t-primary border-b-transparent h-[1px] w-full"></hr>
        </div>
        <div className=" col-span-full relative">
          <section className=" text-primary leading-tight flex md:block items-center justify-center flex-col md:flex-row md:pl-4 ">
            <div className="text-[30px] md:text-[60px] font-bold">
              <p>{t("banner.heading_secondary.your_education_&_career")}</p>
              <p>
                {t("banner.heading_secondary.advisor")},{" "}
                <span
                  style={{
                    WebkitTextStroke: ".001em #4B4E6D",
                    WebkitTextFillColor: "#FFC24D",
                  }}
                >
                  {t("banner.heading_secondary.for_life")}
                </span>
              </p>
            </div>
            <NavigationMenu className="flex md:mt-3">
              <NavigationMenuList className="ss">
                <NavigationMenuItem
                  onMouseOver={() => setIsTriggerHovering(true)}
                  onMouseLeave={() => setIsTriggerHovering(false)}
                  className=" "
                >
                  <NavigationMenuTrigger className="group relative w-16 h-16 rounded-xl bg-white  hover:bg-primary hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white [&_svg]:hover:stroke-white [&_svg]:hover:fill-white px-11 py-10 text-primary transition-all mr-2 lg:mr-6">
                    <BannerButton
                      isTriggerHovering={isTriggerHovering}
                      hoverIcon={UniversityHoverIcon}
                      IconComponent={UniversityIcon}
                      className="mb-1 mx-auto w-7 fill-primary"
                      text={t("navbar.universities")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-primary">
                      {t("banner.banner_buttons.universities")}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem
                  onMouseOver={() => setIsTriggerHovering(true)}
                  onMouseLeave={() => setIsTriggerHovering(false)}
                  className=""
                >
                  <NavigationMenuTrigger className="group [&_svg]:hover:stroke-white relative w-16 h-16 rounded-xl  hover:bg-primary hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-primary transition-all mr-2 lg:mr-6">
                    <BannerButton
                      hoverIcon={CareerHoverIcon}
                      isTriggerHovering={isTriggerHovering}
                      IconComponent={CareerIcon}
                      className="mb-1 mx-auto w-7 stroke-primary  fill-none"
                      text={t("navbar.careers")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="  lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-primary">
                      {t("banner.banner_buttons.careers")}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem
                  onMouseOver={() => setIsTriggerHovering(true)}
                  onMouseLeave={() => setIsTriggerHovering(false)}
                  className="mr-6"
                >
                  <NavigationMenuTrigger className="group [&_svg]:hover:stroke-white relative w-16 h-16 rounded-xl  hover:bg-primary hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-primary transition-all mr-2 lg:mr-6">
                    <BannerButton
                      hoverIcon={AptitudeHoverIcon}
                      isTriggerHovering={isTriggerHovering}
                      IconComponent={Aptitude}
                      className="mb-1 mx-auto w-7 stroke-primary fill-none"
                      text={t("navbar.aptitudes")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="  lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-primary">
                      {t("banner.banner_buttons.aptitudes")}
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem
                  onMouseOver={() => setIsTriggerHovering(true)}
                  onMouseLeave={() => setIsTriggerHovering(false)}
                  className=""
                >
                  <NavigationMenuTrigger className="group [&_svg]:hover:stroke-white relative w-16 h-16 rounded-xl  hover:bg-primary hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-primary transition-all">
                    <BannerButton
                      hoverIcon={NetworkHoverIcon}
                      isTriggerHovering={isTriggerHovering}
                      IconComponent={NetworkIcon}
                      className="mb-1 mx-auto w-7 stroke-primary fill-none "
                      text={t("navbar.networks")}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="  lg:w-[435px] lg:bg-[#F5F5F5F0] lg:border-none leading-5 px-7 py-5">
                    <NavigationMenuLink className="text-[16px] text-primary">
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
        </div>
      </div>
    </header>
  );
};

export default Banner;
