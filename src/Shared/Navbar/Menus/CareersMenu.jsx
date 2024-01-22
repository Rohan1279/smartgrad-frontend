import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const CareersMenu = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <nav ref={ref} className=" rounded-xl">
      <ul>
        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.careers_menu.cv_review")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.careers_menu.mock_interview")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.careers_menu.soft_skill_development")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.careers_menu.networking")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.careers_menu.job_app_support")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.careers_menu.counselling")}
        </a>
      </ul>
    </nav>
  );
});
CareersMenu.displayName = "CareersMenu";

export default CareersMenu;
