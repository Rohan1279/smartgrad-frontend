import clsx from "clsx";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import useWindowDimensions from "../../../src/components/core/windowsDimention";
import QuestionIcon from "../../assets/Navbar/QuestionIcon";
import AptitudeIcon from "../../assets/ThemeIcons/Aptitude.jpg";
import CareerIcon from "../../assets/ThemeIcons/Career.jpg";
import NetworkIcon from "../../assets/ThemeIcons/Network.jpg";
import UniversitiesIcon from "../../assets/ThemeIcons/Primary/University.svg";
import University from "../../../src/assets/ThemeIcons/University.jpg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../src/components/ui/dropdown-menu";

import NavIcon from "../../assets/smartgrad-logo.png";
import AptitudesMenu from "./Menus/AptitudesMenu";
import CareersMenu from "./Menus/CareersMenu";
import NetworksMenu from "./Menus/NetworksMenu";
import UniversitiesMenu from "./Menus/UniversitiesMenu";
import SlideWrapper from "./SlideWrapper";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const [hovering, sethovering] = useState(null);
  const [popOverLeft, setPopOverLeft] = useState(0);
  const [popOverHeight, setPopOverHeight] = useState(0);
  const [popOverWidth, setPopOverWidth] = useState(0);
  const refs = useRef([]);
  const { width } = useWindowDimensions();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (width > 992) {
      setShowMobileMenu(false);
    }
    return () => {};
  }, [width]);

  const onMouseEnter = (index, element) => {
    sethovering(index);
    setPopOverLeft(element.offsetLeft);
    const menuElement = refs.current[index];
    if (menuElement) {
      setPopOverHeight(menuElement.offsetHeight);
      setPopOverWidth(menuElement.offsetWidth);
    }
  };
  return (
    <Fragment>
      <nav
        onMouseLeave={() => {
          sethovering(null);
        }}
        className="bg-white shadow-sm text-[#595959] sticky w-full top-0 z-50"
      >
        <div className="mx-auto max-w-7xl ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setShowMobileMenu(!showMobileMenu);
                }}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {!showMobileMenu ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <IoMdClose size={24} />
                )}

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={NavIcon}
                  alt="Your Logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={NavIcon}
                  alt="Your Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    onMouseEnter={(e) => {
                      onMouseEnter(1, e.currentTarget);
                    }}
                    href=""
                    className="flex items-center justify-center space-x-2 "
                  >
                    <img src={University} alt="" className="w-7 rounded-full" />
                    <span className="text-primary">
                      {t("navbar.universities")}
                    </span>
                  </a>
                  <a
                    onMouseEnter={(e) => {
                      onMouseEnter(2, e.currentTarget);
                    }}
                    href=""
                    className="flex items-center justify-center space-x-2 "
                  >
                    <img src={CareerIcon} alt="" className="w-7 rounded-full" />
                    <span className="text-primary">{t("navbar.careers")}</span>
                  </a>
                  <a
                    onMouseEnter={(e) => {
                      onMouseEnter(3, e.currentTarget);
                    }}
                    href=""
                    className="flex items-center justify-center space-x-2 "
                  >
                    <img
                      src={AptitudeIcon}
                      alt=""
                      className="w-7 rounded-full"
                    />
                    <span className="text-primary">
                      {t("navbar.aptitudes")}
                    </span>
                  </a>
                  <a
                    onMouseEnter={(e) => {
                      onMouseEnter(4, e.currentTarget);
                    }}
                    href=""
                    className="flex items-center justify-center space-x-2 "
                  >
                    <img
                      src={NetworkIcon}
                      alt=""
                      className="w-7 rounded-full"
                    />
                    <span className="text-primary">{t("navbar.networks")}</span>
                  </a>
                </div>
              </div>
            </div>
            {/* submenu's */}
            <div
              className={clsx(
                "absolute top-12  -ml-2  duration-500",
                hovering
                  ? "transition-all opacity-100 "
                  : "opacity-0 pointer-events-none"
              )}
              style={{ left: popOverLeft || 0 }}
            >
              <div
                style={{
                  height: popOverHeight || 100,
                  width: popOverWidth,
                }}
                className="bg-white overflow-hidden  transform-gpu rounded-xl shadow-lg transition-all duration-500 "
              >
                <SlideWrapper index={1} hovering={hovering}>
                  <UniversitiesMenu
                    setPopOverWidth={setPopOverWidth}
                    ref={(element) => (refs.current[1] = element)}
                  />
                </SlideWrapper>
                <SlideWrapper index={2} hovering={hovering}>
                  <CareersMenu
                    setPopOverWidth={setPopOverWidth}
                    ref={(element) => (refs.current[2] = element)}
                  />
                </SlideWrapper>
                <SlideWrapper index={3} hovering={hovering}>
                  <AptitudesMenu
                    setPopOverWidth={setPopOverWidth}
                    ref={(element) => (refs.current[3] = element)}
                  />
                </SlideWrapper>
                <SlideWrapper index={4} hovering={hovering}>
                  <NetworksMenu
                    setPopOverWidth={setPopOverWidth}
                    ref={(element) => (refs.current[4] = element)}
                  />
                </SlideWrapper>
              </div>
            </div>
            {/* profile & settings */}
            <div className="absolute inset-y-0 right-0 flex items-center justify-center gap-x-[15px]  pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <button className="border border-primary text-[17px] size-[28px] rounded-[5px] flex justify-center items-center hover:bg-primary hover:stroke-white hover:fill-primary transition-all">
                    <QuestionIcon className={""} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="#about">About Us</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#testimonials">Testimonials</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* {i18next.language === "en" ? (
                <img
                  onClick={() => {
                    i18next.changeLanguage("bn");
                  }}
                  src={GlobeBnIcon}
                  alt="search-icon"
                  className="w-7 cursor-pointer hover:scale-110 transition-all active:scale-100"
                />
              ) : (
                <img
                  onClick={() => {
                    i18next.changeLanguage("en");
                  }}
                  src={GlobeEnIcon}
                  alt="search-icon"
                  className="w-7 cursor-pointer hover:scale-110 transition-all active:scale-100"
                />
              )} */}
              <button className="mx-auto border border-primary text-[10px] size-[28px] rounded-[5px] flex justify-center items-center text-primary hover:bg-primary hover:text-white transition-all">
                EN
              </button>

              <div className="relative ">
                <div>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://smartgrad-dashboard.vercel.app/login")
                    }
                    className="border border-primary hover:bg-primary hover:shadow-md transition-all text-primary text-[12px] rounded-[5px] w-[62px] h-[28px] hover:text-white"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMobileMenu && <SideBar />}
      </nav>
    </Fragment>
  );
}
