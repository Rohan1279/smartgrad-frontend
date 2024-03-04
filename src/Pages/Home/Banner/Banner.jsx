import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../components/ui/navigation-menu";

import Background from "../../../assets/Background/background.png";
import Aptitude from "../../../assets/ThemeIcons/AptitudeIcon";
import CareerIcon from "../../../assets/ThemeIcons/CareerIcon";
import NetworkIcon from "../../../assets/ThemeIcons/NetworkIcon";
import UniversityIcon from "../../../assets/ThemeIcons/UniversityIcon";
import AptitudeHoverIcon from "../../../assets/ThemeIcons/White/Aptitude Icon.svg";
import CareerHoverIcon from "../../../assets/ThemeIcons/White/Career.svg";
import NetworkHoverIcon from "../../../assets/ThemeIcons/White/Network.svg";
import UniversityHoverIcon from "../../../assets/ThemeIcons/White/University.svg";
import BannerButton from "../../../components/BannerButton/BannerButton";

const bannerItems = [
  {
    icon: UniversityIcon,
    hoverIcon: UniversityHoverIcon,
    textKey: "navbar.universities",
    content: "universities",
  },
  {
    icon: CareerIcon,
    hoverIcon: CareerHoverIcon,
    textKey: "navbar.careers",
    content: "careers",
  },
  {
    icon: Aptitude,
    hoverIcon: AptitudeHoverIcon,
    textKey: "navbar.aptitudes",
    content: "aptitudes",
  },
  {
    icon: NetworkIcon,
    hoverIcon: NetworkHoverIcon,
    textKey: "navbar.networks",
    content: "networks",
  },
];

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
    >
      <div className="max-w-7xl mx-auto h-[817px] grid grid-cols-2  items- text-primary">
        <div className="  col-span-full grid grid-cols-3 items-center w-full text-center justify-between ">
          <hr className="border border-t-primary border-b-transparent h-[1px] w-full"></hr>
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
            <div className="text-[30px] md:text-[60px] ">
              <p>{t("banner.heading_secondary.your_education_&_career")}</p>
              <p>
                {t("banner.heading_secondary.advisor")},{" "}
                <span
                  // style={{
                  //   WebkitTextStroke: ".001em #4B4E6D",
                  //   WebkitTextFillColor: "#FFC24D",
                  // }}
                  className="text-primary  font-bold"
                >
                  {t("banner.heading_secondary.for_life")}
                </span>
              </p>
            </div>
            <NavigationMenu className="flex mt-8 md:mt-3 ">
              <NavigationMenuList className="ss gap-x-2">
                {bannerItems.map((item, index) => (
                  <NavigationMenuItem
                    key={index}
                    onMouseOver={() => setIsTriggerHovering(true)}
                    onMouseLeave={() => setIsTriggerHovering(false)}
                    className=""
                  >
                    <NavigationMenuTrigger
                      className={`group relative size-[86px] rounded-xl bg-white  hover:bg-primary hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white [&_svg]:hover:stroke-white p-10 lg:p-12 text-primary transition-all lg:mr-4 ${
                        item.content === "universities"
                          ? "[&_svg]:hover:fill-white"
                          : ""
                      }`}
                    >
                      <BannerButton
                        isTriggerHovering={isTriggerHovering}
                        hoverIcon={item.hoverIcon}
                        IconComponent={item.icon}
                        className={`mb-1 mx-auto w-7 ${
                          item.content === "universities"
                            ? "stroke-primary fill-primary"
                            : "stroke-primary fill-none"
                        }`}
                        text={t(item.textKey)}
                      />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full lg:w-[435px] bg-white lg:border-none leading-5 px-7 py-5">
                      <NavigationMenuLink className="text-[16px] text-primary">
                        {t(`banner.banner_buttons.${item.content}`)}
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Banner;
