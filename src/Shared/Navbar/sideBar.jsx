import React, { Fragment, useRef, useState } from "react";
import UniversitiesIcon from "../../assets/convocation-cap.png";
import CareerIcon from "../../assets/JobIcons/bag.png";
import AptitudeIcon from "../../assets/advance.png";
import NetworkIcon from "../../assets/network-icon.svg";
import { useTranslation } from "react-i18next";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import UniversitiesMenu from "./Menus/UniversitiesMenu";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import CareersMenu from "./Menus/CareersMenu";
import AptitudesMenu from "./Menus/AptitudesMenu";
import NetworksMenu from "./Menus/NetworksMenu";

const SideBar = () => {
  const { t } = useTranslation();
  const refs = useRef([]);
  const [isUniOpen, setIsUniOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [isAptitudesOpen, setIsAptitudesOpen] = useState(false);
  const [isNetworkOpen, setIsNetworkOpen] = useState(false);
  const [setPopOverWidth, setSetPopOverWidth] = useState(null);

  return (
    <Fragment>
      <div
        style={{ height: "calc(100vh - 70px)" }}
        class="sm:hidden t-24 sticky w-full bg-white z-50 overflow-y-auto"
        id="mobile-menu"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <Collapsible open={isUniOpen} onOpenChange={setIsUniOpen}>
            <CollapsibleTrigger asChild>
              <Link
                onMouseEnter={(e) => {
                  setIsUniOpen(!isUniOpen);
                }}
                href=""
                className="flex items-center justify-between space-x-2 px-3 py-2 text-sm font-medium"
              >
                <span className="flex items-center justify-between space-x-2">
                  <img src={UniversitiesIcon} alt="" className="w-4" />
                  <span className="">{t("navbar.universities")}</span>
                </span>
                {isUniOpen ? <IoChevronDown /> : <IoChevronUp />}
              </Link>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <UniversitiesMenu
                setPopOverWidth={setPopOverWidth}
                ref={(element) => (refs.current[1] = element)}
              />
            </CollapsibleContent>
          </Collapsible>
          <Collapsible open={isCareerOpen} onOpenChange={setIsCareerOpen}>
            <CollapsibleTrigger asChild>
              <Link
                onMouseEnter={(e) => {
                  setIsCareerOpen(!isCareerOpen);
                }}
                href=""
                className="flex items-center justify-between space-x-2 px-3 py-2 text-sm font-medium"
              >
                <span className="flex items-center justify-between space-x-2">
                  <img src={CareerIcon} alt="" className="w-4" />
                  <span className="">{t("navbar.careers")}</span>
                </span>
                {isCareerOpen ? <IoChevronDown /> : <IoChevronUp />}
              </Link>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CareersMenu
                setPopOverWidth={setPopOverWidth}
                ref={(element) => (refs.current[2] = element)}
              />
            </CollapsibleContent>
          </Collapsible>
          <Collapsible open={isAptitudesOpen} onOpenChange={setIsAptitudesOpen}>
            <CollapsibleTrigger asChild>
              <Link
                onMouseEnter={(e) => {
                  setIsAptitudesOpen(!isAptitudesOpen);
                }}
                href=""
                className="flex items-center justify-between space-x-2 px-3 py-2 text-sm font-medium"
              >
                <span className="flex items-center justify-between space-x-2">
                  <img src={AptitudeIcon} alt="" className="w-4" />
                  <span className="">{t("navbar.aptitudes")}</span>
                </span>
                {isAptitudesOpen ? <IoChevronDown /> : <IoChevronUp />}
              </Link>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <AptitudesMenu
                setPopOverWidth={setPopOverWidth}
                ref={(element) => (refs.current[3] = element)}
              />
            </CollapsibleContent>
          </Collapsible>
          <Collapsible open={isNetworkOpen} onOpenChange={setIsNetworkOpen}>
            <CollapsibleTrigger asChild>
              <Link
                onMouseEnter={(e) => {
                  setIsNetworkOpen(!isNetworkOpen);
                }}
                href=""
                className="flex items-center justify-between space-x-2 px-3 py-2 text-sm font-medium"
              >
                <span className="flex items-center justify-between space-x-2">
                  <img src={NetworkIcon} alt="" className="w-4" />
                  <span className="">{t("navbar.networks")}</span>
                </span>
                {isNetworkOpen ? <IoChevronDown /> : <IoChevronUp />}
              </Link>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <NetworksMenu
                setPopOverWidth={setPopOverWidth}
                ref={(element) => (refs.current[4] = element)}
              />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </Fragment>
  );
};
export default SideBar;
