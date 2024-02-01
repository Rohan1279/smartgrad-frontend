import NavIcon from "../../assets/smart-grad.svg";
import search from "../../assets/search.png";
import GlobeEnIcon from "../../assets/globe-en.png";
import GlobeBnIcon from "../../assets/globe-bn.png";
import { BsCaretDownFill } from "react-icons/bs";
import { Fragment, useEffect, useRef, useState } from "react";
import UniversitiesMenu from "./Menus/UniversitiesMenu";
import CareersMenu from "./Menus/CareersMenu";
import AptitudesMenu from "./Menus/AptitudesMenu";
import NetworksMenu from "./Menus/NetworksMenu";
import clsx from "clsx";
import SlideWrapper from "./SlideWrapper";
import { Button } from "../../components/ui/button";
import { useTranslation } from "react-i18next";
import UniversitiesIcon from "../../assets/convocation-cap.png";
import CareerIcon from "../../assets/JobIcons/bag.png";
import AptitudeIcon from "../../assets/aptitude-icon.png";
import NetworkIcon from "../../assets/network-icon.svg";
import i18next from "i18next";
import useWindowDimensions from "../../../src/components/core/windowsDimention";
import SideBar from "./sideBar";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const { t } = useTranslation();
  const [hovering, sethovering] = useState(null);
  console.log(hovering);
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
        class="bg-white shadow-md text-[#595959] sticky w-full top-0 z-50"
      >
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setShowMobileMenu(!showMobileMenu);
                }}
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                {!showMobileMenu ? (
                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <IoMdClose size={24} />
                )}

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
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
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    onMouseEnter={(e) => {
                      onMouseEnter(1, e.currentTarget);
                    }}
                    href=""
                    className="flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium"
                  >
                    <img src={UniversitiesIcon} alt="" className="w-4" />
                    <span className="text-base">
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
                    <img src={CareerIcon} alt="" className="w-4" />
                    <span className="text-base">{t("navbar.careers")}</span>
                  </a>
                  <a
                    onMouseEnter={(e) => {
                      onMouseEnter(3, e.currentTarget);
                    }}
                    href=""
                    className="flex items-center justify-center space-x-2 "
                  >
                    <img src={AptitudeIcon} alt="" className="w-4" />
                    <span className="text-base">{t("navbar.aptitudes")}</span>
                  </a>
                  <a
                    onMouseEnter={(e) => {
                      onMouseEnter(4, e.currentTarget);
                    }}
                    href=""
                    className="flex items-center justify-center space-x-2 "
                  >
                    <img src={NetworkIcon} alt="" className="w-4" />
                    <span className="text-base">{t("navbar.networks")}</span>
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
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {i18next.language === "en" ? (
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
              )}
              {/* <img
                src={search}
                alt="search-icon"
                className="w-5 ml-3 cursor-pointer"
              /> */}

              <div class="relative ml-3">
                <div>
                  <button className="bg-[#09D5D7] hover:shadow-md transition-all text-white text-[12px] rounded-xl px-4 py-2">
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
