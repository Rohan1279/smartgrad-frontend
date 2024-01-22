import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const NetworksMenu = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <nav ref={ref} className="rounded-xl">
      <ul>
        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.networks_menu.sector_consultants")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.networks_menu.mentors")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.networks_menu.friends")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.networks_menu.networking")}
        </a>
        <hr className="border-[#d9d9d9] border-opacity-50" />

        <a className="pl-2 w-44 py-2 hover:bg-[#f9f9f9] cursor-pointer transition-all block">
          {t("navbar.navbar_submenus.networks_menu.community")}
        </a>
      </ul>
    </nav>
  );
});
NetworksMenu.displayName = "NetworksMenu";

export default NetworksMenu;
