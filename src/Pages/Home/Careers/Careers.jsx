import background from "../../../assets/Background/background-primary.png";

import bag from "../../../assets/JobIcons/bag.png";
import location from "../../../assets/JobIcons/location.png";
import time from "../../../assets/JobIcons/time.png";
import CareerIcon from "../../../assets/ThemeIcons/CareerIcon";
import CareerCard from "../../../components/CareerCard/CareerCard";
const Careers = ({ careers }) => {
  // const careers = [
  //   {
  //     logo: company1,
  //     company: "Microsoft",
  //     role: "Software Engineer",
  //     location: "Chittagong, Bangladesh",
  //     jobType: "(Remote Job)",
  //     rating: "",
  //     deadline: "6 January, 2024",
  //     description:
  //       "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
  //   },
  //   {
  //     logo: company2,
  //     company: "Alter Sense",
  //     role: "UI/UX Designer",
  //     location: "Dhaka, Bangladesh",
  //     jobType: "(On-Site Job)",
  //     rating: "",
  //     deadline: "12 January, 2024",
  //     description:
  //       "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
  //   },
  //   {
  //     logo: company3,
  //     company: "SATV",
  //     role: "Mechanical Engineer",
  //     location: "Chittagong, Bangladesh",
  //     jobType: "(Remote Job)",
  //     rating: "",
  //     deadline: "21 January, 2024",
  //     description:
  //       "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
  //   },
  //   {
  //     logo: company4,
  //     role: "NYBSYS",
  //     location: "Dhaka, Bangladesh",
  //     jobType: "(On-Site Job)",
  //     rating: "",
  //     deadline: "10 January, 2024",
  //     isFeatured: true,
  //     description:
  //       "Just gonna keep things like these , will reorganize segments later. Scrambling faster and over and over again may get me something . The motto is to keep reorganizing and getting the best layout. Better to keep only logo/photos of hiring companies, putting images or symbols of every occupation could be painful and...",
  //   },
  // ];
  const featuredData = careers.find((career) => career?.isFeatured);
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-primary mb-[100px] relative"
    >
      <div style={{ backdropFilter: "blur(8px)" }} className="py-10 z-20">
        <div className="max-w-7xl mx-auto relative bg-white bg-opacity-55 p-10 rounded-xl">
          <div className="flex justify-between mb-7">
            <div className="flex space-x-2 stroke-primary">
              <CareerIcon className="w-14 h-14" />
              {/* <img src={bag} alt="convocation-cap" className="w-10 h-10" /> */}
              <div>
                <h2 className="text-2xl font-bold">Careers</h2>
                <p className="text-base">
                  Look for the jobs that suit you and start applying now
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mmd:grid-cols-5 gap-y-8">
            <div className="mmd:col-span-2 flex flex-col space-y-3">
              {careers.map((career, index) => (
                <CareerCard key={index} career={career} />
              ))}
            </div>

            <div className="mmd:col-span-3 hidden sm:flex ">
              <div className="hidden mmd:block border border-[#595959] h-full mr-10"></div>
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl">
                    <span className="text-primary font-bold">
                      {featuredData?.company}
                    </span>{" "}
                    <p>is looking for</p>
                  </h2>
                  <span className="">⭐⭐⭐⭐⭐</span>
                </div>

                <div className="flex flex-col sm:flex-row space-y-8 items-start sm:items-start justify-center sm:justify-between mt-4">
                  <div className="flex flex-col sm:flex-row sm:space-y-auto justify-start items-start sm:items-start space-x-4">
                    <img src={featuredData?.logo} alt="" className="w-32" />
                    <div className="">
                      <div className="">
                        <h3 className="font-bold text-3xl mb-2">
                          {featuredData?.role}
                        </h3>
                        <div className="flex items-center space-x-3 ">
                          <img src={location} alt="" className="w-[8%] " />
                          <span>{featuredData?.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 ">
                          <img src={bag} alt="" className="w-[8%] " />
                          <span>{featuredData?.jobType}</span>
                        </div>
                        <div className="flex items-center space-x-3 ">
                          <img src={time} alt="" className="w-[8%] " />
                          <span>{featuredData?.deadline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary w-fit h-10 px-4 rounded-xl text-white">
                    Apply Now
                  </button>
                </div>
                <div className="mt-5">
                  <h3 className="text-2xl font-bold">About The Job</h3>
                  <p>
                    Just gonna keep things like these , will reorganize segments
                    later. Scrambling faster and over and over again may get me
                    something . The motto is to keep reorganizing and getting
                    the best layout. Better to keep only logo/photos of hiring
                    companies, putting images or symbols of every occupation
                    could be painful and...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden mmd:flex justify-center mt-2 ">
            <button className="bg-primary mt-2 mmd:mt-auto w-fit h-11 px-12 rounded-xl text-white mx-auto">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className="absolute h-14 bottom-0 w-full bg-gradient-to-b from-transparent to-white -mb-2"></div>
    </section>
  );
};

export default Careers;
