import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const UniversitiesMenu = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <nav ref={ref} className="rounded-xl">
      <ul className="">
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.universities_menu.university_admission")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.universities_menu.essay_writing")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t(
            "navbar.navbar_submenus.universities_menu.visa_processing_&_travel"
          )}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />
        <a className=" pl-2 w-52 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t(
            "navbar.navbar_submenus.universities_menu.extracurricular_activities_&_soft_skills"
          )}
        </a>
      </ul>
    </nav>
  );
});

UniversitiesMenu.displayName = "UniversitiesMenu";

export default UniversitiesMenu;
