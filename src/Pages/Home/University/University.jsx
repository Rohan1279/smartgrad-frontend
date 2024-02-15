import Cap from "../../../assets//convocation-cap.png";
import background from "../../../assets/Background/background-primary.png";
import UniversityGridLogo from "../../../assets/UniversityLogos/massachusetts.png";
import UniversityLogo1 from "../../../assets/UniversityLogos/university 1.png";
import UniversityLogo2 from "../../../assets/UniversityLogos/university 2.png";
import UniversityLogo3 from "../../../assets/UniversityLogos/university 3.png";
import UniversityLogo4 from "../../../assets/UniversityLogos/university 4.png";
import UniversityLogo5 from "../../../assets/UniversityLogos/university 5.png";
import UniversityLogo6 from "../../../assets/UniversityLogos/university 6.png";
import university1 from "../../../assets/UniverstyImages/image 1.png";
import university2 from "../../../assets/UniverstyImages/image 2.png";
import university3 from "../../../assets/UniverstyImages/image 3.png";
import university4 from "../../../assets/UniverstyImages/image 4.png";
import UniversityIcon from "../../../assets/ThemeIcons/UniversityIcon";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

const University = () => {
  const carouselItems = [
    {
      image: UniversityLogo1,
      name: "University Name 1",
    },
    {
      image: UniversityLogo2,
      name: "University Name 2",
    },
    {
      image: UniversityLogo3,
      name: "University Name 3",
    },
    {
      image: UniversityLogo4,
      name: "University Name 4",
    },
    {
      image: UniversityLogo5,
      name: "University Name 5",
    },
    {
      image: UniversityLogo6,
      name: "University Name 6",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-primary relative "
    >
      <div className="absolute w-full h-20 bg-transparent -top-10 backdrop-blur-md"></div>
      <div style={{ backdropFilter: "blur(8px)" }}>
        <div className="max-w-7xl mx-auto py-10 pt-20">
          <div className="bg-white bg-opacity-55 p-10 rounded-xl">
            <div className="flex flex-col mmd:flex-row justify-between mb-7">
              <div className="flex space-x-2">
                <UniversityIcon className="w-10 h-10 fill-primary stroke-none" />
                <div>
                  <h2 className="text-2xl font-bold">Universities</h2>
                  <p className="text-base">
                    Get along with the very best of the universities around the
                    globe
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="col-span-5 sm:col-span-3 row-span-full rounded-xl overflow-hidden relative">
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
              <div className="hidden sm:flex col-span-2 row-span-3  rounded-xl overflow-hidden">
                <img
                  src={university2}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="hidden sm:flex col-span-2 row-span-2  grid grid-cols-2 gap-x-4">
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
            <h2 className="text-2xl font-bold mt-11">
              Our Successful Enrollments
            </h2>
            <div className="px-10 lsm:px-40 mt-[34px] ">
              <Carousel className="">
                <CarouselContent className="pb-10  ">
                  {carouselItems.map((item, index) => (
                    <CarouselItem
                      className="basis-1/3 md:basis-1/3 lg:basis-1/5 group relative"
                      key={index}
                    >
                      <div className="p-1 flex justify-center">
                        <img
                          src={item.image}
                          alt=""
                          className="w-[100px] h-2w-[100px] hover:scale-105 transition-all"
                        />
                      </div>
                      <div className="absolute -bottom-8 left-0 right-0 text-sm text-center p-2 opacity-0 group-hover:opacity-100 duration-100">
                        {item.name}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="" />
                <CarouselNext className="" />
              </Carousel>
            </div>
            <div className="mt-6">
              <p>
                All these universities above currently have Bachelors, Masters
                and Phd programs, offer online and on-site degrees, both.
                SmartGrad makes sure that all the applicants and interested
                individuals get enough exposure to the universities. Applying
                has never been this easy. Hassles of filling up forms, running
                after embassies, visa and tickets etc. a never ending list of
                formalities and procedures. All of these, SmartGrad handles with
                ease and such expertise that you got no worries.
              </p>
            </div>
          </div>
        </div>
        <div
          className="p-10 backdrop-blur-md mb-[-4px]"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(249, 249, 249, 1), rgba(255, 255, 255, 0))",
          }}
        ></div>
      </div>
    </section>
  );
};

export default University;
