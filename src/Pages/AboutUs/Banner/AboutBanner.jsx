import React, { Fragment } from "react";
import { Button } from "../../../components/ui/button";
import { FaPhone } from "react-icons/fa6";

const AboutBanner = () => {
  return (
    <Fragment>
      <div className="flex flex-col w-full h-[80vh] bg-[#DDE9FF] items-center justify-center">
        <p className="text-xs mmd:text-sm uppercase tracking-[5px] my-4">
          Welcome To <span className="text-[#E88E4B] ">SmartGrad</span>
        </p>
        <p className="text-3xl sm:text-4xl mmd:text-6xl font-bold ">
          Unlocking <span className="text-[#E88E4B] ">Futures</span>,
        </p>
        <p className="text-3xl sm:text-4xl mmd:text-6xl font-bold mt-2">
          Navigating <span className="text-[#E88E4B] ">Success</span>
        </p>
        {/* <p className="text-3xl sm:text-4xl mmd:text-6xl font-bold mt-2">
          into reality!
        </p> */}
        <p className="text-sm mmd:text-base mt-8 text-center px-4">
          Explore Higher Education, Achieve Success, Hone Skills, and Build
          Connections: Your Journey with UCAN Begins Here. Join Us Today!
        </p>
        {/* <p className="text-sm mmd:text-base text-center px-4">
          UCAN, So You Can! Unlock University Opportunities, Cultivate Career
          Success, Acquire Aptitudes, Network for a Bright Future! Join
          SmartGrad Now.
        </p> */}
        <Button className="mt-8 rounded-[50px] px-8 py-8 text-base bg-[#467FF7]">
          <FaPhone className="mr-2 h-4 w-4" /> Get In Touch
        </Button>
      </div>
    </Fragment>
  );
};

export default AboutBanner;
