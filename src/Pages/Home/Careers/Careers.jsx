import CareerCard from "../../../components/CareerCard/CareerCard";
import company2 from "../../../assets/CompanyLogos/company 2.png";
import bag from "../../../assets/JobIcons/bag.png";
import location from "../../../assets/JobIcons/location.png";
import time from "../../../assets/JobIcons/time.png";
import company1 from "../../../assets/CompanyLogos/company 1.png";
import company3 from "../../../assets/CompanyLogos/company 3.png";
import company4 from "../../../assets/CompanyLogos/company 4.png";
import background from "../../../assets/background-shapes.png";

const Careers = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "",
      }}
      className="text-[#595959] mb-[100px] px-4"
    >
      <div className="max-w-7xl mx-auto relative ">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <img src={bag} alt="convocation-cap" className="w-10 h-10" />
            <div>
              <h2 className="text-2xl font-bold">Featured Careers</h2>
              <p className="text-base">
                Look for the jobs that suit you and start applying now
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mmd:grid-cols-5 gap-y-8">
          {/* COMPANY LIST */}
          <div className="mmd:col-span-2 flex flex-col space-y-3">
            <CareerCard
              logo={company1}
              role={"Software Engineer"}
              location={"Chittagong, Bangladesh"}
              jobType={"(Remote Job)"}
              rating={""}
              deadline={"6 January, 2024"}
            />
            <CareerCard
              logo={company2}
              role={"UI/UX Designer"}
              location={"Dhaka, Bangladesh"}
              jobType={"(On-Site Job)"}
              rating={""}
              deadline={"12 January, 2024"}
            />
            <CareerCard
              logo={company3}
              role={"Mechanical Engineer"}
              location={"Chittagong, Bangladesh"}
              jobType={"(Remote Job)"}
              rating={""}
              deadline={"21 January, 2024"}
            />
            <CareerCard
              logo={company4}
              role={"Journalist"}
              location={"Dhaka, Bangladesh"}
              jobType={""}
              rating={"(On-Site Job)"}
              deadline={"10 January, 2024"}
            />
          </div>

          {/* JOB DETAILS */}
          <div className="mmd:col-span-3 flex">
            <div className="hidden mmd:block border border-[#595959] h-full mr-10"></div>
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-3xl">
                  <span className="text-[#00D4D6] font-bold">Nybsys</span>{" "}
                  <p>is looking for</p>
                </h2>
                <span className="">⭐⭐⭐⭐⭐</span>
              </div>

              <div className="flex flex-col sm:flex-row space-y-8 items-center sm:items-start justify-center sm:justify-between mt-4">
                <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-auto justify-start items-center sm:items-start space-x-4 ">
                  <img src={company2} alt="" className="w-32" />
                  <div className="flex flex-col bg-red h-full">
                    <div className="tex">
                      <h3 className="font-bold text-3xl mb-2">
                        UI/UX Designer
                      </h3>
                      <div className="flex items-center space-x-3 ">
                        <img src={location} alt="" className="w-[8%] " />
                        <span>Chittagong, Bangladesh</span>
                      </div>
                      <div className="flex items-center space-x-3 ">
                        <img src={bag} alt="" className="w-[8%] " />
                        <span>On-Site Job</span>
                      </div>
                      <div className="flex items-center space-x-3 ">
                        <img src={time} alt="" className="w-[8%] " />
                        <span>5 Days Remaining</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-[#00D4D6] w-fit h-10 px-4 rounded-xl text-white">
                  Apply Now
                </button>
              </div>
              <div className="mt-5 ">
                <h3 className="text-2xl font-bold">About The Job</h3>
                <p>
                  Just gonna keep things like these , will reorganize segments
                  later. Scrambling faster and over and over again may get me
                  something . The motto is to keep reorganizing and getting the
                  best layout. Better to keep only logo/photos of hiring
                  companies, putting images or symbols of every occupation could
                  be painful and...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full bottom-0 h-28 flex justify-center mt-2 bg-gradient-to-b from-transparent to-white">
          <button className="bg-[#595959]  mt-auto w-fit h-11 px-8 rounded-xl text-white">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
