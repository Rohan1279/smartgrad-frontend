import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const AptitudesMenu = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <nav ref={ref} className=" rounded-xl">
      <ul>
        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.aptitudes_menu.soft_skills")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.aptitudes_menu.standardized_test_prep")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.aptitudes_menu.technical_skills")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.aptitudes_menu.networking")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-48 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.aptitudes_menu.business_skills")}
        </a>
      </ul>
    </nav>
  );
});
AptitudesMenu.displayName = "AptitudesMenu";

export default AptitudesMenu;
