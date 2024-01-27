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

const SideBar = () => {
  const { t } = useTranslation();
  const refs = useRef([]);
  const [isUniOpen, setIsUniOpen] = useState(false);
  const [setPopOverWidth, setSetPopOverWidth] = useState(null);

  return (
    <Fragment>
      <div class="sm:hidden t-24 sticky w-full bg-white z-50" id="mobile-menu">
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

          <a
            onMouseEnter={(e) => {}}
            href=""
            className="flex items-center justify-start space-x-2 px-3 py-2 text-sm font-medium"
          >
            <img src={CareerIcon} alt="" className="w-4" />
            <span className="">{t("navbar.careers")}</span>
          </a>
          <a
            onMouseEnter={(e) => {}}
            href=""
            className="flex items-center justify-start space-x-2 px-3 py-2 text-sm font-medium"
          >
            <img src={AptitudeIcon} alt="" className="w-4" />
            <span className="">{t("navbar.aptitudes")}</span>
          </a>
          <a
            onMouseEnter={(e) => {}}
            href=""
            className="flex items-center justify-start space-x-2 px-3 py-2 text-sm font-medium"
          >
            <img src={NetworkIcon} alt="" className="w-4" />
            <span className="">{t("navbar.networks")}</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default SideBar;
