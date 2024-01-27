import Cap from "../../../assets//convocation-cap.png";
import university1 from "../../../assets/UniverstyImages/image 1.png";
import university2 from "../../../assets/UniverstyImages/image 2.png";
import university3 from "../../../assets/UniverstyImages/image 3.png";
import university4 from "../../../assets/UniverstyImages/image 4.png";
import UniversityGridLogo from "../../../assets/UniversityLogos/massachusetts.png";
import UniversityLogo1 from "../../../assets/UniversityLogos/university 1.png";
import UniversityLogo2 from "../../../assets/UniversityLogos/university 2.png";
import UniversityLogo3 from "../../../assets/UniversityLogos/university 3.png";
import UniversityLogo4 from "../../../assets/UniversityLogos/university 4.png";
import UniversityLogo5 from "../../../assets/UniversityLogos/university 5.png";
import UniversityLogo6 from "../../../assets/UniversityLogos/university 6.png";
import background from "../../../assets/background-shapes.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

const University = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" text-[#595959] mb-[100px] px-4"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col mmd:flex-row justify-between mb-7">
          <div className="flex space-x-2">
            <img src={Cap} alt="convocation-cap" className="w-10 h-10" />
            <div>
              <h2 className="text-2xl font-bold">Universities</h2>
              <p className="text-base">
                Get along with the very best of the universities around the
                globe
              </p>
            </div>
          </div>
          <span className="underline text-base font-bold ml-auto mmd:ml-0">
            See More
          </span>
        </div>

        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-3 row-span-full rounded-xl overflow-hidden relative">
            <img
              src={university1}
              alt=""
              className="object-cover h-full w-full"
            />
            <span className="absolute bottom-0 mmd:bottom-10 left-2 mmd:left-10 z-30 text-white text-sm mmd:text-2xl font-bold">
              20% Scholarship on <p>Masters of Science in Data Science</p>
            </span>
            <img
              src={UniversityGridLogo}
              alt=""
              className="absolute top-2 mmd:top-8 left-2 mmd:left-10 w-10 mmd:w-16"
            />
          </div>
          <div className="col-span-2 row-span-3  rounded-xl overflow-hidden">
            <img
              src={university2}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          <div className="col-span-2 row-span-2  grid grid-cols-2 gap-x-4">
            <div className="col-span-1 rounded-xl overflow-hidden">
              <img
                src={university3}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden ">
              <img
                src={university4}
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
        {/* CAROUSAL */}
        <h2 className="text-2xl font-bold mt-11">Our Successful Enrollments</h2>
        <div className="px-10 lsm:px-40 mt-11">
          <Carousel>
            <CarouselContent className="py-5">
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={UniversityLogo1}
                    alt=""
                    className="w-20 h-20 hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={UniversityLogo2}
                    alt=""
                    className="w-20 h-20 hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={UniversityLogo3}
                    alt=""
                    className="w-20 h-20 hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={UniversityLogo5}
                    alt=""
                    className="w-20 h-20 hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={UniversityLogo4}
                    alt=""
                    className="w-20 h-20 hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={UniversityLogo6}
                    alt=""
                    className="w-20 h-20 hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="" />
            <CarouselNext className="" />
          </Carousel>
        </div>
        <div className="mt-10">
          <p>
            All these universities above currently have Bachelors, Masters and
            Phd programs, offer online and on-site degrees, both. SmartGrad
            makes sure that all the applicants and interested individuals get
            enough exposure to the universities. Applying has never been this
            easy. Hassles of filling up forms, running after embassies, visa and
            tickets etc. a never ending list of formalities and procedures. All
            of these, SmartGrad handles with ease and such expertise that you
            got no worries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default University;
